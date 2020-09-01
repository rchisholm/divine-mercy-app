import { Component, OnInit } from "@angular/core";
import { openUrl } from "tns-core-modules/utils/utils";
// import { TextFormatter } from "../../../core/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService } from "~/app/shared/data.service";
import * as phone from "nativescript-phone";
import * as email from "nativescript-email";
import { isAndroid } from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "About",
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {

    bodyItems: Array<FormattedString>;
    appVersion: string;
    composeOptions: email.ComposeOptions;
    donationUrl: string;

    constructor(
        private data: DataService,
        private router: RouterExtensions
        // private formatter: TextFormatter
        ) { }

    ngOnInit(): void {
        // this.appVersion = this.data.getAppVersion();
        // this.bodyItems = new Array<FormattedString>();
        // for (const item of this.data.getAboutItems()) {
        //     this.bodyItems.push(this.formatter.formatTagsFromString(item));
        // }

        // this.donationUrl = this.data.getDonationUrl(isAndroid);
    }

    openLink(url: string): void {
        openUrl(url);
    }

    callNumber(phoneNumber: string): void {
        phone.dial(phoneNumber, true);
    }    // compose an email, opens in native email client

    sendEmail(address: string) {
        this.composeOptions = {
            to: [address]
        };
        email.available().then((available) => {
            console.log(`the email status is ${available}`); // for debugging
            if (available) {
                email.compose(this.composeOptions).then((result) => {
                    console.log(result); // for debugging
                });
            }
        }).catch((error) => {
            console.error(error); // log error for debugging
        });
    }

    onBackTap(): void {
        this.router.back();
    }

}
