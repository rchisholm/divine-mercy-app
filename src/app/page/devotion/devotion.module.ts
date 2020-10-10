import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { PagerModule } from "nativescript-pager/angular";

import { DevotionRoutingModule } from "./devotion-routing.module";
import { DevotionComponent } from "./devotion.component";
import { FeastComponent } from "./feast/feast.component";
import { FeastItemDetailComponent } from "./feast/feast-item-detail.component";
import { NovenaPrayersComponent } from "./novena-prayers/novena-prayers.component";
import { NovenaPrayersItemDetailComponent } from "./novena-prayers/novena-prayers-item-detail.component";
import { NovenaComponent } from "./novena-prayers/novena/novena.component";
import { NovenaScheduleComponent } from "./novena-prayers/novena/novena-schedule/novena-schedule.component";
import { NovenaItemDetailComponent } from "./novena-prayers/novena/novena-item-detail.component";
import { NovenaResourcesComponent } from "./novena-prayers/novena-resources/novena-resources.component";
import { DmiComponent } from "./dmi/dmi.component";
import { DmiInfoComponent } from "./dmi/dmi-info/dmi-info.component";
import { ChapletComponent } from "./chaplet/chaplet.component";
import { ChapletInfoComponent } from "./chaplet/chaplet-info/chaplet-info.component";
import { StationsComponent } from "./stations/stations.component";
import { HourComponent } from "./hour/hour.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DevotionRoutingModule,
        PagerModule
    ],
    declarations: [
        DevotionComponent,
        FeastComponent,
        FeastItemDetailComponent,
        NovenaPrayersComponent,
        NovenaPrayersItemDetailComponent,
        NovenaComponent,
        NovenaScheduleComponent,
        NovenaItemDetailComponent,
        NovenaResourcesComponent,
        DmiComponent,
        DmiInfoComponent,
        ChapletComponent,
        ChapletInfoComponent,
        StationsComponent,
        HourComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DevotionModule { }
