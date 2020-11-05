import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { TextFormatter } from "~/app/shared/text-formatter";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "ArticlesFaqItemDetail",
    templateUrl: "../../../../../app/shared/item-detail.component.html"
})
export class ArticlesFaqItemDetailComponent implements OnInit {
    item: TextItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getTextItem("articles_faq", id);
        this.item.description = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this.router.back();
    }
}
