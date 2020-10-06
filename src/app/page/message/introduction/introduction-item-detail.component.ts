import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { style, state, animate, transition, trigger } from "@angular/animations";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "IntroductionItemDetail",
    templateUrl: "../../../../app/shared/item-detail.component.html",
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
export class IntroductionItemDetailComponent implements OnInit {
    item: TextItem;
    formattedDescription: FormattedString;
    loadingDone: boolean;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;

        // this.item = this.data.getTextItem("introduction", id);
        // this.formattedDescription = this.formatter.formatTagsFromString(this.item.description);

        this.item = this.data.getTextItem("introduction", id);
        this.formattedDescription = this.formatter.formatTagsFromString("");

        this.loadingDone = false;

        this.data
            .getLiveTextItem("introduction", id)
            .subscribe(
                (res) => {
                    if ((<any>res).ok) {
                        this.item = (<any>res).data.item;
                        this.formattedDescription = this.formatter.formatTagsFromString(this.item.description);
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    } else {
                        console.log((<any>res));
                        console.log("!ok error");
                        this.formattedDescription = this.formatter.formatTagsFromString(this.item.description);
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    }
                },
                (err) => {
                    console.log("http error");
                    console.log(err);
                    this.formattedDescription = this.formatter.formatTagsFromString(this.item.description);
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
