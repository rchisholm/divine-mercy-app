import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DevotionRoutingModule } from "./devotion-routing.module";
import { DevotionComponent } from "./devotion.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DevotionRoutingModule
    ],
    declarations: [
        DevotionComponent
        // ChapletComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DevotionModule { }
