import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../../../../../app/shared/data.service";

@Component({
    selector: "FaustinaLifeLong",
    templateUrl: "./faustina-life-long.component.html"
})
export class FaustinaLifeLongComponent implements OnInit {
    items: Array<DataItem>;
    itemsA: Array<DataItem>;
    itemsB: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getDataItems("faustina-life-long");
        this.itemsA = this.items.slice(0, 5);
        this.itemsB = this.items.slice(5);
    }
}
