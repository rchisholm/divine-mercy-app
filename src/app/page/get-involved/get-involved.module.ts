import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { GetInvolvedRoutingModule } from "./get-involved-routing.module";
import { GetInvolvedComponent } from "./get-involved.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GetInvolvedRoutingModule
    ],
    declarations: [
        GetInvolvedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GetInvolvedModule { }
