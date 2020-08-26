import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DevotionComponent } from "./devotion.component";
import { FeastComponent } from "./feast/feast.component" ;
import { FeastItemDetailComponent } from "./feast/feast-item-detail.component" ;
import { NovenaPrayersComponent } from "./novena-prayers/novena-prayers.component" ;
import { NovenaPrayersItemDetailComponent } from "./novena-prayers/novena-prayers-item-detail.component" ;
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: DevotionComponent },
    { path: "feast", component: FeastComponent },
    { path: "feast/:id", component: FeastItemDetailComponent },
    { path: "novena-prayers", component: NovenaPrayersComponent },
    { path: "novena-prayers/:id", component: NovenaPrayersItemDetailComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DevotionRoutingModule { }
