import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { style, state, animate, transition, trigger } from "@angular/animations";

@Component({
    selector: "Faustina",
    templateUrl: "./faustina.component.html",
    animations: [
        trigger("fadeInOut", [
          transition(":enter", [   // :enter is alias to 'void => *'
            style({opacity: 0}),
            animate(500, style({opacity: 1}))
          ]),
          transition(":leave", [   // :leave is alias to '* => void'
            animate(500, style({opacity: 0}))
          ])
        ])
    ]
})
export class FaustinaComponent implements OnInit {
    items: Array<TextItem>;
    loadingDone: boolean;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.loadingDone = false;
        // this.items = this.data.getTextItems("faustina");

        this.data
            .getLiveTextItems("faustina")
            .subscribe(
                (res) => {
                    // console.log((<any>res));
                    if ((<any>res).ok) {
                        this.items = (<any>res).data.items;
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    } else {
                        console.log("!ok error");
                        this.items = this.data.getTextItems("faustina");
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    }
                },
                (err) => {
                    console.log("http error");
                    // console.log(err);
                    this.items = this.data.getTextItems("faustina");
                    setTimeout(() => {
                        this.loadingDone = true;
                    }, 501);
                }
            );
    }

    onTap(item: TextItem) {
        if (item.route) {
            this.router.navigate(["../" + item.route], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../faustina", item.id], { relativeTo: this.currentRoute });
        }
    }

    onBackTap(): void {
        this.router.back();
    }
}
