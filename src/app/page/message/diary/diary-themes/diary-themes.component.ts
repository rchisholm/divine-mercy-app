import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "DiaryThemes",
    templateUrl: "./diary-themes.component.html"
})
export class DiaryThemesComponent implements OnInit {
    items: Array<TextItem>;
    itemsA: Array<TextItem>;
    itemsB: Array<TextItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("diary_themes");
    }

    onBackTap(): void {
        this.router.back();
    }
}
