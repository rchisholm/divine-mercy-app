import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(messageTab:message/default//devotionTab:devotion/default//mercyPlusTab:mercy-plus/default//getInvolvedTab:get-involved/default)",
        pathMatch: "full"
    },

    // {
    //     path: "home",
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
    //     outlet: "homeTab"
    // },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    },
    {
        path: "message",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/page/message/message.module").then((m) => m.MessageModule),
        outlet: "messageTab"
    },
    {
        path: "devotion",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/page/devotion/devotion.module").then((m) => m.DevotionModule),
        outlet: "devotionTab"
    },
    {
        path: "mercy-plus",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/page/mercy-plus/mercy-plus.module").then((m) => m.MercyPlusModule),
        outlet: "mercyPlusTab"
    },
    {
        path: "get-involved",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/page/get-involved/get-involved.module").then((m) => m.GetInvolvedModule),
        outlet: "getInvolvedTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
