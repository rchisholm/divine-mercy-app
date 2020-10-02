import { Component, OnInit } from "@angular/core";
import { getBoolean, getNumber, setBoolean } from "tns-core-modules/application-settings/application-settings";
import { RouterExtensions } from "nativescript-angular/router";
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
        console.log("DevotionComponent OnInit called.");
        // if (getBoolean("goToNovena")) {
        //     this.router.navigate(["../novena", getNumber("goToNovenaDay")], { relativeTo: this.currentRoute });
        //     setBoolean("goToNovena", false);
        //     console.log("navigated via stored boolean");
        // }
    }
}
