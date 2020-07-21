import { Component, OnInit } from "@angular/core";
// import { TextFormatter } from "../../../core/text-formatter";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService } from "~/app/shared/data.service";

@Component({
    selector: "Timeline",
    templateUrl: "./timeline.component.html"
})
export class TimelineComponent implements OnInit {

    constructor(
        private data: DataService
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

}
