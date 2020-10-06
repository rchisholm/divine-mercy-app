import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { LocalNotifications } from "nativescript-local-notifications";
import { getBoolean, setBoolean, setNumber } from "tns-core-modules/application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    tabIndex: number = 0;
    @ViewChild("navigation", {static: true}) navigation: ElementRef;

    constructor(
        private router: RouterExtensions,
        private currentRoute: ActivatedRoute,
        private ngZone: NgZone
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        LocalNotifications.addOnMessageReceivedCallback(
            (notification) => {

                if (notification.id === 300) {
                    dialogs.action({
                        message: "Pray the Three O'Clock Prayer now?",
                        cancelButtonText: "No",
                        actions: ["Yes"]
                    }).then((result) => {
                        if (result === "Yes") {
                            this.goToThreePrayer();
                        } else {
                            return;
                        }
                    });
                } else if (notification.id >= 900 && notification.id <= 909) {
                    dialogs.action({
                        message: "Pray the Novena now?",
                        cancelButtonText: "No",
                        actions: ["Yes"]
                    }).then((result) => {
                        if (result === "Yes") {
                            const novenaDay = notification.id - 900;
                            this.goToNovena(novenaDay);
                        } else {
                            return;
                        }
                    });
                }

            }
        );
    }

    // onTabChanged(args): void {
    //     // console.log("native index: " + this.navigation.nativeElement.selectedIndex);
    //     // console.log("TAB EVENT: ");
    //     // console.log(args.object.selectedIndex);
    // }

    goToNovena(novenaDay) {
        setBoolean("novenaRouteA", !getBoolean("novenaRouteA"));
        const novenaRoute = getBoolean("novenaRouteA") ? "novena-a" : "novena-b";
        this.navigation.nativeElement.selectedIndex = 1;
        this.ngZone.run(() => {
            this.router.navigate(
                ["/", { outlets: { devotionTab: ["devotion", novenaRoute, novenaDay] } }],
                { relativeTo: this.currentRoute }
            );
        });
    }

    goToThreePrayer() {
        setBoolean("prayersRouteA", !getBoolean("prayersRouteA"));
        const prayersRoute = getBoolean("prayersRouteA") ? "prayers-a" : "prayers-b";
        this.navigation.nativeElement.selectedIndex = 1;
        this.ngZone.run(() => {
            this.router.navigate(
                ["/", { outlets: { devotionTab: ["devotion", prayersRoute, 2] } }],
                { relativeTo: this.currentRoute }
            );
        });

    }
}
