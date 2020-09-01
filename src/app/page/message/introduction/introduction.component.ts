import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "Introduction",
    templateUrl: "./introduction.component.html"
})
export class IntroductionComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("introduction");
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
