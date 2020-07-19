import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MercyPlusComponent } from "./mercy-plus.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: MercyPlusComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MercyPlusRoutingModule { }
