import { Component, OnInit } from "@angular/core";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "MariansVocation",
    templateUrl: "./marians-vocation.component.html"
})
export class MariansVocationComponent implements OnInit {
    items: Array<TextItem>;
    html: Array<string>;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("marians_vocation");
        this.html = [];
        this.html[0] = this.data.prepareForHtmlView(this.items[0].description);
        this.html[1] = this.data.prepareForHtmlView(this.items[1].description);
    }

    onBackTap(): void {
        this.router.back();
    }
}
