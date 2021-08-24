import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService, VideoItem } from "~/app/shared/data.service";

@Component({
    selector: "VideoView",
    templateUrl: "./video-view.component.html"
})
export class VideoViewComponent implements OnInit {
    item: VideoItem;

    constructor(
        private data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
    ) { }

    ngOnInit(): void {
        const nid = +this._route.snapshot.params.id;
        this.item = this.data.getVideoItem(nid);
        this.item.body = this.data.getYouTubeEmbed(this.item.body, this.item.video_url);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
