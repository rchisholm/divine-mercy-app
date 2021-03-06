import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GetInvolvedComponent } from "./get-involved.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "default", component: GetInvolvedComponent },
    { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GetInvolvedRoutingModule { }
