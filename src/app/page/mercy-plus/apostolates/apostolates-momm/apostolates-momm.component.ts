import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ApostolatesMomm",
    templateUrl: "./apostolates-momm.component.html"
})
export class ApostolatesMommComponent implements OnInit {
    item: TextItem;
    html: string;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.item = this.data.getTextItem("apostolates_momm", 1);
        this.html = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this.router.back();
    }
}
