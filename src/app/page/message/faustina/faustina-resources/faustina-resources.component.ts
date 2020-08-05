import { Component, OnInit } from "@angular/core";
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
    }

}
