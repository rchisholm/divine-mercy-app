import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "NovenaResources",
    templateUrl: "./novena-resources.component.html"
})
export class NovenaResourcesComponent implements OnInit {
    resources: Array<ResourceItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.resources = this.data.getResourceItems("prayer_book");
    }

    onBackTap(): void {
        this.router.back();
    }

}
