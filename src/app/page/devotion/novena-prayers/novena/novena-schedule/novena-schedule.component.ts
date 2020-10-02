import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from "tns-core-modules/color";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "NovenaSchedule",
    templateUrl: "./novena-schedule.component.html"
})
export class NovenaScheduleComponent implements OnInit {
    today: Date;
    scheduleDate: Date;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;

    notificationIds: Array<number>;

    constructor(
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.today = new Date();
        this.scheduleDate = new Date();
        this.year = this.scheduleDate.getFullYear();
        this.month = this.scheduleDate.getMonth();
        this.day = this.scheduleDate.getDate();
        this.hour = this.scheduleDate.getHours();
        this.minute = this.scheduleDate.getMinutes();

        this.notificationIds = [901, 902, 903, 904, 905, 906, 907, 908, 909];
    }

    onDateChanged(args) {
        this.year = args.value.getFullYear();
        this.month = args.value.getMonth();
        this.day = args.value.getDate();
        this.updateScheduleDate();
    }

    onTimeChanged(args) {
        this.hour = args.value.getHours();
        this.minute = args.value.getMinutes();
        this.updateScheduleDate();
    }

    updateScheduleDate() {
        this.scheduleDate = new Date(this.year, this.month , this.day, this.hour, this.minute);
    }

    scheduleNovena() {
        this.novenaIsScheduled(() => {
            dialogs.action({
                message: "A Novena is already scheduled. Cancel it and start a new Novena?",
                cancelButtonText: "No, keep current Novena",
                actions: ["Yes, start new Novena"]
            }).then((result) => {
                if (result === "Yes, start new Novena") {
                    this.clearNotifications();
                    this.scheduleNovena();
                } else {
                    return;
                }
            });
        }, () => {
            LocalNotifications.requestPermission().then((granted) => {
                if (granted) {
                    let novenaDate: Date;
                    for (let x = 0; x < 9; x++) {
                        novenaDate = new Date(this.scheduleDate);
                        // novenaDate.setSeconds(this.scheduleDate.getSeconds() + (x * 5)); // debug mode
                        novenaDate.setDate(this.scheduleDate.getDate() + x);
                        this.scheduleNotification(novenaDate, x + 1);
                    }
                    dialogs.alert({
                        title: "Novena",
                        message: "Novena has been scheduled.",
                        okButtonText: "OK"
                    }).then(() => {
                        this.onBackTap();
                    });
                } else {
                    dialogs.alert({
                        title: "Novena",
                        message: "Novena could not be scheduled. Please allow notifications.",
                        okButtonText: "OK"
                    });
                }
            });
        });
    }

    scheduleNotification(date: Date, dayNumber: number) {
        LocalNotifications.schedule([{
            id: 900 + dayNumber, // generated id if not set
            title: "Novena to Divine Mercy",
            body: "Pray the Novena to Divine Mercy: Day " + dayNumber,
            // ticker: "The ticker",
            color: new Color("#961300"),
            badge: 1,
            // icon: "res://img_notification",
            // image: "res://img_headericons_dm",
            thumbnail: true,
            at: date,
            priority: 2
          }]).then(
              (scheduledIds) => {
                // console.log("Notification " + dayNumber + " scheduled for date: " + date);
              },
              (error) => {
                // console.log("scheduling error: " + error);
              }
          );
    }

    cancelNovena() {
        this.novenaIsScheduled(() => {
            this.clearNotifications();
            dialogs.alert({// notify user
                title: "Novena",
                message: "Novena notifiations cancelled.",
                okButtonText: "OK"
            });
        }, () => {
            dialogs.alert({
                title: "Novena",
                message: "No Novena notifiations were scheduled.",
                okButtonText: "OK"
            });
        });
    }

    clearNotifications() {
        this.notificationIds.forEach((notificationId) => {
            LocalNotifications.cancel(notificationId).then(
                (foundAndCanceled) => {
                    if (foundAndCanceled) {
                    //   console.log("Notification " + notificationId + " cancelled.");
                    } else {
                    //   console.log("No notification " + notificationId);
                    }
                }
            );
        });
    }

    novenaIsScheduled(yes: () => void, no: () => void): void {
        let isScheduled = false;
        LocalNotifications.getScheduledIds().then(
            (ids) => {
                // ids.forEach((id) => {
                for (const id of ids) {
                    if (this.arrayContains(this.notificationIds, id)) {
                        yes();
                        isScheduled = true;
                        break;
                    }
                }
                // });
                if (!isScheduled) {
                    no();
                }
            }
        );
    }

    arrayContains(array, obj): boolean {
        for (const element of array) {
            if (element === obj) {
                return true;
            }
        }

        return false;
    }

    onBackTap(): void {
        this.router.back();
    }

}
