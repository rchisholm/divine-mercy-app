import { Component, OnInit } from "@angular/core";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "MercyPlus",
    templateUrl: "./mercy-plus.component.html"
})
export class MercyPlusComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        /* disables landscape orientation, unless the orientation class bug is fixed */
        // let orientation = require("nativescript-orientation");
        // orientation.setOrientation("portrait");

        // Use the "ngOnInit" handler to initialize data for the view.

    }

    goToShopMercy(): void {
        openUrl("https://www.shopmercy.org");
    }
}
