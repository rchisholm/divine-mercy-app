import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Dmi",
    templateUrl: "./dmi.component.html"
})
export class DmiComponent implements OnInit {
    images = [];
    currentPage = 0;
    maxPage: number;
    hideControls: boolean;
    @ViewChild("pager", {static: true}) pager: ElementRef;

    constructor(
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.images = [
            { file: "res://img/page-images/dmi/hyla_image", title: "Hyla" },
            { file: "res://img/page-images/dmi/skemp_image", title: "Skemp" },
            { file: "res://img/page-images/dmi/vilnius_image", title: "Vilnius" }
        ];
        this.maxPage = this.images.length - 1;
        this.hideControls = false;
    }

    nextPage() {
        if (!this.hideControls) {
            if (this.currentPage < this.maxPage) {
                this.currentPage++;
            }
        } else {
            this.toggleHideControls();
        }
    }

    prevPage() {
        if (!this.hideControls) {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        } else {
            this.toggleHideControls();
        }
    }

    onPageChanged($event) {
        this.currentPage = $event.value;
    }

    toggleHideControls() {
        this.hideControls = !this.hideControls;
    }

    onBackTap(): void {
        this.router.back();
    }

}
