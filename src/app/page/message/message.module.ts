import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { FaustinaComponent } from "./faustina/faustina.component";
import { FaustinaItemDetailComponent } from "./faustina/faustina-item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessageRoutingModule
    ],
    declarations: [
        MessageComponent,
        IntroductionComponent,
        IntroductionItemDetailComponent,
        FaustinaComponent,
        FaustinaItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessageModule { }
