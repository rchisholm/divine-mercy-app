import { Component, OnInit } from "@angular/core";
import { ArticleItem, DataService } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { style, state, animate, transition, trigger } from "@angular/animations";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ArticlesDm101",
    templateUrl: "./articles-dm101.component.html",
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
export class ArticlesDm101Component implements OnInit {
    items: Array<ArticleItem>;
    textBodyArray: Array<string>;
    loading: boolean;
    loadingFail: boolean;
    loadingSuccess: boolean;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.loading = true;
        this.loadingFail = false;
        this.loadingSuccess = false;

        this.data
            .getDm101Articles()
            .subscribe((res) => {
                // console.log((<any>res));
                if ((<any>res).ok) {
                    this.items = (<any>res).data.articles;
                    this.loading = false;
                    setTimeout(() => {
                        this.loadingSuccess = true;
                    }, 501);
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

    onTap(article: ArticleItem) {
        console.log("opening: " + article.path);
        openUrl(article.path);
    }
}
