import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MessageComponent } from "./message.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { IntroductionItemDetailComponent } from "./introduction/introduction-item-detail.component";
import { FaustinaComponent } from "./faustina/faustina.component";
import { FaustinaItemDetailComponent } from "./faustina/faustina-item-detail.component";

const routes: Routes = [
    { path: "default", component: MessageComponent },
    { path: "introduction", component: IntroductionComponent },
    { path: "introduction/:id", component: IntroductionItemDetailComponent },
    { path: "faustina", component: FaustinaComponent },
    { path: "faustina/:id", component: FaustinaItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MessageRoutingModule { }
