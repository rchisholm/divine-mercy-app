import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaustinaComponent } from "./faustina/faustina.component";
import { FaustinaLifeShortComponent } from "./faustina/faustina-life-short/faustina-life-short.component";
import { FaustinaLifeLongComponent } from "./faustina/faustina-life-long/faustina-life-long.component";
import { FaustinaLifeLongItemDetailComponent } from "./faustina/faustina-life-long/faustina-life-long-item-detail.component";
import { FaustinaResourcesComponent } from "./faustina/faustina-resources/faustina-resources.component";
import { MercyPopesComponent } from "./mercy-popes/mercy-popes.component";
import { MercyPopesItemDetailComponent } from "./mercy-popes/mercy-popes-item-detail.component";
import { MercyPopesResourcesComponent } from "./mercy-popes/mercy-popes-resources/mercy-popes-resources.component";
import { DiaryComponent } from "./diary/diary.component";
import { DiaryThemesComponent } from "./diary/diary-themes/diary-themes.component";
import { DiaryThemesItemDetailComponent } from "./diary/diary-themes/diary-themes-item-detail.component";
import { DiaryPurchaseComponent } from "./diary/diary-purchase/diary-purchase.component";

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
    { path: "diary-purchase", component: DiaryPurchaseComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MessageRoutingModule { }
