import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { MessageComponent } from "./message.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessageRoutingModule
    ],
    declarations: [
        MessageComponent
        // ChapletComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessageModule { }
