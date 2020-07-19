import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../../../../app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Faustina",
    templateUrl: "./faustina.component.html"
})
export class FaustinaComponent implements OnInit {
    items: Array<DataItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getDataItems("faustina");
    }

    onTap(id: number) {
        if (id === 1) {
            // navigate to faustina-life-short
        }
        if (id === 2) {
            this.router.navigate(["../faustina-life-long"], { relativeTo: this.currentRoute });
        }
        if (id === 3) {
            // navigate to faustina-resources
        }
    }
}
