import { Component, ElementRef, OnInit, ViewChild, NgZone, OnChanges } from "@angular/core";
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
import { TNSPlayer } from "nativescript-audio";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";

@Component({
    selector: "Chaplet",
    templateUrl: "./chaplet.component.html",
    animations: [
        trigger("fadeInOutBeads", [
          transition(":enter", [   // :enter is alias to 'void => *'
            style({opacity: 0}),
            animate(250, style({opacity: 1}))
          ]),
          transition(":leave", [   // :leave is alias to '* => void'
            animate(250, style({opacity: 0}))
          ])
        ]),
        trigger("fadeInOutSwitch", [
          transition(":enter", [   // :enter is alias to 'void => *'
            style({opacity: 0}),
            animate(250, style({opacity: 1}))
          ]),
          transition(":leave", [   // :leave is alias to '* => void'
            animate(250, style({opacity: 0}))
          ])
        ])
    ]
})
export class ChapletComponent implements OnInit {

    // grabbing ui elements
    @ViewChild("beads", {static: true}) beads: ElementRef; // beads image
    @ViewChild("beadBox", {static: true}) beadBox: ElementRef; // container with beads image

    chapletPrayer: TextItem; // the currently displayed prayer
    chapletPrayerBody: FormattedString; // the formatted prayer body
    beadsAreMoving: boolean; // whether beads are currently moving
    invisibleElements: boolean;
    audioIsEnabled: boolean;
    autoIsEnabled: boolean;

    readonly SCREEN_HEIGHT_DIP: number = screen.mainScreen.heightDIPs;
    readonly SCREEN_WIDTH_DIP: number = screen.mainScreen.widthDIPs;

    readonly BEAD_RATIO = 34.54;
    readonly BEAD_WIDTH = 108;
    readonly BEAD_HEIGHT = 3730.32;

    readonly BEAD_CROSS_PERCENT = 0.0345;
    readonly BEAD_LONG_PERCENT = 0.0215;
    readonly BEAD_SHORT_PERCENT = .01405;
    readonly BEAD_END_PERCENT = 0.030;
    readonly BEAD_OFFSET_PERCENT = isAndroid ? 0.0290 : 0.0265;
    // readonly BEAD_OFFSET_PERCENT = 0.0290;

    readonly OS_FACTOR = isAndroid ? 1.0 : 0.986;

    readonly IPHONE_X = !isAndroid  && this.SCREEN_HEIGHT_DIP === 812;
    readonly IPHONE_11 = !isAndroid && this.SCREEN_HEIGHT_DIP === 896 && screen.mainScreen.heightPixels === 1792;
    readonly IPHONE_11_PM = !isAndroid && this.SCREEN_HEIGHT_DIP === 896 && screen.mainScreen.heightPixels === 2688;
    readonly IPAD = !isAndroid && (this.SCREEN_HEIGHT_DIP === 1194 || this.SCREEN_HEIGHT_DIP === 1366);
    readonly IOS_OLD = !isAndroid && (parseFloat(device.osVersion) < 11);
    readonly PIXEL_3 = isAndroid && screen.mainScreen.heightPixels === 2960;

    // readonly OS_FACTOR = 1;

    readonly BEAD_CROSS_DISTANCE = this.BEAD_HEIGHT * this.BEAD_CROSS_PERCENT;
    readonly BEAD_LONG_DISTANCE = this.BEAD_HEIGHT * this.BEAD_LONG_PERCENT;
    readonly BEAD_SHORT_DISTANCE = this.BEAD_HEIGHT * this.BEAD_SHORT_PERCENT;
    readonly BEAD_END_DISTANCE = this.BEAD_HEIGHT * this.BEAD_END_PERCENT;
    readonly BEAD_OFFSET_DISTANCE = this.BEAD_HEIGHT * this.BEAD_OFFSET_PERCENT;

    BEAD_GLOW_TOP_START: number = (this.SCREEN_HEIGHT_DIP - this.BEAD_WIDTH) / 2;
    BEAD_TOP_START: number = this.SCREEN_HEIGHT_DIP / 2 - this.BEAD_HEIGHT + this.BEAD_OFFSET_DISTANCE;

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
    private readonly BEAD_TIME: number = 500;
    private readonly RESTART_TIME: number = 500;
    private readonly RESTART_SWIPES: number = 2;
    private readonly RESTART_SWIPES_REPEAT: number = 5;
    private readonly SWIPE_VERICAL_MIN: number = 10;
    private readonly SWIPE_HORIZONTAL_MAX: number = 100;
    private readonly BOUNCE_TIME: number = 250;
    private readonly BOUNCE_DISTANCE: number = 42;

