import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";

@Component({
    selector: "Resources",
    templateUrl: "./resources.component.html"
})
export class ResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("resources");
    }

}
