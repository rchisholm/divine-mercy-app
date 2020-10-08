import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { style, state, animate, transition, trigger } from "@angular/animations";
import { DataService, TextItem } from "~/app/shared/data.service";

@Component({
    selector: "Introduction",
    templateUrl: "./introduction.component.html"
})
export class IntroductionComponent implements OnInit {
    items: Array<TextItem>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {

        this.items = this.data.getTextItems("introduction");
    }

    onBackTap(): void {
        this.router.back();
    }
}
