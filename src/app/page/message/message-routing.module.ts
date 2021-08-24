import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaustinaComponent } from "./saints-popes/faustina/faustina.component";
import { FaustinaLifeShortComponent } from "./saints-popes/faustina/faustina-life-short/faustina-life-short.component";
import { FaustinaLifeLongComponent } from "./saints-popes/faustina/faustina-life-long/faustina-life-long.component";
import { FaustinaLifeLongItemDetailComponent } from "./saints-popes/faustina/faustina-life-long/faustina-life-long-item-detail.component";
import { FaustinaResourcesComponent } from "./saints-popes/faustina/faustina-resources/faustina-resources.component";
import { MercyPopesComponent } from "./saints-popes/mercy-popes/mercy-popes.component";
import { MercyPopesItemDetailComponent } from "./saints-popes/mercy-popes/mercy-popes-item-detail.component";
import { MercyPopesResourcesComponent } from "./saints-popes/mercy-popes/mercy-popes-resources/mercy-popes-resources.component";
import { DiaryComponent } from "./diary/diary.component";
import { DiaryThemesComponent } from "./diary/diary-themes/diary-themes.component";
import { DiaryThemesItemDetailComponent } from "./diary/diary-themes/diary-themes-item-detail.component";
import { DiaryPurchaseComponent } from "./diary/diary-purchase/diary-purchase.component";
import { ResourcesComponent } from "./resources/resources.component";
import { SaintsPopesComponent } from "./saints-popes/saints-popes.component";
import { VideosComponent } from "./videos/videos.component";


const routes: Routes = [
    { path: "default", component: MessageComponent },
    { path: "introduction", component: IntroductionComponent },
    { path: "introduction/:id", component: IntroductionItemDetailComponent },
    { path: "timeline", component: TimelineComponent },
    { path: "faustina", component: FaustinaComponent },
    { path: "faustina-life-short", component: FaustinaLifeShortComponent },
    { path: "faustina-life-long", component: FaustinaLifeLongComponent },
    { path: "faustina-life-long/:id", component: FaustinaLifeLongItemDetailComponent },
    { path: "faustina-resources", component: FaustinaResourcesComponent },
    { path: "mercy-popes", component: MercyPopesComponent },
    { path: "mercy-popes/:id", component: MercyPopesItemDetailComponent },
    { path: "mercy-popes-resources", component: MercyPopesResourcesComponent },
    { path: "diary", component: DiaryComponent },
    { path: "diary-themes", component: DiaryThemesComponent },
    { path: "diary-themes/:id", component: DiaryThemesItemDetailComponent },
    { path: "diary-purchase", component: DiaryPurchaseComponent },
    { path: "resources", component: ResourcesComponent },
    { path: "saints-popes", component: SaintsPopesComponent },
    { path: "videos", component: VideosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MessageRoutingModule { }
