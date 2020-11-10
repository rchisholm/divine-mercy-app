import { Component, OnInit } from "@angular/core";
import { DataService, ResourceItem } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { openUrl } from "tns-core-modules/utils/utils";
import { dial } from "nativescript-phone";

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

    openLink(item): void {
        if (item.tel) {
            dial(item.tel, true);
        } else if (item.link) {
            openUrl(item.link);
        } else {
            console.error("no link or tel for resouce item id #" + item.id);
        }
    }

}
