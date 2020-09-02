import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DevotionComponent } from "./devotion.component";
import { FeastComponent } from "./feast/feast.component" ;
import { FeastItemDetailComponent } from "./feast/feast-item-detail.component" ;
import { NovenaPrayersComponent } from "./novena-prayers/novena-prayers.component" ;
import { NovenaPrayersItemDetailComponent } from "./novena-prayers/novena-prayers-item-detail.component" ;
import { NovenaComponent } from "./novena-prayers/novena/novena.component" ;
import { NovenaItemDetailComponent } from "./novena-prayers/novena/novena-item-detail.component" ;
import { NovenaResourcesComponent } from "./novena-prayers/novena-resources/novena-resources.component";
import { DmiComponent } from "./dmi/dmi.component" ;
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: DevotionComponent },
    { path: "feast", component: FeastComponent },
    { path: "feast/:id", component: FeastItemDetailComponent },
    { path: "novena-prayers", component: NovenaPrayersComponent },
    { path: "novena-prayers/:id", component: NovenaPrayersItemDetailComponent },
    { path: "novena", component: NovenaComponent },
    { path: "novena/:id", component: NovenaItemDetailComponent },
    { path: "novena-resources", component: NovenaResourcesComponent },
    { path: "image", component: DmiComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DevotionRoutingModule { }
