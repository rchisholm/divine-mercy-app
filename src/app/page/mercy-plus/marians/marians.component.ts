import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Marians",
    templateUrl: "./marians.component.html"
})
export class MariansComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("marians");
    }

    onTap(item: TextItem) {
        if (item.route) {
            this.router.navigate(["../" + item.route], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../marians", item.id], { relativeTo: this.currentRoute });
        }
    }
}
