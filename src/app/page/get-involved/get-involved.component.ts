import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "GetInvolved",
    templateUrl: "./get-involved.component.html"
})
export class GetInvolvedComponent implements OnInit {
    aboutLinkText: string;
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        if (isAndroid) {
            this.aboutLinkText = "About this App";
        } else {
            this.aboutLinkText = "About";
        }
    }

    openLink(url: string): void {
        openUrl(url);
    }

    openMaryAppLink(): void {
        if (isAndroid) {
            openUrl("https://play.google.com/store/apps/details?id=com.marianfathers.mary&hl=en");
        } else {
            openUrl("http://itunes.apple.com/us/app/mary/id483256944?mt=8");
        }
    }

    openDMAppLink(): void {
        if (isAndroid) {
            openUrl("https://play.google.com/store/apps/details?id=com.jacobsmedia.divinem&hl=en");
        } else {
            openUrl("https://itunes.apple.com/us/app/divine-mercy/id410696366?mt=8");
        }
    }

}
