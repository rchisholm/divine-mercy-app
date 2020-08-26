import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";

@Component({
    selector: "NovenaResources",
    templateUrl: "./novena-resources.component.html"
})
export class NovenaResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("prayer-book");
    }

}
