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
import { HelpersComponent } from "./helpers/helpers.component";
import { HelpersWhatComponent } from "./helpers/helpers-what/helpers-what.component";
import { HelpersMagazineComponent } from "./helpers/helpers-magazine/helpers-magazine.component";
import { ShrineComponent } from "./shrine/shrine.component";
import { ShrineAboutComponent } from "./shrine/shrine-about/shrine-about.component";
import { ShrineCalendarComponent } from "./shrine/shrine-calendar/shrine-calendar.component";
import { ShrineContactComponent } from "./shrine/shrine-contact/shrine-contact.component";
import { ShrineDirectionsComponent } from "./shrine/shrine-directions/shrine-directions.component";
import { ShrineGuestComponent } from "./shrine/shrine-guest/shrine-guest.component";
import { ShrineToursComponent } from "./shrine/shrine-tours/shrine-tours.component";
import { ShrineVolunteerComponent } from "./shrine/shrine-volunteer/shrine-volunteer.component";
import { ApostolatesComponent } from "./apostolates/apostolates.component";
import { ApostolatesEadmComponent } from "./apostolates/apostolates-eadm/apostolates-eadm.component";
import { ApostolatesHpdmComponent } from "./apostolates/apostolates-hpdm/apostolates-hpdm.component";
import { ApostolatesJpiiComponent } from "./apostolates/apostolates-jpii/apostolates-jpii.component";
import { ApostolatesMommComponent } from "./apostolates/apostolates-momm/apostolates-momm.component";
import { ApostolatesWhatComponent } from "./apostolates/apostolates-what/apostolates-what.component";
import { ArticlesComponent } from "./articles/articles.component";

const routes: Routes = [
    { path: "default", component: MercyPlusComponent },
    { path: "marians", component: MariansComponent },
    { path: "marians-who", component: MariansWhoComponent },
    { path: "marians-meet", component: MariansMeetComponent },
    { path: "marians-vocation", component: MariansVocationComponent },
    { path: "marians-missions", component: MariansMissionsComponent },
    { path: "marians-support", component: MariansSupportComponent },
    { path: "helpers", component: HelpersComponent },
    { path: "helpers-what", component: HelpersWhatComponent },
    { path: "helpers-magazine", component: HelpersMagazineComponent },
    { path: "shrine", component: ShrineComponent },
    { path: "shrine-about", component: ShrineAboutComponent },
    { path: "shrine-calendar", component: ShrineCalendarComponent },
    { path: "shrine-contact", component: ShrineContactComponent },
    { path: "shrine-directions", component: ShrineDirectionsComponent },
    { path: "shrine-guest", component: ShrineGuestComponent },
    { path: "shrine-tours", component: ShrineToursComponent },
    { path: "shrine-volunteer", component: ShrineVolunteerComponent },
    { path: "apostolates", component: ApostolatesComponent },
    { path: "apostolates-eadm", component: ApostolatesEadmComponent },
    { path: "apostolates-hpdm", component: ApostolatesHpdmComponent },
    { path: "apostolates-jpii", component: ApostolatesJpiiComponent },
    { path: "apostolates-momm", component: ApostolatesMommComponent },
    { path: "apostolates-what", component: ApostolatesWhatComponent },
    { path: "articles", component: ArticlesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MercyPlusRoutingModule { }
