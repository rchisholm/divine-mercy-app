import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Resources",
    templateUrl: "./resources.component.html"
})
export class ResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("resources");
    }

    onBackTap(): void {
        this.router.back();
    }

}
