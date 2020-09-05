import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { style, state, animate, transition, trigger } from "@angular/animations";

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Dmi",
    templateUrl: "./dmi.component.html",
    animations: [
        trigger("fadeInOut", [
          transition(":enter", [   // :enter is alias to 'void => *'
            style({opacity: 0}),
            animate(500, style({opacity: 1}))
          ]),
          transition(":leave", [   // :leave is alias to '* => void'
            animate(500, style({opacity: 0}))
          ])
        ])
    ]
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
            { file: "res://img_pageimages_dmi_hyla", title: "Hyla" },
            { file: "res://img_pageimages_dmi_skemp", title: "Skemp" },
            { file: "res://img_pageimages_dmi_vilnius", title: "Vilnius" }
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
