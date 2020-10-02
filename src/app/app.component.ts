import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { LocalNotifications } from "nativescript-local-notifications";
import { setBoolean, setNumber } from "tns-core-modules/application-settings";
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

                dialogs.action({
                    message: "Pray the Novena now?",
                    cancelButtonText: "No",
                    actions: ["Yes"]
                }).then((result) => {
                    if (result === "Yes") {
                        const novenaDay = notification.id - 900;
                        console.log("Pray the novena, day: " + novenaDay);
                        this.goToNovena(novenaDay);
                    } else {
                        return;
                    }
                });

            }
        );
    }

    onTabChanged(args): void {
        console.log("native index: " + this.navigation.nativeElement.selectedIndex);
        // console.log("navigation tab selected: " + this.tabIndex);
        // console.log("TAB EVENT: ");
        // console.log(args.object.selectedIndex);
    }

    goToNovena(novenaDay) {
        // setBoolean("goToNovena", true);
        // setNumber("goToNovenaDay", novenaDay);
        console.log("current route: " + this.currentRoute);
        this.navigation.nativeElement.selectedIndex = 1;
        this.ngZone.run(() => {
            this.router.navigate(
                ["/", { outlets: { devotionTab: ["devotion", "novena", novenaDay] } }],
                { relativeTo: this.currentRoute }
            );
        });
    }
}
