import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private dataItems = {
        introduction: new Array<DataItem>(
            {
                id: 1,
                name: "What is Mercy?",
                description: "Description for Item 1"
            },
            {
                id: 2,
                name: "What is Divine Mercy?",
                description: "Description for Item 2"
            },
            {
                id: 3,
                name: "What is the Message of Divine Mercy?",
                description: "Description for Item 3"
            },
            {
                id: 4,
                name: "Why Should We Listen to St. Faustina?",
                description: "Description for Item 4"
            },
            {
                id: 5,
                name: "Why the Marians and Divine Mercy?",
                description: "Description for Item 5"
            }
        ),
        faustina: new Array<DataItem>(
            {
                id: 1,
                name: "Life of Faustina (short version)",
                description: "Description for Item 1"
            },
            {
                id: 2,
                name: "Life of Faustina (long version)",
                description: "Description for Item 2"
            },
            {
                id: 3,
                name: "Resources on Faustina",
                description: "Description for Item 2"
            }
        ),
        "faustina-life-long": new Array<DataItem>(
            {
                id: 1,
                name: "Born in the Heart of Poland",
                description: "Description for Item 1"
            },
            {
                id: 2,
                name: "2",
                description: ""
            },
            {
                id: 3,
                name: "3",
                description: ""
            },
            {
                id: 4,
                name: "4",
                description: ""
            },
            {
                id: 5,
                name: "5",
                description: ""
            },
            {
                id: 6,
                name: "The Image of Divine Mercy",
                description: "Description for Item 2"
            },
            {
                id: 7,
                name: "7",
                description: ""
            }
        )
    };

    // TODO: attempt to get data from server;
    // if not available, use this hard-coded data

    getDataItems(page: string): Array<DataItem> {
        return this.dataItems[page];
    }

    getDataItem(page: string, id: number): DataItem {
        return this.dataItems[page].filter((item) => item.id === id)[0];
    }

}
