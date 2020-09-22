import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { getBoolean, hasKey, setBoolean } from "tns-core-modules/application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { device, isAndroid, screen } from "tns-core-modules/platform";
import { FormattedString } from "tns-core-modules/text/formatted-string";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { PanGestureEventData } from "tns-core-modules/ui/gestures";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
import { TextFormatter } from "~/app/shared/text-formatter";
import { DataService, TextItem } from "~/app/shared/data.service";
import { style, animate, transition, trigger } from "@angular/animations";

@Component({
    selector: "Chaplet",
    templateUrl: "./chaplet.component.html"
})
export class ChapletComponent implements OnInit {

    // grabbing ui elements
    @ViewChild("beads", {static: true}) beads: ElementRef; // beads image
    @ViewChild("beadBox", {static: true}) beadBox: ElementRef; // container with beads image

    chapletPrayer: TextItem; // the currently displayed prayer
    chapletPrayerBody: FormattedString; // the formatted prayer body
    beadsAreMoving: boolean; // whether beads are currently moving

    readonly SCREEN_HEIGHT_DIP: number = screen.mainScreen.heightDIPs;
    readonly BEAD_TOP_START: number = isAndroid ? -3315 : this.SCREEN_HEIGHT_DIP / 2 - 3660;
    readonly BEAD_GLOW_TOP_START: number = isAndroid ? 250 : this.SCREEN_HEIGHT_DIP / 2 - 84;

    private beadIndex: number; // which bead we are on (0 - 11)
    private beadDistance: Array<number>; // how far the beads are apart
    private backCount: number; // how many times the user has moved back
    private startOverAttempted: boolean; // whether user has been prompted to restart

    private chapletPrayers: Array<TextItem>;
    private readonly chapletPrayerIndex = [1, 2, 3, 4, 5,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8];

    // constant values
    private readonly BEAD_MAX: number = 60;
    private readonly BEAD_SHORT: number = 51.5;
    private readonly BEAD_LONG: number = 82;
    private readonly BEAD_CROSS: number = 132;
    private readonly BEAD_END: number = 120;
    private readonly BEAD_TIME: number = 500;
    private readonly RESTART_TIME: number = 500;
    private readonly RESTART_SWIPES: number = 2;
    private readonly RESTART_SWIPES_REPEAT: number = 5;
    private readonly SWIPE_VERICAL_MIN: number = 10;
    private readonly SWIPE_HORIZONTAL_MAX: number = 100;
    private readonly BOUNCE_TIME: number = 250;
    private readonly BOUNCE_DISTANCE: number = 42;

    // sounds
    // private sound: any;//sound library
    // private dink_sound: any;//forward bead sound
    // private donk_sound: any;//backward bead sound
    // private error_sound: any;//error bead sound

    constructor(private data: DataService, private router: RouterExtensions, private formatter: TextFormatter) { }

