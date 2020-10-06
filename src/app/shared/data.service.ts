import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

export interface ArticleItem {
    title: string;
    image: string;
    path: string;
    body: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {
    // tslint:disable: member-ordering

    // TODO: attempt to get data from server;
    // if not available, use this hard-coded data

    private serverUrl = "https://api-dev.marian.org/fetch";
    private headers = new HttpHeaders().set("Content-Type", "application/json");

    constructor(private http: HttpClient) { }

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
                id: 0,
                name: "Schedule Novena Notification",
                route: "novena-schedule"
            },
            {
                id: 1,
                name: "Day 1",
                description: "1"
            },
            {
                id: 2,
                name: "Day 2",
                description: "2"
            },
            {
                id: 3,
                name: "Day 3",
                description: "3"
            },
            {
                id: 4,
                name: "Day 4",
                description: "4"
            },
            {
                id: 5,
                name: "Day 5",
                description: "5"
            },
            {
                id: 6,
                name: "Day 6",
                description: "6"
            },
            {
                id: 7,
                name: "Day 7",
                description: "7"
            },
            {
                id: 8,
                name: "Day 8",
                description: "8"
            },
            {
                id: 9,
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
                description: "This Divine Mercy app was designed and developed by the Marian Fathers of the Immaculate Conception in Stockbridge, MA."
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
        ),
        chaplet: new Array<TextItem>(
            {
                id: 1,
                name: "Make the Sign of the Cross",
                description: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
            },
            {
                id: 2,
                name: "Optional Opening Prayers",
                description: "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.\n\n(3x) O Blood and Water, which gushed forth from the Heart of Jesus as a fount of Mercy for us, I trust in You!"
            },
            {
                id: 3,
                name: "Our Father",
                description: "Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen."
            },
            {
                id: 4,
                name: "Hail Mary",
                description: "Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death, Amen."
            },
            {
                id: 5,
                name: "The Apostle's Creed",
                description: "I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; He descended into Hell; the third day He arose again from the dead; He ascended into Heaven, and is seated at the right hand of God, the Father Almighty; from there He will come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen."
            },
            {
                id: 6,
                name: "The Eternal Father",
                description: "Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world."
            },
            {
                id: 7,
                name: "",
                description: "For the sake of His sorrowful Passion, have mercy on us and on the whole world."
            },
            {
                id: 8,
                name: "Closing Prayers",
                description: "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.\n\n\nOptional Closing Prayer\n\nEternal God, in whom mercy is endless and the treasury of compassion — inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself."
            }
        ),
        stations: new Array<TextItem>(
            {
                id: 0,
                name: "I: Jesus is Condemned to Death",
                description: "Merciful Lord, my Master, I want to follow You faithfully. I want to imitate You in my life in an ever more perfect way. That is why I ask that by meditating on Your Passion, You would grant me the grace of a deeper understanding of the mysteries of the spiritual life. \n\n Mary, Mother of Mercy, always faithful to Christ, lead me in the footsteps of the sorrowful Passion of your Son and ask for me the necessary graces for a fruitful making of this Way of the Cross. \n\nWe adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThe chief priests and the entire Sanhedrin kept trying to obtain false testimony against Jesus in order to put Him to death, but they found none, though many false witnesses came forward (Matthew 26:59-60). \n\n<b>(Jesus) Do not be surprised that you are sometimes unjustly accused. I Myself first drank this cup of undeserved suffering for love of you (289). When I was before Herod, I obtained a grace for you; namely, that you would be able to rise above human scorn and follow faithfully in My footsteps (1164). </b>\n\n<i>(Saint Faustina) We are sensitive to words and quickly want to answer back, without taking any regard as to whether it is God's will that we should speak. A silent soul is strong; no adversities will harm it if it perseveres in silence. The silent soul is capable of attaining the closest union with God (477).</i>\n\nMerciful Jesus, help me to know how to accept every human judgment and do not allow me ever to render a condemnatory judgment on You in my neighbors. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us.<p style=\"font-size:80%;margin-top:10px;\">Swipe left on the image to advance."
            },

            {
                id: 1,
                name: "II: Jesus takes up His Cross",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThen Pilate took Jesus and had Him scourged. And the soldiers wove a crown out of thorns and placed it on His head, and clothed Him in a purple cloak, and they came to Him and said, \"Hail, King of the Jews!\" So Jesus came out, wearing the crown of thorns and the purple cloak. And Pilate said to them, \"Behold, the man!\" When the chief priests and the guards saw Him they cried out, \"Crucify Him, crucify Him!\" (John 19:1-6). \n\n<b>(Jesus) Do not be afraid of sufferings; I am with you (151). The more you will come to love suffering, the purer your love for Me will be (279). </b>\n\n<i>(Saint Faustina) Jesus, I thank You for the little daily crosses, for opposition to my endeavors, for the hardships of communal life, for the misinterpretation of my intentions, for humiliations at the hands of others, for the harsh way in which we are treated, for false suspicions, for poor health and loss of strength, for self-denial, for dying to myself, for lack of recognition in everything, for the upsetting of all my plans. (343).</i> \n\nMerciful Jesus, teach me to value life’s toil, sicknesses, and every suffering, and with love to carry my daily crosses. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 2,
                name: "III: Jesus falls for the first time",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nWe had all gone astray like sheep, each following his own way; But the Lord laid upon Him the guilt of us all (Isaiah 53:6, 12). \n\n<b>(Jesus) Involuntary offenses of souls do not hinder My love for them or prevent Me from uniting Myself with them. But voluntary offenses, even the smallest, obstruct My graces, and I cannot lavish My gifts on such souls (1641). </b>\n\n<i>(Saint Faustina) My Jesus, despite Your graces, I see and feel all my misery ... O my Jesus, how prone I am to evil, and this forces me to be constantly vigilant. But I do not lose heart. I trust God's grace, which abounds in the worst misery (606).</i> \n\nMerciful Lord, preserve me from every, even the tiniest but voluntary and conscious infidelity. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 3,
                name: "IV: Jesus meets His Mother",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nBehold, this child is destined for the fall and rise of many in Israel, and to be a sign that will be contradicted so that the thoughts of many hearts may be revealed. And you yourself a sword will pierce (Luke 2:34-35). \n\n<b>(Jesus) Although all the works that come into being by My will are exposed to great sufferings, consider whether any of them has been subject to greater difficulties than that work which is directly Mine &mdash; the work of Redemption. You should not worry too much about adversities. (1643). </b>\n\n<i>(Saint Faustina) I saw the Blessed Virgin, unspeakable beautiful. She held me close to herself and said to me, 'I am Mother to you all, thanks to the unfathomable mercy of God. Most pleasing to me is that soul which faithfully carries out the will of God. Be courageous. Do not fear apparent obstacles, but fix your gaze upon the Passion of my Son, and in this way you will be victorious' (449).</i> \n\nMary, Mother of Mercy, be near me always, especially in suffering as you were on your Son's way of the cross. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 4,
                name: "V: Simon Cyrene helps Jesus carry the Cross",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nAs they led Him away they took hold of a certain Simon, a Cyrenian, who was coming in from the country; and after laying the cross on him, they made him carry it behind Jesus (Luke 23:26). \n\n<b>(Jesus) Write that by day and by night My gaze is fixed upon him, and I permit these adversities in order to increase his merit. I do not reward for good results but for the patience and hardship undergone for My sake (86). </b>\n\n<i>(Saint Faustina) Jesus, You do not give a reward for the successful performance of a work, but for the good will and the labor undertaken. Therefore, I am completely at peace, even if all my undertakings and efforts should be thwarted or should come to naught. If I do all that is in my power, the rest is not my business (952).</i> \n\nJesus, my Lord, let my every thought, word, and deed be undertaken exclusively out of love for You. Keep on cleansing my intentions. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 5,
                name: "VI: Veronica wipes the face of Jesus",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nHe grew up like a sapling before him, like a shoot from the parched earth; There was in Him no stately bearing to make us look at Him, no appearance that would attract us to Him. He was spurned and avoided by men, a man of suffering, accustomed to infirmity. One of those from whom men hide their faces spurned, and we held Him in no esteem (Isaiah 53:2-3). \n\n<b>(Jesus) Know that whatever good you do to any soul, I accept it as if you had done it to Me (1768). </b>\n\n<i>(Saint Faustina) I am learning how to be good from Jesus, from Him who is goodness itself, so that I may be called a [child] of the heavenly Father (669). Great love can change small things into great ones, and it is only love which lends value to our actions (303).</i> \n\nLord Jesus, my Master, grant that my eyes, my hands, my lips and my heart may always be merciful. Transform me into mercy. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 6,
                name: "VII: Jesus falls for the second time",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nYet it was our infirmities that He bore, our sufferings that He endured, while we thought of Him as stricken, as one smitten by God and afflicted (Isaiah 53:4). \n\n<b>(Jesus) The cause of your falls is that you rely too much upon yourself and too little on Me. But let this not sadden you so much. You are dealing with the God of mercy (1488). Know that of yourself you can do nothing (639). Without special help from Me, you are not even capable of accepting My graces (738). </b>\n\n<i>(Saint Faustina) Jesus, do not leave me alone in suffering. You know, Lord, how weak I am. I am an abyss of wretchedness, I am nothingness itself; so what will be so strange if You leave me alone and I fall? (1489). So You, Jesus, must stand by me constantly like a mother by a helpless child &mdash; and even more so (264).</i> \n\nMay Your grace assist me, Lord, that I may not keep falling continuously into the same faults; and when I fall, help me to rise and glorify Your mercy. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 7,
                name: "VIII: Jesus consoles the women of Jerusalem",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nA large crowd of people followed Jesus, including many women who mourned and lamented Him. Jesus turned to them and said, \"Daughters of Jerusalem, do not weep for Me; weep instead for yourselves and for your children\" (Luke 23: 27-28). \n\n<b>(Jesus) O how pleasing to Me is living faith! (1420) Tell all, that I demand that they live in the spirit of faith (353). </b>\n\n<i>(Saint Faustina) I fervently beg the Lord to strengthen my faith, so that in my drab, everyday life I will not be guided by human dispositions, but by those of the spirit. Oh, how everything drags man towards the earth! But lively faith maintains the soul in the higher regions and assigns self-love its proper place; that is to say, the lowest one (210).</i> \n\nMerciful Lord, I thank You for holy Baptism and the grace of faith. Continuously, I call: Lord, I believe, increase my faith. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 8,
                name: "IX: Jesus falls for the third time",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThough He was harshly treated, He submitted and opened not His mouth. Like a lamb led to the slaughter or a sheep before the shearers, He was silent and opened not His mouth. Oppressed and condemned, He was taken away, and who would have thought any more of His destiny? When He was cut off from the land of the living, and smitten for the sin of His people, a grave was assigned Him among the wicked and a burial place with evildoers, though He had done no wrong nor spoken any falsehood. But the Lord was pleased to crush Him in infirmity. If He gives His life as an offering for sin He shall see His decendants in a long life, and the will of the Lord shall be accomplished through Him. Because of His affliction He shall see the light in fullness of days (Isaiah 53:7-10). \n\n<b>(Jesus) My child, know that the greatest obstacles to holiness are discouragement and an exaggerated anxiety. These will deprive you of the ability to practice virtue. Do not lose heart in coming for pardon, for I am always ready to forgive you. As often as you beg for it, you glorify My mercy. (1488). </b>\n\n<i>(Saint Faustina) My Jesus, despite Your graces, I see and feel all my misery. I begin my day with battle and end it with battle. As soon as I conquer one obstacle, ten more appear to take its place. But I am not worried, because I know that this is the time of struggle, not peace (606).</i> \n\nMerciful Lord, I give over to You that which is my exclusive property, that is, my sin and my human weakness. I beg You, may my misery drown in Your unfathomable mercy. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 9,
                name: "X: Jesus is stripped of His Garments",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nWhen the soldiers had crucified Jesus, they took His clothes and divided them into four shares, a share for each soldier. They also took His tunic, but the tunic was seamless, woven in one piece from the top down. So they said to one another, \"Let's not tear it, but cast lots for it to see whose it will be,\" in order that the passage of scripture might be fulfilled (John 19:23-24). </b>\n\n<i>(Saint Faustina) Jesus was suddenly standing before me, stripped of His clothes, His body completely covered with wounds, His eyes flooded with tears and blood, His face disfigured and covered with spittle. \n\n<b>(Jesus) The bride must resemble her Betrothed. </b>\n\n<i>(Saint Faustina) I understood these words to their very depth. There is no room for doubt here. My likeness to Jesus must be through suffering and humility (268).</i> \n\nJesus, meek and humble of heart, make my heart like unto Your heart. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 10,
                name: "XI: Jesus is nailed to the Cross",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThose passing by reviled Him, shaking their heads and saying, \"You would destroy the temple and rebuild it in three days, save Yourself, if You are the Son of God, [and] come down from the cross!\" Likewise the chief priests with the scribes and elders mocked Him and said, \"He saved others; He cannot save Himself. He trusted in God; let Him deliver Him now if he wants Him. For He said, 'I am the Son of God' \" (Matthew 27:39-43). \n\n<b>(Jesus) My pupil, have great love for those who cause you suffering. Do good to those who hate you (1628). </b>\n\n<i>(Saint Faustina) O my Jesus, you know what efforts are needed to live sincerely and unaffectedly with those from whom our nature flees, or with those who, deliberately or not, have made us suffer. Humanly speaking, this is impossible. At such times more than at others, I try to discover the Lord Jesus in such a person and for the same Jesus, I do everything for such people (766).</i> \n\nO purest Love, rule in all Your plenitude in my heart and help me to do Your holy will most faithfully (328). \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 11,
                name: "XII: Jesus dies on the Cross",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nBut when they came to Jesus and saw that He was already dead, they did not break His legs, but one soldier thrust his lance into His side, and immediately blood and water flowed out (John 19:33-40). \n\n<b>(Jesus) All this is for the salvation of souls. Consider well, My daughter, what you are doing for their salvation (1184). </b>\n\n<i>(Saint Faustina) Then I saw the Lord Jesus nailed to the cross. When He had hung on it for a while, I saw a multitude of souls crucified like Him. Then I saw a second multitude of souls, and a third. The second multitude were not nailed to [their] crosses, but were holding them firmly in their hands. The third were neither nailed to [their] crosses nor holding them firmly in their hands, but were dragging [their] crosses behind them and were discontent.</i> \n\n<b>(Jesus) Do you see these souls? Those who are like Me in the pain and contempt they suffer will be like Me also in glory. And those who resemble Me less in pain and contempt will also bear less resemblance to Me in glory (446).</b> \n\nJesus, my Savior, hide me in the depth of Your heart that, fortified by Your grace, I may be able to resemble You in the love of the Cross and have a share in Your glory. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 12,
                name: "XIII: Jesus is laid in the arms of His Mother",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThe centurion who witnessed what had happened glorified God and said, \"This man was innocent beyond doubt.\" When all the people who had gathered for this spectacle saw what had happened, they returned home beating their breasts; but all His acquaintances stood at a distance, including the women who had followed Him from Galilee, and saw these events (Luke 23:47-49). \n\n<b>(Jesus) Most dear to Me is the soul that strongly believes in My goodness and has complete trust in Me. I heap My confidence upon it and give it all it asks (453). </b>\n\n<i>(Saint Faustina) I fly to Your mercy, Compassionate God, who alone are good. Although my misery is great, and my offenses are many, I trust in Your mercy, because You are the God of mercy; and, from time immemorial, it has never been heard of, nor do heaven or earth remember, that a soul trusting in Your mercy has been disappointed (1730).</i> \n\nMerciful Jesus, daily increase my trust in Your mercy that always and everywhere I may give witness to Your boundless goodness and love. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us."
            },
            {
                id: 13,
                name: "XIV: Jesus is laid in the tomb",
                description: "We adore You, O Christ, and we praise You. \n\nBecause by Your holy Cross and Resurrection, You have redeemed the world. \n\nThey took the body of Jesus and bound It with burial cloths along with the spices, according to the Jewish burial custom. Now in the place where He had been crucified there was a garden, and in the garden a new tomb, in which no one had yet been buried. So they laid Jesus there because of the Jewish preparation day; for the tomb was close by (John 19:38-42). \n\n<b>(Jesus) But child, you are not yet in your homeland; so go, fortified by My grace, and fight for My kingdom in human souls; fight as a king's child would; and remember that the days of your exile will pass quickly, and with them the possibility of earning merit for heaven. I expect from you, My child, a great number of souls who will glorify My mercy for all eternity (1489). </b>\n\n<i>(Saint Faustina) Every soul You have entrusted to me, Jesus, I will try to aid with prayer and sacrifice, so that Your grace can work in them. O great lover of souls, my Jesus, I thank You for this immense confidence with which You have deigned to place souls in our care (245).</i> \n\nGrant, Merciful Lord, that not even one of those souls which You have entrusted to me be lost. \n\nYou, who suffered wounds for us, Christ Jesus, have mercy on us. \n\nMy Jesus, my only hope, I thank You for this book which You opened to the eyes of my soul. This book is Your Passion, undertaken out of love for me. From this book, I learn how to love God and souls. This book contains inexhaustible treasures. O Jesus, how few souls understand You in Your martyrdom of love. Happy the soul that has come to understand the love of the heart of Jesus!"
            }
        ),
        hour: new Array<TextItem>(
            {
                id: 0,
                description: "A"
            },
            {
                id: 1,
                description: "B"
            },
            {
                id: 2,
                description: "C"
            },
            {
                id: 3,
                description: "D"
            },
            {
                id: 4,
                description: "E"
            },
            {
                id: 5,
                description: "F"
            },
            {
                id: 6,
                description: "G"
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

    postData(data: any) {

        return this.http.post(
            this.serverUrl,
            data,
            { headers: this.headers }
        );
    }

    getData(params = null) {
        let queryString = "";
        const queryArray = [];
        if (params) {
            for (const property in params) {
                if (property) {
                    queryArray.push(property + "=" + params[property]);
                }
            }
            if (queryArray.length > 0) {
                queryString += "?" + queryArray.join("&");
            }
        }

        return this.http.get(
            this.serverUrl + queryString,
            { headers: this.headers }
        );
    }

    // getNewsArticles() {
    //     return this.postData(
    //         { fetchCode: "tdm-articles-news" }
    //     );
    // }

    getNewsArticles() {
        return this.getData({
            fetchCode: "tdm-articles-news",
            truncateBody: 200,
            plainTextBody: true,
            imageStyle: "3-wide_teaser_image"
        });
    }

}
