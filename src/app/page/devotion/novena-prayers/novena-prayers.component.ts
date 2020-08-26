import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "../../../../app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "NovenaPrayers",
    templateUrl: "./novena-prayers.component.html"
})
export class NovenaPrayersComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("novena-prayers");
    }

    onTap(id: number) {
        if (id === 1) {
            this.router.navigate(["../novena"], { relativeTo: this.currentRoute });
        } else if (id === 10) {
            this.router.navigate(["../novena-resources"], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../novena-prayers", id], { relativeTo: this.currentRoute });
        }
    }
}
