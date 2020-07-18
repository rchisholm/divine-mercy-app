import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid, screen } from "tns-core-modules/platform";
import { getBoolean, getNumber, setBoolean } from "tns-core-modules/application-settings/application-settings";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Devotion",
    templateUrl: "./devotion.component.html"
})
export class DevotionComponent implements OnInit {

    constructor(private router: RouterExtensions, private currentRoute: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        /* disables landscape orientation, unless the orientation class bug is fixed */
        // let orientation = require("nativescript-orientation");
        // orientation.setOrientation("portrait");

        // Use the "ngOnInit" handler to initialize data for the view.
        if (getBoolean("goToNovena")) {
            this.router.navigate(["../novena-day", getNumber("goToNovenaDay")], { relativeTo: this.currentRoute });
            setBoolean("goToNovena", false);
            console.log("navigated via stored boolean");
        }

    }

    getBigIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://bigIcons/";

        return iconPrefix + icon;
    }

    // screen size for debugging
    getScreenWidth(): number {
        return screen.mainScreen.widthPixels;
    }

    getScreenHeight(): number {
        return screen.mainScreen.heightPixels;
    }
}