    ngOnInit(): void {

        // console.log("SCREEN_HEIGHT_DIP: " + this.SCREEN_HEIGHT_DIP);

        // shorter variables for readability
        let A = this.BEAD_CROSS;
        let B = this.BEAD_LONG;
        let C = this.BEAD_SHORT;
        const D = this.BEAD_END;

        // iOS device adjustment
        if (!isAndroid) {

            A -= 5;
            B -= 3;

            // if iPhone X, XR or XS Max, smaller BEAD_SHORT by 2
            if (this.SCREEN_HEIGHT_DIP === 896 || this.SCREEN_HEIGHT_DIP === 812) {
                B -= 2;
                A += 9;
            }

            // // if iPad pro 11" or 12.9", smaller BEAD_SHORT by 1
            // if (this.SCREEN_HEIGHT_DIP === 1194 || this.SCREEN_HEIGHT_DIP === 1366) {
            //     B -= 1;
            // }

            // fix bead placement on iOS < 11
            if (parseFloat(device.osVersion) < 11) {
                A += 7;
                C += 1.5;
            }

        }

        this.beadDistance = [A, B, C, C,
            B, B, C, C, C, C, C, C, C, C, C,
            B, B, C, C, C, C, C, C, C, C, C,
            B, B, C, C, C, C, C, C, C, C, C,
            B, B, C, C, C, C, C, C, C, C, C,
            B, B, C, C, C, C, C, C, C, C, C, D ];

        // initialize counts, etc.
        this.beadIndex = 0;
        this.backCount = 0;
        this.startOverAttempted = false;
        this.beadsAreMoving = false;

        // preload sounds
        // this.sound = require("nativescript-sound");
        // this.dink_sound = this.sound.create("~/sounds/chaplet_dink.mp3");
        // this.donk_sound = this.sound.create("~/sounds/chaplet_donk.mp3");
        // this.error_sound = this.sound.create("~/sounds/chaplet_error.mp3");

        // load prayers

        this.chapletPrayers = new Array<TextItem>();
        this.chapletPrayerIndex.forEach((index) => {
            const prayer = this.data.getTextItem("chaplet", index);
            this.chapletPrayers.push(prayer);
        });

        this.updatePrayer();

        // if user hasn't set sounds on or off, set them on
        if (!hasKey("playChapletSounds")) {
            setBoolean("playChapletSounds", true);
        }

    }

    // display the title and body of currently selected prayer
    updatePrayer() {
        this.chapletPrayer = this.chapletPrayers[this.beadIndex];
        this.chapletPrayerBody = this.formatter.formatTagsFromString(this.chapletPrayer.description);
    }

    // Fired when user moves finger on beads
    onBeadPan(args: PanGestureEventData) {
        if (this.beadsAreMoving) {
            return;
        }
        // if user is done swiping & doesn't swipe way left or right
        if (args.state === 3 && Math.abs(args.deltaX) < this.SWIPE_HORIZONTAL_MAX) {
            // let consoleMessage = "beadIndex: from " + this.beadIndex;//for debugging
            if (args.deltaY > this.SWIPE_VERICAL_MIN) {// if user swipes down
                if (this.moveBeadsDown()) {
                    this.updatePrayer();
                }
            } else if (args.deltaY < 0 - this.SWIPE_VERICAL_MIN) {// if user swipes up
                if (this.moveBeadsUp()) {
                    this.updatePrayer();
                    // if user swipes down twice OR five times after being previously offered to start over,
                    // prompt user with decision to start over
                    if (((this.backCount >= this.RESTART_SWIPES && !this.startOverAttempted)
                    || this.backCount > this.RESTART_SWIPES_REPEAT) && this.beadIndex > 0) {
                        this.offerToStartOver();
                    }
                }
            }
            // console.log(consoleMessage + " to " + this.beadIndex);//debug
            // this.testForStartOver();//debug
        }
    }

    // handles swiping down
    moveBeadsDown(): boolean {
        // console.log("Swiped Beads down!")
        if (this.beadIndex < this.BEAD_MAX) {
            // move beads forward by one
            this.playForwardSound();
            this.moveBeadsVertical(this.beadDistance[this.beadIndex], false);
            this.beadIndex++;
            this.backCount = 0;
            this.startOverAttempted = false;

            return true;
        } else {
            // we are at the end of the beads; cannot go forward
            this.endBounce();

            return false;
        }
    }

    // handles swiping up
    moveBeadsUp(): boolean {
        // console.log("Swiped Beads down!")
        if (this.beadIndex > 0) {
            // move beads backwards by one
            this.playBackSound();
            this.moveBeadsVertical(0 - this.beadDistance[this.beadIndex - 1], false);
            this.beadIndex--;
            this.backCount++;

            return true;
        } else {
            // we are at the beginning of the beads; cannot go backward
            console.log("start of beads");
            this.startBounce();

            return false;
        }
    }

    // prompt user if they want to start over;
    // happens on
    offerToStartOver() {
        let actionList = ["Yes"];
        if (this.SCREEN_HEIGHT_DIP === 1194 || this.SCREEN_HEIGHT_DIP === 1366) {
            actionList.push("No");
        }
        this.startOverAttempted = true;
        dialogs.action({// confirm with user
            message: "Start Over?",
            cancelButtonText: "No",
            actions: actionList
        }).then((result) => {// confirmed
            if (result === "Yes") {
                this.startOver();
            }
            this.backCount = 0;
        });
    }

