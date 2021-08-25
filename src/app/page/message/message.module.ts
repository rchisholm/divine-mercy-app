import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';

import { MessageRoutingModule } from "./message-routing.module";
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
import { VideoViewComponent } from "./videos/video-view/video-view.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessageRoutingModule,
        YoutubePlayerModule
    ],
    declarations: [
        MessageComponent,
        IntroductionComponent,
        IntroductionItemDetailComponent,
        TimelineComponent,
        FaustinaComponent,
        FaustinaLifeShortComponent,
        FaustinaLifeLongComponent,
        FaustinaLifeLongItemDetailComponent,
        FaustinaResourcesComponent,
        MercyPopesComponent,
        MercyPopesItemDetailComponent,
        MercyPopesResourcesComponent,
        DiaryComponent,
        DiaryThemesComponent,
        DiaryThemesItemDetailComponent,
        DiaryPurchaseComponent,
        ResourcesComponent,
        SaintsPopesComponent,
        VideosComponent,
        VideoViewComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessageModule { }
