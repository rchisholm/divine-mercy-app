import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DevotionComponent } from "./devotion.component";
import { FeastComponent } from "./feast/feast.component" ;
import { FeastItemDetailComponent } from "./feast/feast-item-detail.component" ;
import { NovenaPrayersComponent } from "./novena-prayers/novena-prayers.component" ;
import { NovenaPrayersItemDetailComponent } from "./novena-prayers/novena-prayers-item-detail.component" ;
import { NovenaComponent } from "./novena-prayers/novena/novena.component" ;
import { NovenaScheduleComponent } from "./novena-prayers/novena/novena-schedule/novena-schedule.component";
import { NovenaItemDetailComponent } from "./novena-prayers/novena/novena-item-detail.component" ;
import { NovenaResourcesComponent } from "./novena-prayers/novena-resources/novena-resources.component";
import { DmiComponent } from "./dmi/dmi.component" ;
import { DmiInfoComponent } from "./dmi/dmi-info/dmi-info.component";
import { ChapletComponent } from "./chaplet/chaplet.component";
import { ChapletInfoComponent } from "./chaplet/chaplet-info/chaplet-info.component";
import { StationsComponent } from "./stations/stations.component";
import { HourComponent } from "./hour/hour.component";

const routes: Routes = [
    { path: "default", component: DevotionComponent },
    { path: "feast", component: FeastComponent },
    { path: "feast/:id", component: FeastItemDetailComponent },
    { path: "novena-prayers", component: NovenaPrayersComponent },
    { path: "novena-prayers/:id", component: NovenaPrayersItemDetailComponent },
    { path: "prayers-a/:id", component: NovenaPrayersItemDetailComponent },
    { path: "prayers-b/:id", component: NovenaPrayersItemDetailComponent },
    { path: "novena", component: NovenaComponent },
    { path: "novena-schedule", component: NovenaScheduleComponent },
    { path: "novena/:id", component: NovenaItemDetailComponent },
    { path: "novena-a/:id", component: NovenaItemDetailComponent },
    { path: "novena-b/:id", component: NovenaItemDetailComponent },
    { path: "novena-resources", component: NovenaResourcesComponent },
    { path: "image", component: DmiComponent },
    { path: "image-info", component: DmiInfoComponent },
    { path: "chaplet", component: ChapletComponent },
    { path: "chaplet-info", component: ChapletInfoComponent },
    { path: "stations", component: StationsComponent },
    { path: "hour", component: HourComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DevotionRoutingModule { }
