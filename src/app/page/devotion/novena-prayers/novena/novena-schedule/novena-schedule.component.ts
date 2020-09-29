import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TimePicker } from "tns-core-modules/ui/time-picker";

@Component({
    selector: "NovenaSchedule",
    templateUrl: "./novena-schedule.component.html"
})
export class NovenaScheduleComponent implements OnInit {
    scheduleDate: Date;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;

    constructor(
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.scheduleDate = new Date();
        this.year = this.scheduleDate.getFullYear();
        this.month = this.scheduleDate.getMonth();
        this.day = this.scheduleDate.getDate();
        this.hour = this.scheduleDate.getHours();
        this.minute = this.scheduleDate.getMinutes();
    }

    onDatePickerLoaded(args) {
        // const datePicker = args.object as DatePicker;
        console.log(args.object);
    }

    onDateChanged(args) {
        // console.log("Date: " + args.value);
        // console.log("Year:  " + args.value.getFullYear());
        // console.log("Month:  " + args.value.getMonth());
        // console.log("Day:  " + args.value.getDate());
        this.year = args.value.getFullYear();
        this.month = args.value.getMonth();
        this.day = args.value.getDate();
        this.updateScheduleDate();
    }

    onTimeChanged(args) {
        // console.log("Hours:  " + args.value.getHours());
        // console.log("Minutes:  " + args.value.getMinutes());
        // console.log("Seconds:  " + args.value.getSeconds());
        this.hour = args.value.getHours();
        this.minute = args.value.getMinutes();
        this.updateScheduleDate();
    }

    showDate() {
        console.log("Year:  " + this.year);
        console.log("Month:  " + this.month);
        console.log("Day:  " + this.day);
        console.log("Hours:  " + this.hour);
        console.log("Minutes:  " + this.minute);
        console.log("Full Date: " + this.scheduleDate);
    }

    updateScheduleDate() {
        this.scheduleDate = new Date(this.year, this.month , this.day, this.hour, this.minute);
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
