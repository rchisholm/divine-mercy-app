import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../../../../app/shared/data.service";

@Component({
    selector: "Faustina",
    templateUrl: "./faustina.component.html"
})
export class FaustinaComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getDataItems("faustina");
    }
}
