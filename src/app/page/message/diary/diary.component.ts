import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Diary",
    templateUrl: "./diary.component.html"
})
export class DiaryComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("diary");
    }

    onTap(id: number) {
        if (id === 1) {
            this.router.navigate(["../diary-themes"], { relativeTo: this.currentRoute });
        }
        if (id === 2) {
            this.router.navigate(["../diary-purchase"], { relativeTo: this.currentRoute });
        }
    }
}
