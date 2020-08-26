import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "../../../../../app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Novena",
    templateUrl: "./novena.component.html"
})
export class NovenaComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("novena");
    }

    onTap(id: number) {
        if (id === 1) {
            this.router.navigate(["../novena-schedule"], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../novena-prayers", id], { relativeTo: this.currentRoute });
        }
    }
}
