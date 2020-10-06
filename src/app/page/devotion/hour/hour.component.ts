import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from "tns-core-modules/color";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
import { FormattedString } from "tns-core-modules/ui/text-base";
import { DataService, TextItem } from "~/app/shared/data.service";
import { TextFormatter } from "~/app/shared/text-formatter";
import { getNumber, setBoolean, setNumber } from "tns-core-modules/application-settings";
import { DiaryThemesItemDetailComponent } from "../../message/diary/diary-themes/diary-themes-item-detail.component";

@Component({
    selector: "Hour",
    templateUrl: "./hour.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HourComponent implements OnInit {
    today: Date;
    scheduleDate: Date;
    notificationId: number;

    notificationLabels: Array<string> = ["None", "3:00", "2:55", "2:50", "2:45"];
    notificationOptions: Array<SegmentedBarItem> = [];
    notificationOptionsIndex: number;

    items: Array<TextItem>;
    textBodyArray: Array<string>;
    formattedBodyArray: Array<FormattedString>;

    constructor(
        private data: DataService,
        private formatter: TextFormatter,
        private router: RouterExtensions
    ) {
        this.notificationLabels.forEach((option) => {
            const item = new SegmentedBarItem();
            item.title = option;
            this.notificationOptions.push(item);
        });
    }

    ngOnInit(): void {

        if (!getNumber("hour-notification-index")) {
            setNumber("hour-notification-index", 0);
        }
        this.notificationOptionsIndex = getNumber("hour-notification-index");
        this.notificationId = 300;

        this.items = this.data.getTextItems("hour");
        this.textBodyArray = [];
        this.formattedBodyArray = [];
        this.items.forEach((item) => {
            this.textBodyArray.push(item.description);
        });
        this.textBodyArray.forEach((text) => {
            this.formattedBodyArray.push(this.formatter.formatTagsFromString(text));
        });
    }

    notificationOptionChange(args: SelectedIndexChangedEventData) {
        // const segmentedBar = args.object as SegmentedBar;
        // const oldIndex = args.oldIndex;
        const newIndex = args.newIndex;
        const storedIndex = getNumber("hour-notification-index");
        console.log("storedIndex: " + storedIndex);
        console.log("newIndex: " + newIndex);
        if (storedIndex !== newIndex) {
            setNumber("hour-notification-index", newIndex);
            if (newIndex === 0) {
                this.cancelReminder();
            } else {
                const offset = (newIndex - 1) * 5;
                console.log("offset: " + offset);
                this.scheduleReminder(offset);
            }
        }

    }

    scheduleReminder(offset: number) {
        LocalNotifications.requestPermission().then((granted) => {
            if (granted) {
                this.today = new Date();
                this.today.setSeconds(0);
                this.scheduleDate = this.today;
                // schedule recurring notification offset minutes before 3
                if (this.today.getHours() >= 15) {
                    // it is after 3 today; start tomorrow
                    this.scheduleDate.setDate(this.scheduleDate.getDate() + 1);
                }
                if (offset === 0) {
                    this.scheduleDate.setHours(15);
                    this.scheduleDate.setMinutes(0);
                } else {
                    this.scheduleDate.setHours(14);
                    this.scheduleDate.setMinutes(60 - offset);
                }
                this.scheduleReminderNotification();
                dialogs.alert({
                    title: "3 O'Clock Reminder",
                    message: "Reminder has been scheduled.",
                    okButtonText: "OK"
                });
            } else {
                dialogs.alert({
                    title: "3 O'Clock Reminder",
                    message: "Reminder could not be scheduled. Please allow notifications.",
                    okButtonText: "OK"
                });
            }
        });

    }

    scheduleReminderNotification() {
        // real date
        const date = this.scheduleDate;

        // testing
        // const date = new Date();
        // date.setMinutes(date.getMinutes() + 1);

        LocalNotifications.schedule([{
            id: this.notificationId, // generated id if not set
            title: "3 O'Clock Reminder",
            body: "This is your scheduled reminder to pray at 3 O'Clock",
            color: new Color("#961300"),
            badge: 1,
            // icon: "res://img_notification",
            // image: "res://img_headericons_dm",
            thumbnail: true,
            // at: this.scheduleDate,
            at: date,
            priority: 2,
            interval: "day"
        }]).then(
            (scheduledIds) => {
                console.log("Reminder scheduled for date: " + date);
            },
            (error) => {
                console.log("scheduling error: " + error);
            }
        );
    }

    cancelReminder() {
        this.reminderIsScheduled(() => {
            this.cancelReminderNotification();
            dialogs.alert({// notify user
                title: "3 O'Clock Reminder",
                message: "Reminder notifiations cancelled.",
                okButtonText: "OK"
            });
        }, () => {
            dialogs.alert({
                title: "3 O'Clock Reminder",
                message: "No Reminder notifiations are scheduled.",
                okButtonText: "OK"
            });
        });
    }

    cancelReminderNotification() {
        // cancel recurring notification
        LocalNotifications.cancel(this.notificationId).then(
            (foundAndCanceled) => {
                if (foundAndCanceled) {
                //   console.log("Notification " + notificationId + " cancelled.");
                } else {
                //   console.log("No notification " + notificationId);
                }
            }
        );
        // update index stored variable
        setNumber("hour-notification-index", 0);
    }

    reminderIsScheduled(yes: () => void, no: () => void): void {
        let isScheduled = false;
        LocalNotifications.getScheduledIds().then(
            (ids) => {
                if (this.arrayContains(ids, this.notificationId)) {
                    yes();
                    isScheduled = true;
                }
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
