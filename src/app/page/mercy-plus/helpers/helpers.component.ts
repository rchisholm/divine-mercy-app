import { Component, OnInit } from "@angular/core";

import { DataService, TextItem } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "Helpers",
    templateUrl: "./helpers.component.html"
})
export class HelpersComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private _itemService: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getTextItems("helpers");
    }

    onTap(item: TextItem) {
        if (item.route) {
            this.router.navigate(["../" + item.route], { relativeTo: this.currentRoute });
        } else if (item.id === 3) {
            openUrl("https://www.youtube.com/user/MarianHelpers");
        }
    }

    onBackTap(): void {
        this.router.back();
    }
}
