import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService, DataItem } from "../../../../app/shared/data.service";

@Component({
    selector: "FaustinaItemDetail",
    templateUrl: "../../../../app/shared/item-detail.component.html"
})
export class FaustinaItemDetailComponent implements OnInit {
    item: DataItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getDataItem("faustina", id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
