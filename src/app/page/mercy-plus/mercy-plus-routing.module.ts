import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MercyPlusComponent } from "./mercy-plus.component";
import { MariansComponent } from "./marians/marians.component";
import { MariansWhoComponent } from "./marians/marians-who/marians-who.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: MercyPlusComponent },
    { path: "marians", component: MariansComponent },
    { path: "marians-who", component: MariansWhoComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MercyPlusRoutingModule { }
