import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "DiaryThemes",
    templateUrl: "./diary-themes.component.html"
})
export class DiaryThemesComponent implements OnInit {
    items: Array<TextItem>;
    itemsA: Array<TextItem>;
    itemsB: Array<TextItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("diary_themes");
    }
}