    // audio
    private audioPlayer: TNSPlayer;
    private audioTracks = {
        1: "soc",
        2: "opening",
        3: "ourfather",
        4: "hailmary",
        5: "creed",
        6: "eternalfather",
        7: "passion",
        8: "closing"
    };

    constructor(
        private data: DataService,
        private router: RouterExtensions,
        private formatter: TextFormatter,
        private ngZone: NgZone
    ) {}

    ngOnInit(): void {

        if (!hasKey("chaplet-audio-enabled")) {
            setBoolean("chaplet-audio-enabled", false);
        }
        this.audioIsEnabled = getBoolean("chaplet-audio-enabled");
        this.autoIsEnabled = false;
        this.audioPlayer = new TNSPlayer();
        // this.audioPlayer.debug = true;

        // determine multiplier
        let beadDistanceFactor = this.OS_FACTOR;
        if (this.IPHONE_11) {
            console.log("IPHONE_11");
            beadDistanceFactor *= 0.99;
            this.BEAD_GLOW_TOP_START -= 3;
        }
        if (this.IPHONE_11_PM) {
            console.log("IPHONE_11_PM");
            beadDistanceFactor *= 0.99;
            this.BEAD_GLOW_TOP_START -= 10;
        }
        if (this.IPHONE_X) {
            console.log("IPHONE_X");
            beadDistanceFactor *= 0.99;
            this.BEAD_GLOW_TOP_START -= 12;
        }
        if (this.IOS_OLD) {
            console.log("IOS_OLD");
            beadDistanceFactor *= 1.019;
        }
        if (this.IPAD) {
            console.log("IPAD");
            beadDistanceFactor *= 0.997;
        }
        if (this.PIXEL_3) {
            console.log("PIXEL_3");
            this.BEAD_GLOW_TOP_START -= 10;
        }

        // shorter variables for readability
        const A = this.BEAD_CROSS_DISTANCE * beadDistanceFactor;
        const B = this.BEAD_LONG_DISTANCE * beadDistanceFactor;
        const C = this.BEAD_SHORT_DISTANCE * beadDistanceFactor;
        const D = this.BEAD_END_DISTANCE * beadDistanceFactor;

        // console.log("SCREEN_HEIGHT_DIP: " + this.SCREEN_HEIGHT_DIP);
        // console.log("SCREEN_WIDTH_DIP: " + this.SCREEN_WIDTH_DIP);
        // console.log("SCREEN_HEIGHT_PIX: " + screen.mainScreen.heightPixels);
        // console.log("SCREEN_WIDTH_PIX: " + screen.mainScreen.widthPixels);
        // console.log("SCREEN_SCALE: " + screen.mainScreen.scale);

        // console.log("BEAD_HEIGHT: " + this.BEAD_HEIGHT);
        // console.log("BEAD_CROSS_DISTANCE: " + this.BEAD_CROSS_DISTANCE);
        // console.log("BEAD_SHORT_DISTANCE: " + this.BEAD_SHORT_DISTANCE);
        // console.log("BEAD_LONG_DISTANCE: " + this.BEAD_LONG_DISTANCE);
        // console.log("BEAD_END_DISTANCE: " + this.BEAD_END_DISTANCE);

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
        this.invisibleElements = false;

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
    }

    OnDestroy(): void {
        console.log("component destroyed...");
        this.autoIsEnabled = false;
        this.audioPlayer.pause();
    }

    // display the title and body of currently selected prayer
    updatePrayer() {
        this.chapletPrayer = this.chapletPrayers[this.beadIndex];
        this.chapletPrayerBody = this.formatter.formatTagsFromString(this.chapletPrayer.description);
    }