    startOver() {
        this.moveBeadsVertical(0, true);
        this.beadIndex = 0;
        this.updatePrayer();
        this.startOverAttempted = false;
    }

    moveBeadsVertical(translation: number, startOver: boolean) {
        this.disableSwiping();
        this.beads.nativeElement.animate({
            duration: startOver ? this.RESTART_TIME : this.BEAD_TIME * Math.abs(translation / this.BEAD_SHORT),
            curve: AnimationCurve.linear,
            translate: {x: 0, y: startOver ? 0 : this.beads.nativeElement.translateY + translation}
        }).then(() => {
            this.enableSwiping();
        });
    }

    endBounce() {
        this.disableSwiping();
        this.beads.nativeElement.animate({
            duration: this.BOUNCE_TIME,
            curve: AnimationCurve.easeOut,
            translate: {x: 0, y: this.beads.nativeElement.translateY + this.BOUNCE_DISTANCE}
        }).then(() => {
            this.playErrorSound();
            this.beads.nativeElement.animate({
                duration: this.BOUNCE_TIME,
                curve: AnimationCurve.spring,
                translate: {x: 0, y: this.beads.nativeElement.translateY - this.BOUNCE_DISTANCE}
            }).then(() => {
                this.offerToStartOver();
                this.startOverAttempted = false;
                this.enableSwiping();
            });
        });
    }

    startBounce() {
        this.disableSwiping();
        this.beads.nativeElement.animate({
            duration: this.BOUNCE_TIME,
            curve: AnimationCurve.easeOut,
            translate: {x: 0, y: this.beads.nativeElement.translateY - this.BOUNCE_DISTANCE}
        }).then(() => {
            this.playErrorSound();
            this.beads.nativeElement.animate({
                duration: this.BOUNCE_TIME,
                curve: AnimationCurve.spring,
                translate: {x: 0, y: this.beads.nativeElement.translateY + this.BOUNCE_DISTANCE}
            }).then(() => {
                this.enableSwiping();
            });
        });
    }

    disableSwiping() {
        this.beadsAreMoving = true; // disable gestures
    }

    enableSwiping() {
        this.beadsAreMoving = false; // enable gestures
    }

    testForStartOver() {
        console.log("startOverAttempted: " + this.startOverAttempted);
        console.log("backCount: " + this.backCount);
        console.log("RESTART_SWIPES: " + this.RESTART_SWIPES);
    }

    playForwardSound() {
        if (getBoolean("playChapletSounds")) {
            // this.dink_sound.play();
        }
    }

    playBackSound() {
        if (getBoolean("playChapletSounds")) {
            // this.donk_sound.play();
        }
    }

    playErrorSound() {
        if (getBoolean("playChapletSounds")) {
            // this.error_sound.play();
        }
    }

    showSettings() {
        dialogs.action({// show options to user
            // title: "Settings",//if this is set, message doesn't display
            message: "Make sound (vibration if silent) when bead changes?",
            cancelButtonText: "Cancel",
            actions: ["Turn sound on", "Turn sound off"]
        }).then((result) => {// choice has been made or cancelled
            console.log("Dialog result: " + result);
            if (result === "Turn sound on") {
                setBoolean("playChapletSounds", true); // turn sound on
                dialogs.alert({// notify user
                    title: "Settings",
                    message: "Bead sounds have been turned on.",
                    okButtonText: "OK"
                });
                this.playForwardSound();
            } else if (result === "Turn sound off") {
                setBoolean("playChapletSounds", false); // turn sound off
                dialogs.alert({// notify user
                    title: "Settings",
                    message: "Bead sounds have been turned off.",
                    okButtonText: "OK"
                });
            } else {
                return;
            }
        });
    }

    onBackTap(): void {
        this.router.back();
    }

}
