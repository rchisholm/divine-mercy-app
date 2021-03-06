import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { GetInvolvedRoutingModule } from "./get-involved-routing.module";
import { GetInvolvedComponent } from "./get-involved.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GetInvolvedRoutingModule
    ],
    declarations: [
        GetInvolvedComponent,
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GetInvolvedModule { }
