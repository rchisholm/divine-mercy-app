// TextFormatter
// by Russell Chisholm 9/25/18
//
// my class which holds "formatTagsFromString", which converts a string with
// html-style markup tags into a FormattedString to be used in native UI elements.
// example: Hello <b>World!</b>
//
// Does NOT handle overlapping tags. examples:
// this WILL NOT work: Welcome <b>to <i> Las </i>Vegas!</b>
// use this instead: Welcome <b>to</b> <bi>Las</bi> <b>Vegas!</b>
//
// Does not require a proper closing tag; closes on the next tag of any kind.
// Example: "<b>Hello</b>" is the same as "<b>Hello<xyz>"
//
// Unrecognized tags simply do not markup the corresponding section.
//
// Handles unclosed tags fairly gracefully. Examples:
// "The quick <b>brown fox jumped" becomes "The quick <b>brown fox jumped</b>"
// "The <quick fox" becomes "The quick fox"
//
// tags are not case sensitive.
//
// tags can currently only be added by adding them to the case list below.
//
// Supported tags:
// b, bold, strong = BOLD TEXT
// i, italic, italics = ITALIC TEXT
// bi, ib = BOLD AND ITALIC TEXT
// green = GREEN TEXT
// b-orange = BOLD, ORANGE TEXT

import { Injectable } from "@angular/core";
import { FormattedString, Span } from "tns-core-modules/text/formatted-string";
import { FontStyle } from "tns-core-modules/ui/styling/font";
import { Color } from "tns-core-modules/color/color";

@Injectable({
    providedIn: "root"
})
export class TextFormatter {

    private isDebug: boolean = false;

    // this formats any tags listed in the cases.
    formatTagsFromString(input: string): FormattedString {
        this.debug("initial string: " + input);
        const formattedResult = new FormattedString();
        let splitInput = new Array<string>();
        let finished: boolean = false;
        let closedTagAtEnd: boolean = false;
        let taggedString: boolean = false;
        if (input.substr(input.length - 1) === ">") {
            closedTagAtEnd = true;
        }

        splitInput = this.splitWithTail(input, "<");
        this.debug("splitInput0: " + splitInput);
        while (splitInput.length > 1) {
            finished = false;
            taggedString = false;
            const regularSpan = new Span();
            regularSpan.text = splitInput[0];
            formattedResult.spans.push(regularSpan);
            splitInput = this.splitWithTail(splitInput[1], ">");
            this.debug("splitInput1: " + splitInput);
            if (splitInput.length > 1) {
                taggedString = true;
                const formattedSpan = new Span();
                const tag = splitInput[0];
                splitInput = this.splitWithTail(splitInput[1], "<");
                this.debug("splitInput2: " + splitInput);
                switch (tag.toLowerCase()) {
                    // case list begins (add cases here):
                    case "i": case "italic": case "italics": case "em":
                    formattedSpan.fontStyle = "italic";
                    break;
                    case "b": case "bold": case "strong":
                    formattedSpan.fontWeight = "bold";
                    break;
                    case "bi": case "ib":
                    formattedSpan.fontWeight = "bold";
                    formattedSpan.fontStyle = "italic";
                    break;
                    case "green":
                    formattedSpan.color = new Color("green");
                    break;
                    case "b-orange":
                    formattedSpan.fontWeight = "bold";
                    formattedSpan.color = new Color("orange");
                    break;
                    // case list ends
                    default:
                    break;
                }
                formattedSpan.text = splitInput[0];
                formattedResult.spans.push(formattedSpan);
            }
            if (splitInput.length > 1) {
                splitInput = this.splitWithTail(splitInput[1], ">");
                this.debug("splitInput3: " + splitInput);
                if (splitInput.length > 1) {
                    splitInput = this.splitWithTail(splitInput[1], "<");
                    this.debug("splitInput4: " + splitInput);
                } else {
                    finished = true;
                    if (closedTagAtEnd) {
                        this.debug("complete closing tag at end");
                    } else {
                        this.debug("incomplete closing tag at end");
                    }
                }
            } else {
                finished = true;
                if (closedTagAtEnd) {
                    this.debug("complete opening tag at end");
                } else {
                    if (taggedString) {
                        this.debug("tagged string at end")
                    } else {
                        this.debug("incomplete opening tag at end");
                    }
                }
            }
        }
        if (!finished) {
            const finalSpan = new Span();
            finalSpan.text = splitInput[0];
            formattedResult.spans.push(finalSpan);
            // this.debug("finalSpan: " + finalSpan.text)
        }

        return formattedResult;
    }

    // return an array of 2 strings, [0] = the part before the 1st occurrence of
    // the delimiter, the second part being the remainder.
    splitWithTail(str: string, delim: string, count: number = 1) {
        const parts = str.split(delim);
        const tail = parts.slice(count).join(delim);
        const result = parts.slice(0, count);
        if (tail.length > 0) {
            result.push(tail);
        }

        return result;
    }

    debug(message): void {
        if (this.isDebug) {
            console.log(message);
        }
    }

}
