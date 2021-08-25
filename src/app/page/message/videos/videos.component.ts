import { Component, OnInit } from "@angular/core";
import { VideoItem, DataService } from "~/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { style, state, animate, transition, trigger } from "@angular/animations";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "Videos",
    templateUrl: "./videos.component.html",
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
export class VideosComponent implements OnInit {
    items: Array<VideoItem>;
    textBodyArray: Array<string>;
    loading: boolean;
    loadingFail: boolean;
    loadingSuccess: boolean;

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.loadingFail = false;
        this.loadingSuccess = false;

        this.data
            .getTdmVideos()
            .subscribe((res) => {
                // console.log((<any>res));
                if ((<any>res).ok) {
                    this.items = (<any>res).data.videos;
                    this.loading = false;
                    setTimeout(() => {
                        this.loadingSuccess = true;
                    }, 501);
                    this.data.setVideoItems(this.items);
                } else {
                    this.loading = false;
                    setTimeout(() => {
                        this.loadingFail = true;
                    }, 501);
                }
            },
            (err) => {
                console.log(err);
                this.loading = false;
                setTimeout(() => {
                    this.loadingFail = true;
                }, 501);
            });
    }

    onBackTap(): void {
        this.router.back();
    }

    onTap(video: VideoItem) {
        // console.log("opening: " + video.path);
        // openUrl(video.path);

        // console.log("video nid: " + video.nid);
        // console.log("video item: ");
        // console.log(this.data.getVideoItem(video.nid));

        this.router.navigate(["../video-view", video.nid], { relativeTo: this.currentRoute });

    }

    goToVideos(): void {
        openUrl("https://www.thedivinemercy.org/divine-mercy-videos");
    }
}
