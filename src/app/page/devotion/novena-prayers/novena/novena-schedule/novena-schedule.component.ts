import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "tns-core-modules/ui/date-picker";

@Component({
    selector: "NovenaSchedule",
    templateUrl: "./novena-schedule.component.html"
})
export class NovenaScheduleComponent implements OnInit {
    scheduleDate: Date;

    constructor(
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.scheduleDate = new Date();
    }

    onDatePickerLoaded(args) {
        // const datePicker = args.object as DatePicker;
        console.log(args.object);
    }

    onDateChanged(args) {
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
        this.scheduleDate = args.value;
    }

    // onDayChanged(args) {
    //     console.log("Day New value: " + args.value);
    //     console.log("Day Old value: " + args.oldValue);
    // }

    // onMonthChanged(args) {
    //     console.log("Month New value: " + args.value);
    //     console.log("Month Old value: " + args.oldValue);
    // }

    // onYearChanged(args) {
    //     console.log("Year New value: " + args.value);
    //     console.log("Year Old value: " + args.oldValue);
    // }

    onBackTap(): void {
        this.router.back();
    }

}
