import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "FaustinaResources",
    templateUrl: "./faustina-resources.component.html"
})
export class FaustinaResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("faustina");
    }

    onBackTap(): void {
        this.router.back();
    }

}