    advanceBeads() {
        if (!this.beadsAreMoving) {
            if (this.moveBeadsDown()) {
                this.updatePrayer();
            }
        }
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
            this.moveBeadsVertical(0 - this.beadDistance[this.beadIndex - 1], false);
            this.beadIndex--;
            this.backCount++;

            return true;
        } else {
            // we are at the beginning of the beads; cannot go backward
            this.startBounce();

            return false;
        }
    }

    // prompt user if they want to start over;
    // happens on
    offerToStartOver() {
        setTimeout(() => {
            const actionList =
                this.SCREEN_HEIGHT_DIP === 1194 || this.SCREEN_HEIGHT_DIP === 1366 ? ["Yes", "No"] : ["Yes"];
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
        }, 300);
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
            duration: startOver ? this.RESTART_TIME : this.BEAD_TIME * Math.abs(translation / this.BEAD_SHORT_DISTANCE),
            curve: AnimationCurve.linear,
            translate: {x: 0, y: startOver ? 0 : this.beads.nativeElement.translateY + translation}
        }).then(() => {
            this.enableSwiping();
            this.playCurrentAudio();
        }, (error) => {
            this.updatePrayer();
            this.enableSwiping();
            this.autoIsEnabled = false;
        });
    }

    endBounce() {
        this.disableSwiping();
        this.beads.nativeElement.animate({
            duration: this.BOUNCE_TIME,
            curve: AnimationCurve.easeOut,
            translate: {x: 0, y: this.beads.nativeElement.translateY + this.BOUNCE_DISTANCE}
        }).then(() => {
            this.beads.nativeElement.animate({
                duration: this.BOUNCE_TIME,
                curve: AnimationCurve.spring,
                translate: {x: 0, y: this.beads.nativeElement.translateY - this.BOUNCE_DISTANCE}
            }).then(() => {
                this.offerToStartOver();
                this.startOverAttempted = false;
                this.enableSwiping();
                this.playCurrentAudio();
            }, (error) => {
                this.enableSwiping();
                this.autoIsEnabled = false;
            });
        }, (error) => {
            this.enableSwiping();
            this.autoIsEnabled = false;
        });
    }

    startBounce() {
        this.disableSwiping();
        this.beads.nativeElement.animate({
            duration: this.BOUNCE_TIME,
            curve: AnimationCurve.easeOut,
            translate: {x: 0, y: this.beads.nativeElement.translateY - this.BOUNCE_DISTANCE}
        }).then(() => {
            this.beads.nativeElement.animate({
                duration: this.BOUNCE_TIME,
                curve: AnimationCurve.spring,
                translate: {x: 0, y: this.beads.nativeElement.translateY + this.BOUNCE_DISTANCE}
            }).then(() => {
                this.enableSwiping();
            }, (error) => {
                this.enableSwiping();
                this.autoIsEnabled = false;
            });
        }, (error) => {
            this.enableSwiping();
            this.autoIsEnabled = false;
        });
    }

    disableSwiping() {
        this.beadsAreMoving = true; // disable gestures
        this.invisibleElements = true;
    }

    enableSwiping() {
        setTimeout(() => {
            this.beadsAreMoving = false;
        }, 300);
        this.invisibleElements = false; // enable gestures
    }

    testForStartOver() {
        console.log("startOverAttempted: " + this.startOverAttempted);
        console.log("backCount: " + this.backCount);
        console.log("RESTART_SWIPES: " + this.RESTART_SWIPES);
    }

    playAudio(audioIndex): void {
        this.audioPlayer.pause();
        const audioPath = "~/audio/" + this.audioTracks[audioIndex] + ".mp3";
        this.audioPlayer.playFromFile({
            audioFile: audioPath,
            loop: false,
            completeCallback: () => {
                this.ngZone.run(() => {
                    if (this.autoIsEnabled && this.audioIsEnabled) {
                        this.advanceBeads();
                    }
                });
            }
        });
    }

    playCurrentAudio() {
        if (this.audioIsEnabled) {
            this.playAudio(this.chapletPrayerIndex[this.beadIndex]);
        }
    }

    audioToggle(args: EventData) {
        this.audioPlayer.pause();
        const sw = args.object as Switch;
        const isChecked = sw.checked; // boolean
        setBoolean("chaplet-audio-enabled", isChecked);
        this.audioIsEnabled = isChecked;
        if (isChecked) {
            this.playCurrentAudio();
        }
    }

    autoToggle(args: EventData) {
        const sw = args.object as Switch;
        const isChecked = sw.checked; // boolean
        this.autoIsEnabled = isChecked;
        if (!this.audioPlayer.isAudioPlaying()) {
            this.playCurrentAudio();
        }
    }

    onBackTap(): void {
        this.audioPlayer.pause();
        this.router.back();
    }

}
