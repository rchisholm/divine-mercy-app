import { Component, OnInit } from "@angular/core";
import { ArticleItem, DataService } from "~/app/shared/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Articles",
    templateUrl: "./articles.component.html"
})
export class ArticlesComponent implements OnInit {
    items: Array<ArticleItem>;
    textBodyArray: Array<string>;

    constructor(
        private data: DataService,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {

        this.data
            .getNewsArticles()
            .subscribe((res) => {
                console.log((<any>res));
                this.items = (<any>res).json.data.articles;
            },
            (err) => {
                console.log(err);
            });
    }

    onBackTap(): void {
        this.router.back();
    }
}
