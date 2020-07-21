import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaustinaComponent } from "./faustina/faustina.component";
import { FaustinaLifeLongComponent } from "./faustina/faustina-life-long/faustina-life-long.component";
import { FaustinaLifeLongItemDetailComponent } from "./faustina/faustina-life-long/faustina-life-long-item-detail.component";

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
        FaustinaLifeLongComponent,
        FaustinaLifeLongItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessageModule { }
