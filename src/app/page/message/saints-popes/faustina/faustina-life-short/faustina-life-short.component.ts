import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "FaustinaLifeShort",
    templateUrl: "./faustina-life-short.component.html"
})
export class FaustinaLifeShortComponent implements OnInit {
    item: TextItem;
    html: string;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.item = this.data.getTextItem("faustina_life_short", 1);
        this.html = this.data.prepareForHtmlView(this.item.description);

        // this.textBodyArray = [];
        // this.formattedBodyArray = [];

        // this.items.forEach((item) => {
        //     this.textBodyArray.push(item.description);
        // });
        // this.textBodyArray.forEach((text) => {
        //     this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        // });

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

}
