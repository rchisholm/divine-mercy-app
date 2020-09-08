import { Injectable } from "@angular/core";

export interface TextItem {
    id: number;
    name?: string;
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
                description: "<b>bold</b> Description for Item 1"
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
        faustina_life_short: new Array<TextItem>(
            {
                id: 1,
                description: "Helena Kowalska..."
            }
        ),
        faustina_life_long: new Array<TextItem>(
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
        mercy_popes: new Array<TextItem>(
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
        diary_themes: new Array<TextItem>(
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
        novena_prayers: new Array<TextItem>(
            {
                id: 1,
                name: "Novena to Divine Mercy",
                route: "novena"
            },
            {
                id: 2,
                name: "Three O'Clock Hour Prayer",
                description: "a"
            },
            {
                id: 3,
                name: "Litany of Trust in Divine Mercy",
                description: "b"
            },
            {
                id: 4,
                name: "To The Divine Mercy",
                description: "c"
            },
            {
                id: 5,
                name: "To the Mother of God",
                description: "d"
            },
            {
                id: 6,
                name: "To Be Transformed into Mercy",
                description: "<b>e</b>"
            },
            {
                id: 7,
                name: "In Thanksgiving",
                description: "f"
            },
            {
                id: 8,
                name: "For the Intercession of St. Faustina",
                description: "g"
            },
            {
                id: 9,
                name: "Eternal God of Endless Mercy",
                description: "h"
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
                description: "1"
            },
            {
                id: 3,
                name: "Day 2",
                description: "2"
            },
            {
                id: 4,
                name: "Day 3",
                description: "3"
            },
            {
                id: 5,
                name: "Day 4",
                description: "4"
            },
            {
                id: 6,
                name: "Day 5",
                description: "5"
            },
            {
                id: 7,
                name: "Day 6",
                description: "6"
            },
            {
                id: 8,
                name: "Day 7",
                description: "7"
            },
            {
                id: 9,
                name: "Day 8",
                description: "8"
            },
            {
                id: 10,
                name: "Day 9",
                description: "9"
            }
        ),
        marians: new Array<TextItem>(
            {
                id: 1,
                name: "Who are the Marians?",
                route: "marians-who"
            },
            {
                id: 2,
                name: "Meet the Marians",
                route: "marians-meet"
            },
            {
                id: 3,
                name: "Vocation Information",
                route: "marians-vocation"
            },
            {
                id: 4,
                name: "Mercy Parish Missions",
                route: "marians-missions"
            },
            {
                id: 5,
                name: "Support the Marians",
                route: "marians-support"
            }
        ),
        marians_who: new Array<TextItem>(
            {
                id: 1,
                description: "The Congregation..."
            }
        ),
        marians_meet: new Array<TextItem>(
            {
                id: 1,
                description: "The U.S. Province..."
            }
        ),
        marians_vocation: new Array<TextItem>(
            {
                id: 1,
                description: "<b>\"I'm so glad you're here.\"</b>"
            }
        ),
        marians_missions: new Array<TextItem>(
            {
                id: 1,
                description: "Interested..."
            }
        ),
        marians_support: new Array<TextItem>(
            {
                id: 1,
                description: "There are three..."
            }
        ),
        shrine: new Array<TextItem>(
            {
                id: 1,
                name: "About The Shrine",
                route: "shrine-about"
            },
            {
                id: 2,
                name: "Calendar of Events",
                route: "shrine-calendar"
            },
            {
                id: 3,
                name: "Shrine Tours and Pilgrimages",
                route: "shrine-tours"
            },
            {
                id: 4,
                name: "Guest House",
                route: "shrine-guest"
            },
            {
                id: 5,
                name: "Volunteer",
                route: "shrine-volunteer"
            },
            {
                id: 6,
                name: "Directions",
                route: "shrine-directions"
            },
            {
                id: 7,
                name: "Contact Us on Eden Hill",
                route: "shrine-contact"
            }
        ),
        shrine_about: new Array<TextItem>(
            {
                id: 1,
                description: "The National..."
            }
        ),
        shrine_calendar: new Array<TextItem>(
            {
                id: 1,
                description: "Our calendar..."
            }
        ),
        shrine_tours: new Array<TextItem>(
            {
                id: 1,
                description: "The National..."
            }
        ),
        shrine_guest: new Array<TextItem>(
            {
                id: 1,
                description: "Overnight stays..."
            }
        ),
        shrine_volunteer: new Array<TextItem>(
            {
                id: 1,
                description: "<b>The National Shrine Needs You!</b>"
            }
        ),
        shrine_directions: new Array<TextItem>(
            {
                id: 1,
                description: "<b>GPS Directions</b>"
            }
        ),
        shrine_contact: new Array<TextItem>(
            {
                id: 1,
                description: "<b>National Shrine...</b>"
            }
        ),
        apostolates: new Array<TextItem>(
            {
                id: 1,
                name: "What-are the Divine Mercy Apostolates?",
                route: "apostolates-what"
            },
            {
                id: 2,
                name: "John Paul II Institute of Divine Mercy",
                route: "apostolates-jpii"
            },
            {
                id: 3,
                name: "Eucharistic Apostles of Divine Mercy",
                route: "apostolates-eadm"
            },
            {
                id: 4,
                name: "Mother of Mercy Messengers (MOMM)",
                route: "apostolates-momm"
            },
            {
                id: 5,
                name: "Healthcare Professionals for Divine Mercy",
                route: "apostolates-hpdm"
            }
        ),
        apostolates_what: new Array<TextItem>(
            {
                id: 1,
                description: "Four unique..."
            }
        ),
        apostolates_jpii: new Array<TextItem>(
            {
                id: 1,
                description: "Founded in 1966..."
            }
        ),
        apostolates_eadm: new Array<TextItem>(
            {
                id: 1,
                description: "The Eucharistic..."
            }
        ),
        apostolates_momm: new Array<TextItem>(
            {
                id: 1,
                description: "Want the Divine..."
            }
        ),
        apostolates_hpdm: new Array<TextItem>(
            {
                id: 1,
                description: "Healthcare Professionals..."
            }
        ),
        about: new Array<TextItem>(
            {
                id: 1,
                description: "This Divine Mercy app was designed and developed by the Marian Fathers of the Immaculate Conception in Stockbridge, MA"
            },
            {
                id: 2,
                description: "For more information on Divine Mercy, visit our website:"
            },
            {
                id: 3,
                description: "To support the Marians and their good works, such as spreading the Message of Divine Mercy, please donate by..."
            },
            {
                id: 4,
                description: "postal mail: Marian Helper's Center, Eden Hill, Stockbridge, MA 01263, or"
            },
            {
                id: 5,
                description: "Also, please help the Marians spread the message of Divine Mercy by telling your friends and family about this FREE app and writing a review in the app store."
            },
            {
                id: 6,
                description: "<i>This app and its contents copyright 2020 Marian Fathers of the Immaculate Conception of the B.V.M. All rights reserved."
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
        mercy_popes: new Array<ResourceItem>(
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
        prayer_book: new Array<ResourceItem>(
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
