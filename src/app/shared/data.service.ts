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
                name: "faustina 1",
                description: "Description for Item 1"
            },
            {
                id: 2,
                name: "faustina 2!",
                description: "Description for Item 2"
            }
        )
    };

    getDataItems(page: string): Array<DataItem> {
        return this.dataItems[page];
    }

    getDataItem(page: string, id: number): DataItem {
        return this.dataItems[page].filter((item) => item.id === id)[0];
    }

}
