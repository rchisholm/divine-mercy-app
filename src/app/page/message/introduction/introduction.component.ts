import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { style, state, animate, transition, trigger } from "@angular/animations";
import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "Introduction",
    templateUrl: "./introduction.component.html",
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
export class IntroductionComponent implements OnInit {
    items: Array<TextItem>;
    loadingDone: boolean;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.loadingDone = false;

        // this.items = this.data.getTextItems("introduction");
        this.data
            .getLiveTextItems("introduction")
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
                        this.items = this.data.getTextItems("introduction");
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    }
                },
                (err) => {
                    console.log("http error");
                    // console.log(err);
                    this.items = this.data.getTextItems("introduction");
                    setTimeout(() => {
                        this.loadingDone = true;
                    }, 501);
                }
            );
    }

    onBackTap(): void {
        this.router.back();
    }
}
