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
        timeline: new Array<DataItem>(
            {
                id: 1,
                name: "timeline 1",
                description: "<i>The main events of the life of St. Faustina Kowalska, her cause of beatification and canonization, and her ongoing mission of mercy in our time:</i>"
            },
            {
                id: 2,
                name: "timeline 2",
                description: "<b>AUGUST 25, 1905:</b> Sister Faustina is born Helen Kowalska in the village Glogowiec, near Lodz, Poland."
            },
            {
                id: 3,
                name: "timeline 3",
                description: "<b>1912:</b> At the age of seven, Helen hears for first time a voice in her soul, calling her to a more perfect way of life."
            },
            {
                id: 4,
                name: "timeline 4",
                description: "..."
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
