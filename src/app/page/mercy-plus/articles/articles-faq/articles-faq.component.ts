import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ArticlesFaq",
    templateUrl: "./articles-faq.component.html"
})
export class ArticlesFaqComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("articles_faq");
    }

    onBackTap(): void {
        this.router.back();
    }
}
