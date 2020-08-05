import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";

@Component({
    selector: "MercyPopesResources",
    templateUrl: "./mercy-popes-resources.component.html"
})
export class MercyPopesResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("mercy-popes");
    }

}
