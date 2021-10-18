import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "FaustinaLifeLong",
    templateUrl: "./faustina-life-long.component.html"
})
export class FaustinaLifeLongComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("faustina_life_long");
    }


    onTap(item: TextItem) {
        if(item.description) {
            this.router.navigate(["../faustina-life-long", item.id], { relativeTo: this.currentRoute });
        }
    }

    onBackTap(): void {
        this.router.back();
    }
}
