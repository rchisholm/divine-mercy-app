import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "MercyPopes",
    templateUrl: "./mercy-popes.component.html"
})
export class MercyPopesComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("mercy-popes");
    }

    onTap(id: number) {
        if (id === 1 || id === 2 || id === 3) {
            this.router.navigate(["../mercy-popes", id], { relativeTo: this.currentRoute });
        } else if (id === 4) {
            this.router.navigate(["../mercy-popes-resources"], { relativeTo: this.currentRoute });
        }
    }
}
