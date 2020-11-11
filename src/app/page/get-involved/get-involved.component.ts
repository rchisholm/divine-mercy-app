import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "GetInvolved",
    templateUrl: "./get-involved.component.html"
})
export class GetInvolvedComponent implements OnInit {
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    openLink(url: string): void {
        openUrl(url);
    }

    openMaryAppLink(): void {
        if (isAndroid) {
            openUrl("https://play.google.com/store/apps/details?id=com.marianfathers.mary&hl=en_US&gl=US");
        } else {
            openUrl("https://apps.apple.com/us/app/mary/id483256944");
        }
    }

}
