import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MercyPlusComponent } from "./mercy-plus.component";
import { MariansComponent } from "./marians/marians.component";
import { MariansWhoComponent } from "./marians/marians-who/marians-who.component";
import { MariansVocationComponent } from "./marians/marians-vocation/marians-vocation.component";
import { MariansMeetComponent } from "./marians/marians-meet/marians-meet.component";
import { MariansMissionsComponent } from "./marians/marians-missions/marians-missions.component";
import { MariansSupportComponent } from "./marians/marians-support/marians-support.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: MercyPlusComponent },
    { path: "marians", component: MariansComponent },
    { path: "marians-who", component: MariansWhoComponent },
    { path: "marians-meet", component: MariansMeetComponent },
    { path: "marians-vocation", component: MariansVocationComponent },
    { path: "marians-missions", component: MariansMissionsComponent },
    { path: "marians-support", component: MariansSupportComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MercyPlusRoutingModule { }
