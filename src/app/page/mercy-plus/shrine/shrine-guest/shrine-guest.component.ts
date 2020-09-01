import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ShrineGuest",
    templateUrl: "./shrine-guest.component.html"
})
export class ShrineGuestComponent implements OnInit {
    items: Array<TextItem>;
    textBodyArray: Array<string>;
    formattedBodyArray: Array<FormattedString>;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("shrine_guest");

        this.textBodyArray = [];
        this.formattedBodyArray = [];

        this.items.forEach((item) => {
            this.textBodyArray.push(item.description);
        });
        this.textBodyArray.forEach((text) => {
            this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        });
    }

    onBackTap(): void {
        this.router.back();
    }
}
