import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DevotionComponent } from "./devotion.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

const routes: Routes = [
    { path: "default", component: DevotionComponent }
    // { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DevotionRoutingModule { }
