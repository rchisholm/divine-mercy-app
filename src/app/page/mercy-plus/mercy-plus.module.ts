import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MercyPlusRoutingModule } from "./mercy-plus-routing.module";
import { MercyPlusComponent } from "./mercy-plus.component";
import { MariansComponent } from "./marians/marians.component";
import { MariansWhoComponent } from "./marians/marians-who/marians-who.component";
import { MariansMeetComponent } from "./marians/marians-meet/marians-meet.component";
import { MariansVocationComponent } from "./marians/marians-vocation/marians-vocation.component";
import { MariansMissionsComponent } from "./marians/marians-missions/marians-missions.component";
import { MariansSupportComponent } from "./marians/marians-support/marians-support.component";
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

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MercyPlusRoutingModule
    ],
    declarations: [
        MercyPlusComponent,
        MariansComponent,
        MariansWhoComponent,
        MariansMeetComponent,
        MariansVocationComponent,
        MariansMissionsComponent,
        MariansSupportComponent,
        ShrineComponent,
        ShrineAboutComponent,
        ShrineCalendarComponent,
        ShrineContactComponent,
        ShrineDirectionsComponent,
        ShrineGuestComponent,
        ShrineToursComponent,
        ShrineVolunteerComponent,
        ApostolatesComponent,
        ApostolatesEadmComponent,
        ApostolatesHpdmComponent,
        ApostolatesJpiiComponent,
        ApostolatesMommComponent,
        ApostolatesWhatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MercyPlusModule { }
