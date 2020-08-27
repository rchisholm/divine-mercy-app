import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "DiaryThemesItemDetail",
    templateUrl: "../../../../../app/shared/item-detail.component.html"
})
export class DiaryThemesItemDetailComponent implements OnInit {
    item: TextItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getTextItem("diary_themes", id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
