import { Injectable } from "@angular/core";

export interface TextItem {
    id: number;
    name: string;
    description?: string;
    route?: string;
}

export interface ResourceItem {
    id: number;
    name: string;
    subtitle: string;
    author: string;
    image: string;
    description: string;
    link: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    // TODO: attempt to get data from server;
    // if not available, use this hard-coded data

    private textItems = {
        introduction: new Array<TextItem>(
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
        timeline: new Array<TextItem>(
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
        faustina: new Array<TextItem>(
            {
                id: 1,
                name: "Life of Faustina (short version)",
                description: "Description for Item 1",
                route: "faustina-life-short"
            },
            {
                id: 2,
                name: "Life of Faustina (long version)",
                description: "Description for Item 2",
                route: "faustina-life-long"
            },
            {
                id: 3,
                name: "Resources on Faustina",
                description: "Description for Item 2",
                route: "faustina-resources"
            }
        ),
        "faustina-life-short": new Array<TextItem>(
            {
                id: 1,
                name: "short 1",
                description: "Helena Kowalska..."
            }
        ),
        "faustina-life-long": new Array<TextItem>(
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
        ),
        "mercy-popes": new Array<TextItem>(
            {
                id: 1,
                name: "Pope John Paul II",
                description: "..."
            },
            {
                id: 2,
                name: "Pope Benedict XVI",
                description: "..."
            },
            {
                id: 3,
                name: "Pope Francis",
                description: "..."
            },
            {
                id: 4,
                name: "Resources on the Mercy Popes",
                route: "mercy-popes-resources"
            }
        ),
        diary: new Array<TextItem>(
            {
                id: 1,
                name: "Themes from the Diary",
                route: "diary-themes"
            },
            {
                id: 2,
                name: "Purchase the Diary",
                route: "diary-purchase"
            }
        ),
        "diary-themes": new Array<TextItem>(
            {
                id: 1,
                name: "Chaplet of Divine Mercy",
                description: "In the evening..."
            },
            {
                id: 2,
                name: "Confession",
                description: "The confessor..."
            }
        ),
        feast: new Array<TextItem>(
            {
                id: 1,
                name: "The Meaning of the Day",
                description: "text1"
            },
            {
                id: 2,
                name: "Veneration of the Image",
                description: "text2"
            },
            {
                id: 3,
                name: "The Extraordinary Promise",
                description: "text"
            },
            {
                id: 4,
                name: "Is the Promise a Plenary Indulgence?",
                description: "text"
            },
            {
                id: 5,
                name: "Proper Preparation",
                description: "text"
            }
        ),
        "novena-prayers": new Array<TextItem>(
            {
                id: 1,
                name: "Novena to Divine Mercy",
                route: "novena"
            },
            {
                id: 2,
                name: "Three O'Clock Hour Prayer",
                description: ""
            },
            {
                id: 3,
                name: "Litany of Trust in Divine Mercy",
                description: ""
            },
            {
                id: 4,
                name: "To The Divine Mercy",
                description: ""
            },
            {
                id: 5,
                name: "To the Mother of God",
                description: ""
            },
            {
                id: 6,
                name: "To Be Transformed into Mercy",
                description: ""
            },
            {
                id: 7,
                name: "In Thanksgiving",
                description: ""
            },
            {
                id: 8,
                name: "For the Intercession of St. Faustina",
                description: ""
            },
            {
                id: 9,
                name: "Eternal God of Endless Mercy",
                description: ""
            },
            {
                id: 10,
                name: "Divine Mercy Prayer Book",
                route: "novena-resources"
            }
        ),
        novena: new Array<TextItem>(
            {
                id: 1,
                name: "Schedule Novena Notification",
                route: "novena-schedule"
            },
            {
                id: 2,
                name: "Day 1",
                description: ""
            },
            {
                id: 3,
                name: "Day 2",
                description: ""
            },
            {
                id: 4,
                name: "Day 3",
                description: ""
            },
            {
                id: 5,
                name: "Day 4",
                description: ""
            },
            {
                id: 6,
                name: "Day 5",
                description: ""
            },
            {
                id: 7,
                name: "Day 6",
                description: ""
            },
            {
                id: 8,
                name: "Day 7",
                description: ""
            },
            {
                id: 9,
                name: "Day 8",
                description: ""
            },
            {
                id: 10,
                name: "Day 9",
                description: ""
            }
        )
    };

    private resourceItems = {
        faustina: new Array<ResourceItem>(
            {
                id: 0,
                name: "Faustina, Saint for Our Times",
                subtitle: "A Personal Look at Her Life, Spirituality, and Legacy",
                author: "Rev. George Kosicki, CSB with David C. Came",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            },
            {
                id: 1,
                name: "Faustina, Saint for Our Times 2",
                subtitle: "A Personal Look at Her Life, Spirituality, and Legacy",
                author: "Rev. George Kosicki, CSB with David C. Came",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            }
        ),
        "mercy-popes": new Array<ResourceItem>(
            {
                id: 0,
                name: "Rich in Mercy",
                subtitle: "",
                author: "",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            },
            {
                id: 1,
                name: "Pope Benedict's Divine Mercy Mandate",
                subtitle: "",
                author: "David C. Came",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            }
        ),
        diary: new Array<ResourceItem>(
            {
                id: 1,
                name: "Diary of St. Maria Faustina Kowalska",
                subtitle: "",
                author: "",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            }
        ),
        resources: new Array<ResourceItem>(
            {
                id: 1,
                name: "33 Days to Merciful Love",
                subtitle: "",
                author: "Fr. Michael Gaitley, MIC",
                image: "image-1",
                description: "bla bla",
                link: "link-1"
            }
        ),
        "prayer-book": new Array<ResourceItem>(
            {
                id: 1,
                name: "Praying with St. Maria Faustina",
                subtitle: "A Treasury of Prayers from the Diary of St. Maria Faustina",
                author: "Colleen Free and Rev. George W. Kosicki, CSB",
                image: "image-1",
                description: "Nearly 150...",
                link: "link-1"
            }
        )
    };

    getTextItems(page: string): Array<TextItem> {
        return this.textItems[page];
    }

    getTextItem(page: string, id: number): TextItem {
        return this.textItems[page].filter((item) => item.id === id)[0];
    }

    getResourceItems(page: string): Array<ResourceItem> {
        return this.resourceItems[page];
    }

    getResourceItem(page: string, id: number): ResourceItem {
        return this.resourceItems[page].filter((item) => item.id === id)[0];
    }

}
