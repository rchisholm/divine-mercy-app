import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "Feast",
    templateUrl: "./feast.component.html"
})
export class FeastComponent implements OnInit {
    items: Array<TextItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("feast");
    }
}
