import { Component, OnInit } from "@angular/core";
import { openUrl } from "tns-core-modules/utils/utils";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { TextFormatter } from "~/app/shared/text-formatter";
import * as phone from "nativescript-phone";
import * as email from "nativescript-email";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "About",
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
    item: TextItem;
    html: string;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.item = this.data.getTextItem("about", 1);
        this.html = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this.router.back();
    }

}
