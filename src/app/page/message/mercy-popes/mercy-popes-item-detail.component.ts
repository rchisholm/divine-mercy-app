import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";

import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "MercyPopesItemDetail",
    templateUrl: "../../../../app/shared/item-detail.component.html"
})
export class MercyPopesItemDetailComponent implements OnInit {
    item: TextItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getTextItem("mercy_popes", id);
        this.item.description = this.formatter.prepareForHtmlView(this.item.description);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
