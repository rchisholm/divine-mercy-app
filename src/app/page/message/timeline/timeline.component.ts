import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Timeline",
    templateUrl: "./timeline.component.html"
})
export class TimelineComponent implements OnInit {
    item: TextItem;
    html: string;
    html2: string;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.item = this.data.getTextItem("timeline", 1);
        this.html = this.formatter.prepareForHtmlView(this.item.description);
        this.item = this.data.getTextItem("timeline", 2);
        this.html2 = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this.router.back();
    }

}
