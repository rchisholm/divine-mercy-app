import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MercyPlusRoutingModule } from "./mercy-plus-routing.module";
import { MercyPlusComponent } from "./mercy-plus.component";
import { MariansComponent } from "./marians/marians.component";
import { MariansWhoComponent } from "./marians/marians-who/marians-who.component";
import { MariansMeetComponent } from "./marians/marians-meet/marians-meet.component";
import { MariansVocationComponent } from "./marians/marians-vocation/marians-vocation.component";
import { MariansMissionsComponent } from "./marians/marians-missions/marians-missions.component";
import { MariansSupportComponent } from "./marians/marians-support/marians-support.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MercyPlusRoutingModule
    ],
    declarations: [
        MercyPlusComponent,
        MariansComponent,
        MariansWhoComponent,
        MariansMeetComponent,
        MariansVocationComponent,
        MariansMissionsComponent,
        MariansSupportComponent
        // ChapletComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MercyPlusModule { }
