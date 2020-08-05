import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";

@Component({
    selector: "DiaryPurchase",
    templateUrl: "./diary-purchase.component.html"
})
export class DiaryPurchaseComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("diary");
    }

}
