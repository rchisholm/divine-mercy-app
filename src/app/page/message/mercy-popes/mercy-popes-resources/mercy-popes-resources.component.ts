import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "MercyPopesResources",
    templateUrl: "./mercy-popes-resources.component.html"
})
export class MercyPopesResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("mercy_popes");
    }

    onBackTap(): void {
        this.router.back();
    }

}
