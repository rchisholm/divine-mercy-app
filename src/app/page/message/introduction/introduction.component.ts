import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "Introduction",
    templateUrl: "./introduction.component.html"
})
export class IntroductionComponent implements OnInit {
    items: Array<TextItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("introduction");
    }
}
