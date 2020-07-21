import { Component, OnInit } from "@angular/core";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import { DataService, ResourceItem } from "~/app/shared/data.service";

@Component({
    selector: "FaustinaResources",
    templateUrl: "./faustina-resources.component.html"
})
export class FaustinaResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("faustina");

        // this.appVersion = this.data.getAppVersion();
        // this.bodyItems = new Array<FormattedString>();
        // for (const item of this.data.getAboutItems()) {
        //     this.bodyItems.push(this.formatter.formatTagsFromString(item));
        // }

        // this.donationUrl = this.data.getDonationUrl(isAndroid);
    }

}
