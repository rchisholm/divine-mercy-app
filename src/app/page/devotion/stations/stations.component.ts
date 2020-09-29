import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { style, state, animate, transition, trigger } from "@angular/animations";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService, TextItem } from "~/app/shared/data.service";
import { TextFormatter } from "~/app/shared/text-formatter";
import { FormattedString } from "tns-core-modules/ui/text-base";
import { ScrollView } from "tns-core-modules/ui/scroll-view";

@Component({
    selector: "Stations",
    templateUrl: "./stations.component.html",
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
export class StationsComponent implements OnInit {
    images = [];
    currentPage = 0;
    maxPage: number;
    stationText: FormattedString;
    stationTitle: string;
    stationTextItems: Array<TextItem>;
    @ViewChild("pager", {static: true}) pager: ElementRef;
    @ViewChild("scroller", {static: true}) scroller: ElementRef;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private formatter: TextFormatter
    ) { }

    ngOnInit(): void {
        this.images = [
            { file: "res://img_pageimages_stations_1", id: 0 },
            { file: "res://img_pageimages_stations_2", id: 1 },
            { file: "res://img_pageimages_stations_3", id: 2 },
            { file: "res://img_pageimages_stations_4", id: 3 },
            { file: "res://img_pageimages_stations_5", id: 4 },
            { file: "res://img_pageimages_stations_6", id: 5 },
            { file: "res://img_pageimages_stations_7", id: 6 },
            { file: "res://img_pageimages_stations_8", id: 7 },
            { file: "res://img_pageimages_stations_9", id: 8 },
            { file: "res://img_pageimages_stations_10", id: 9 },
            { file: "res://img_pageimages_stations_11", id: 10 },
            { file: "res://img_pageimages_stations_12", id: 11 },
            { file: "res://img_pageimages_stations_13", id: 12 },
            { file: "res://img_pageimages_stations_14", id: 13 }
        ];
        this.maxPage = this.images.length - 1;

        this.stationTextItems = this.data.getTextItems("stations");
        this.updateStationText();

    }

    nextPage() {
        if (this.currentPage < this.maxPage) {
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    onPageChanged($event) {
        this.currentPage = $event.value;
        this.updateStationText();
    }

    updateStationText() {
        this.stationTitle = this.stationTextItems[this.currentPage].name;
        this.stationText = this.formatter.formatTagsFromString(this.stationTextItems[this.currentPage].description);
        this.scroller.nativeElement.scrollToVerticalOffset(0, false);
    }

    onBackTap(): void {
        this.router.back();
    }

}
