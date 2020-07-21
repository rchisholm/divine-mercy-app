import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "../../../../../app/shared/data.service";

@Component({
    selector: "FaustinaLifeLong",
    templateUrl: "./faustina-life-long.component.html"
})
export class FaustinaLifeLongComponent implements OnInit {
    items: Array<TextItem>;
    itemsA: Array<TextItem>;
    itemsB: Array<TextItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("faustina-life-long");
        this.itemsA = this.items.slice(0, 5);
        this.itemsB = this.items.slice(5);
    }
}
