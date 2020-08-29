import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "ApostolatesWhat",
    templateUrl: "./apostolates-what.component.html"
})
export class ApostolatesWhatComponent implements OnInit {
    items: Array<TextItem>;
    textBodyArray: Array<string>;
    formattedBodyArray: Array<FormattedString>;

    constructor(
        private data: DataService,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("apostolates_what");

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
