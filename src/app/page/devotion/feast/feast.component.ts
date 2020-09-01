import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Feast",
    templateUrl: "./feast.component.html"
})
export class FeastComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("feast");
    }

    onBackTap(): void {
        this.router.back();
    }
}
