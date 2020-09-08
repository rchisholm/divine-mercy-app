import { Component, OnInit } from "@angular/core";
import { openUrl } from "tns-core-modules/utils/utils";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, TextItem } from "~/app/shared/data.service";
import { TextFormatter } from "~/app/shared/text-formatter";
import * as phone from "nativescript-phone";
import * as email from "nativescript-email";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "About",
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {

    items: Array<TextItem>;
    textBodyArray: Array<string>;
    formattedBodyArray: Array<FormattedString>;

    composeOptions: email.ComposeOptions;
    donationUrl: string;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private formatter: TextFormatter
        ) { }

    ngOnInit(): void {
        this.items = this.data.getTextItems("about");

        this.textBodyArray = [];
        this.formattedBodyArray = [];

        this.items.forEach((item) => {
            this.textBodyArray.push(item.description);
        });
        this.textBodyArray.forEach((text) => {
            this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        });

        this.donationUrl = "https://www.thedivinemercy.org/donation";
    }

    openLink(url: string): void {
        openUrl(url);
    }

    callNumber(phoneNumber: string): void {
        phone.dial(phoneNumber, true);
    }

    // compose an email, opens in native email client
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
