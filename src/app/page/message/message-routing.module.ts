import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaustinaComponent } from "./faustina/faustina.component";
import { FaustinaLifeLongComponent } from "./faustina/faustina-life-long/faustina-life-long.component";
import { FaustinaLifeLongItemDetailComponent } from "./faustina/faustina-life-long/faustina-life-long-item-detail.component";

const routes: Routes = [
    { path: "default", component: MessageComponent },
    { path: "introduction", component: IntroductionComponent },
    { path: "introduction/:id", component: IntroductionItemDetailComponent },
    { path: "timeline", component: TimelineComponent },
    { path: "faustina", component: FaustinaComponent },
    { path: "faustina-life-long", component: FaustinaLifeLongComponent },
    { path: "faustina-life-long/:id", component: FaustinaLifeLongItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MessageRoutingModule { }
