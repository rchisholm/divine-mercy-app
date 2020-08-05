import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageRoutingModule } from "./message-routing.module";
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

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessageRoutingModule
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
        MercyPopesResourcesComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessageModule { }
