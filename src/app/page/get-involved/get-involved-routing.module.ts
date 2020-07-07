import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GetInvolvedComponent } from "./get-involved.component";

const routes: Routes = [
    { path: "default", component: GetInvolvedComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GetInvolvedRoutingModule { }
