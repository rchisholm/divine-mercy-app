import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "NovenaPrayers",
    templateUrl: "./novena-prayers.component.html"
})
export class NovenaPrayersComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("novena_prayers");
    }

    onTap(item: TextItem) {
        if (item.route) {
            this.router.navigate(["../" + item.route], { relativeTo: this.currentRoute });
        } else {
            this.router.navigate(["../novena-prayers", item.id], { relativeTo: this.currentRoute });
        }
    }

    onBackTap(): void {
        this.router.back();
    }
}
