import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DevotionRoutingModule } from "./devotion-routing.module";
import { DevotionComponent } from "./devotion.component";
import { FeastComponent } from "./feast/feast.component" ;
import { FeastItemDetailComponent } from "./feast/feast-item-detail.component" ;
import { NovenaPrayersComponent } from "./novena-prayers/novena-prayers.component" ;
import { NovenaPrayersItemDetailComponent } from "./novena-prayers/novena-prayers-item-detail.component" ;
import { NovenaComponent } from "./novena-prayers/novena/novena.component" ;
import { NovenaItemDetailComponent } from "./novena-prayers/novena/novena-item-detail.component" ;
import { NovenaResourcesComponent } from "./novena-prayers/novena-resources/novena-resources.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DevotionRoutingModule
    ],
    declarations: [
        DevotionComponent,
        FeastComponent,
        FeastItemDetailComponent,
        NovenaPrayersComponent,
        NovenaPrayersItemDetailComponent,
        NovenaComponent,
        NovenaItemDetailComponent,
        NovenaResourcesComponent
        // ChapletComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DevotionModule { }
