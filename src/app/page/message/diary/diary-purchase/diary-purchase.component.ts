import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "DiaryPurchase",
    templateUrl: "./diary-purchase.component.html"
})
export class DiaryPurchaseComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("diary");
    }

    onBackTap(): void {
        this.router.back();
    }

}
