import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { style, state, animate, transition, trigger } from "@angular/animations";

@Component({
    selector: "Timeline",
    templateUrl: "./timeline.component.html",
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
export class TimelineComponent implements OnInit {
    items: Array<TextItem>;
    textBodyArray: Array<string>;
    formattedBodyArray: Array<FormattedString>;
    loadingDone: boolean;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("timeline");
        this.loadingDone = false;

        this.data
            .getLiveTextItems("timeline")
            .subscribe(
                (res) => {
                    // console.log((<any>res));
                    if ((<any>res).ok) {
                        this.items = (<any>res).data.items;
                        this.setFormattedBodyArray();
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    } else {
                        console.log("!ok error");
                        this.items = this.data.getTextItems("timeline");
                        this.setFormattedBodyArray();
                        setTimeout(() => {
                            this.loadingDone = true;
                        }, 501);
                    }
                },
                (err) => {
                    console.log("http error");
                    // console.log(err);
                    this.items = this.data.getTextItems("timeline");
                    this.setFormattedBodyArray();
                    setTimeout(() => {
                        this.loadingDone = true;
                    }, 501);
                }
            );

        this.textBodyArray = [];
        this.formattedBodyArray = [];
        this.items.forEach((item) => {
            this.textBodyArray.push(item.description);
        });
        this.textBodyArray.forEach((text) => {
            this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        });

        // this.appVersion = this.data.getAppVersion();
        // this.bodyItems = new Array<FormattedString>();
        // for (const item of this.data.getAboutItems()) {
        //     this.bodyItems.push(this.formatter.formatTagsFromString(item));
        // }

        // this.donationUrl = this.data.getDonationUrl(isAndroid);
    }

    onBackTap(): void {
        this.router.back();
    }

    setFormattedBodyArray() {
        this.textBodyArray = [];
        this.formattedBodyArray = [];
        this.items.forEach((item) => {
            this.textBodyArray.push(item.description);
        });
        this.textBodyArray.forEach((text) => {
            this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        });
    }

}
