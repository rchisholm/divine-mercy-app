import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ArticlesDm101",
    templateUrl: "./articles-dm101.component.html"
})
export class ArticlesDm101Component implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("articles_dm101");
    }

    onBackTap(): void {
        this.router.back();
    }
}
