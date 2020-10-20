import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "IntroductionItemDetail",
    templateUrl: "../../../../app/shared/item-detail.component.html"
})
export class IntroductionItemDetailComponent implements OnInit {
    item: TextItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getTextItem("introduction", id);
        this.item.description = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this.router.back();
    }
}
