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
        private data: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("mercy_popes");
    }

    onTap(item: TextItem) {
        if (item.route) {
            this.router.navigate(["../" + item.route], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../mercy-popes", item.id], { relativeTo: this.currentRoute });
        }
    }

    onBackTap(): void {
        this.router.back();
    }
}
