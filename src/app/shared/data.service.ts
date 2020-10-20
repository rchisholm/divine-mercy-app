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

    private serverUrl = "https://api-dev.marian.org/fetch/";
    private headers = new HttpHeaders().set("Content-Type", "application/json");

    constructor(private http: HttpClient) { }

    private textItems = {
        introduction: new Array<TextItem>(
            {
                id: 1,
                name: "What is Mercy?",
                description: "<p>Before looking at what <em>Divine</em> Mercy is, let's start with mercy itself.</p><p>Pope John Paul II calls mercy \"love's second name.\" It's a particular mode of love when it encounters poverty, injustice, suffering, and sin. Mercy is compassionate love.</p><p>Mercy usually shows itself as two movements: \"heart\" and \"arms.\" The first movement is one of <em>the heart</em>. In other words, when we see someone who is suffering, our heart is moved with pity for that person. In fact, when the suffering of the other is particularly great, it's not just our heart that's moved, but the feeling of compassion reaches deep down into our guts.</p><p>The second movement of mercy is a movement of <em>the arms</em>. In other words, after we feel compassion for someone, we often find ourselves reaching out to help them, reaching out to alleviate their suffering. For instance, when we see a friend who is weighed down with grief, we often reach out to embrace and comfort him.</p><p>So, mercy is to feel compassion at the suffering of others and to reach out to help them.</p>"
            },
            {
                id: 2,
                name: "What is Divine Mercy?",
                description: "<p>Divine Mercy is God's love for those who suffer, a love that reaches all the way back to the creation of the universe. How is creation a response to suffering? According to St. Thomas Aquinas, one of the greatest sufferings is not to exist. Thus, in creating, God lovingly relieved all creation of its suffering from non-existence.</p><p>Of course, there are many other kinds of suffering than not existing. The greatest suffering, even greater than the suffering of not existing, is sin and its punishment, eternal death. To save us from sin and death, God established a covenant with his chosen people, the Jews, and revealed Himself to them and to us as a God of mercy. In fact, God's revelation of Himself to Moses prompted the leader of the Exodus to proclaim, \"Yahweh, Yahweh, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness\" (Ex 34:5-6). Then, when the fullness of time came, God's greatest act of mercy was to send His only begotten Son to become man and suffer death for fallen humanity. Thus, Jesus Christ is Divine Mercy Incarnate. He is Mercy. He is The Divine Mercy.</p><p>All that Jesus does for us and our salvation is mercy. His sacrifice on the Cross, made present in an unbloody way at every Mass, has the power not only to cleanse us of sin but to raise us up to share in God's own divine life. (See 2 Peter 1:4.) To receive this wondrous mercy, we simply need to be baptized, repent of our sins, and believe in Jesus Christ. This truly is the Gospel, the \"good news.\" As the<em> Catechism of the Catholic Church</em> teaches, \"The Gospel is the revelation in Jesus Christ of God's mercy to sinners\" (#1846).</p><p>For more information, read <a href=\"http://thedivinemercy.org/news/story.php?NID=2985\">\"What Does 'Divine Mercy' Actually Mean?\" By Dr. Robert Stackpole</a>.</p>"
            },
            {
                id: 3,
                name: "What is the Message of Divine Mercy?",
                description: "<p>What is popularly known as the Divine Mercy message and devotion is probably the largest grassroots movement in the history of the Catholic Church. It began in Poland with a seemingly ordinary nun, who lived at the beginning of the 20th century. Her name is St. Maria Faustina Kowalska.</p><p>Like St. Margaret Mary Alacoque before her, St. Faustina received visions from Jesus Christ that revealed the unfathomable mercy of His Heart. In obedience to her spiritual director, she recorded these revelations in a diary, which is now the main source for the modern message of Divine Mercy, a message that does not contradict the teachings of Sacred Scripture and the Catholic Church but reaffirms and reiterates them. Jesus chose to reemphasize the truth of His mercy in our time, because, as Pope John Paul II pointed out, the modern world is in such great need of mercy.</p><p>Five forms of devotion go with the message of Divine Mercy. (You can learn more about them in \"The Devotion\" section of this app.) These five forms are easy to remember. All you have to do is keep in mind one simple bird, or rather, one simple word: <em>finch.</em></p><i><p><strong>F</strong> = Feast of Mercy<br /><strong>I </strong>= Image of Divine Mercy<br /><strong>N</strong> = Novena to Divine Mercy<br /><strong>C</strong> = Chaplet<br /><strong>H</strong> = Hour of Great Mercy</p></i><p>But Divine Mercy isn't just a devotion. It's a way of life. And like the forms of the Divine Mercy devotion, the spirituality of Divine Mercy is also easy to remember. All you have to do is keep in mind your ABCs:</p><i><p><strong>A</strong> = Ask for mercy.<br /><strong>B</strong> = Be merciful in deed, word, and prayer.<br /><strong>C</strong> = Completely trust in Jesus.</p></i><p>Let's look at these mercy ABC's more closely.</p><p><strong>A = Ask for His Mercy</strong></p><p> Through the passion and death of Jesus, an infinite ocean of mercy was made available for all of us. But God, who created us free, will not force anything on us, not even His mercy. He waits for us to turn from our sinfulness. He tells us, \"Ask and it will be given to you, for everyone who asks receives\" (Mt 7:7, 8).</p><p>The Scriptures are filled with examples of how to trust in God and ask for His mercy: the psalms; the faith of Abraham and Moses who pleaded and \"bargained\" with God; the man who persuaded his friend to get up in the middle of the night to lend him some bread; the persistent widow who secured justice from the unjust judge; the Canaanite woman who \"argued\" with Jesus about her right to His mercy; and the witness of Mary, whose appeal for mercy at Cana led Jesus to perform His first public miracle.</p><p>Pope John Paul II echoes this scriptural message with a new urgency for our own times:</p><i><p>At no time, especially at a moment as critical as our own, can the Church forget the prayer that is a cry for the mercy of God. The Church has the right and the duty to appeal to the God of mercy \"with loud cries\" (<em>Rich in Mercy</em>,15).</p></i><p> To St. Faustina, Jesus revealed this same message once again. He gave her three new ways to ask for mercy on the strength of His passion: the Chaplet, the Novena, and prayer at three o'clock; and He taught her to transform her daily life into a continuous prayer for mercy. Through her, He calls us all to ask for His mercy:</p><i><p><strong>Souls that make an appeal to My mercy delight Me. To such souls I grant even more graces than they ask. I cannot punish even the greatest sinner if he makes an appeal to My compassion </strong>(<em>Diary</em>,1146). <strong>Beg for mercy for the whole world </strong>(570). <strong>No soul that has called upon My mercy has ever been disappointed </strong>(1541). </p></i><p><strong>B = Be merciful in deed, word, and prayer.</strong></p><p> Mercy is love that seeks to relieve the misery of others. It is an active love, poured out upon others to heal, to comfort, to console, to forgive, to remove pain. It is the love that God offers us, and it is the love He demands from us for each other: \"I give you a new commandment. As I have loved you, so you must love one another\" (Jn 13:34). \"Be merciful, even as your Father is merciful\" (Lk 6:36).</p><p>Repeatedly the Scriptures remind us that the measure we use for others is the measure God will use for us (Lk 6:38), for He will indeed \"forgive us our trespasses as we forgive those who trespass against us\" (Mt 6:12-14). \"Blessed are the merciful, for they shall obtain mercy\" (Mt 5:7), but \"judgment is without mercy to one who has shown no mercy\" (Jas 2:13). The parables of the Good Samaritan, the Rich Man and Lazarus, and the Unforgiving Servant all demonstrate this essential truth that only if we give mercy can we hope to receive it; for we will be judged on the basis of our merciful actions toward others: \"I was hungry and you gave me food\" (Mt 25:35-46).</p><p>Our Lord spoke to St. Faustina about the importance of deeds of mercy on several occasions. For instance, he said to her:</p><i><p><strong>I demand from you deeds of mercy which are to arise out of love for Me. You are to show mercy to your neighbors always and everywhere. You must not shrink from this or try to excuse yourself from it. Even the strongest faith is of no avail without works </strong>(<em>Diary, </em>742)<strong>. If a soul does not exercise mercy in some way, it will not obtain My mercy on the day of judgment </strong>(1317).</p></i><p>In His mercy, Jesus explains to St. Faustina how to exercise mercy:</p><i><p><strong>I am giving you three ways of exercising mercy toward your neighbor: the first,  by deed, the second, by word, the third, by prayer. In these three degrees is contained the fullness of mercy, and it is an unquestionable proof of love for Me. By this means a soul glorifies and pays reverence to My mercy </strong>(742).<strong></strong></p></i><p> Later, St. Faustina elaborated on these three \"degrees\" of mercy in the following passage from her <em>Diary</em>:</p><i><p>The first: the act of mercy, of whatever kind. The second: the word of mercy, if I cannot carry out a work of mercy, I will assist by my words. The third: prayer, if I cannot show mercy by deeds or words, I can always do so by prayer. My prayer reaches out even there where I cannot reach out physically (163).</p></i><p> So, how do we exercise mercy? Through our actions, our words, and our prayers, and by developing an attitude of mercy in our daily lives. Every day we can choose to respond to the people and events we encounter by immersing them in the ocean of God's mercy. And let's not forget to pray especially for the dying, remembering Jesus' words to St. Faustina:</p><i><p><strong>Pray as much as you can for the dying. By your entreaties, obtain for them trust in My mercy, because they have most need of trust, and have it the least. Be assured that the grace of eternal salvation for certain souls in their final moments depends on your prayer </strong>(1777).</p></i><p>Jesus recommended to St. Faustina to use the Chaplet of Divine Mercy to aid the dying: </p><i><p><strong>At the hour of their death, I defend as My own glory every soul that will say this Chaplet; or when others say it for a dying person, the indulgence </strong>[pardon] <strong>is the same </strong>(811).</p></i><p><strong>C = Completely trust in Jesus</strong></p><p> Trust in Jesus is the essence of the message of mercy. When we go to a public fountain, we can draw water from it as long as we have a vessel or container of some kind to put the water in. If our vessel is small, we can only bring back a little water; if it's large, we can bring back a lot. And anyone with a vessel can draw water from the fountain. The water is there for us, and no one is excluded. All we need is a vessel.</p><p>So it is with God's mercy. In repeated revelations to St. Faustina, our Divine Savior makes it clear that the fountain is His Heart, the water is His mercy, and the vessel is trust:</p><i><p><strong>I have opened My Heart as a living fountain of mercy. Let all souls draw life from it. Let them approach this sea of mercy with great trust </strong>(<em>Diary</em>, 1520). <strong>On the cross, the fountain of My mercy was opened wide by the lance for all souls--no one have I excluded! </strong>(1182). <strong>I am offering people a vessel with which they are to keep coming for graces to the fountain of mercy. That vessel is this image with the signature: \"Jesus, I trust in You\" </strong>(327). <strong>The graces of My mercy are drawn by means of one vessel only, and that is trust. The more a soul trusts, the more it will receive </strong>(1578)<strong>.</strong></p></i><p> In the <em>Diary of St. Faustina</em>,we hear our Lord reminding us that we can depend upon His love and that He alone is worthy of our trust:</p><i><p><strong>I never reject a contrite heart </strong>(1485). <strong>Sooner would heaven and earth turn into nothingness than would My mercy not embrace a trusting soul </strong>(1777).</p></i><p> But there is more to trust than just believing that God is trustworthy. We have to act upon that belief. Trust involves a turning back to God, a real conversion of our whole lives to God, repenting of our sins and forgiving others. Trust is a living faith.</p><p>Trust means that we agree to let God be God, instead of trying to be God ourselves. (Trust is the antidote to the first sin of Adam.) It means that we agree that God can write the script of our lives, instead of insisting on our own script. It means that we agree with the great pledge we make in the Our Father: \"Your will [not mine] be done on earth as it is in heaven.\" It means that even in our moments of agony we agree with the cry of Jesus in the Garden, \"Not my will, but Yours be done\" (Lk 22:42).</p><p>God is Mercy itself, and we are called to practice the ABC's of mercy. As we do, our trust in Jesus is the vital ingredient. We don't simply ask for mercy, nor do we simply try to be good to other people. We ask with complete trust, and Our Lord fills us with grace so that we can be merciful as our Heavenly Father is merciful.</p><i><p><strong>I am Love and Mercy itself. When a soul approaches Me with trust, I fill it with such an abundance of graces that it cannot contain them within itself, but radiates them to other souls </strong>(1074).</p></i>"
            },
            {
                id: 4,
                name: "Why Should We Listen to St. Faustina?",
                description: "<p>We should listen to the message of mercy that comes to us through St. Faustina because she's a prophet, recognized as such by the Church. That may be enough for you. However, if you need some more convincing, read on.</p><p>Jesus is alive and speaks to us today. Of course, He, and also the Holy Spirit, speaks to us whenever we hear or read His Word, that is, Sacred Scripture. Yet He can also speak to us in many other ways such as through people, events, and through the peace and joy He puts in our hearts. Some of the people through whom God speaks to us are the prophets. Of course, we've all heard of prophets in the Old Testament, people such as Jeremiah, Isaiah, and Ezekiel. Yet we may be surprised to learn that there have been prophets throughout the Church's history, even up to our own day. (The surprise often comes despite St. Paul's letters about the charism of prophecy in the life of the Church: See Eph 2:20; 4:11-12; 1 Cor 14:1-5, 22-25, 29-32.) In fact, even though they aren't frequently thought of as prophets, well-known saints such as Francis of Assisi, Ignatius of Loyola, Therese of Liseiux, Faustina Kowalska, and Blessed Mother Teresa of Calcutta truly had prophetic missions. In other words, they (and many other saintly people) had powerful experiences of God that they were then called to share at a given time for the strengthening of other people's faith, hope, and love. Sometimes their experiences of God came through extraordinary mystical experiences, as in the case of St. Faustina. At other times, their experiences came through the silent, hidden action of the Holy Spirit, such as in the case of St. Therese. Whatever the nature of his experience of God, if a prophet is authentic, of which only the Church has the authority to make a final, definitive determination, then his experience becomes a gift for the people of his time.</p><p>Now, St. Faustina is a powerful prophetic witness for our day. Pope John Paul II makes this point in the following excerpt from his homily on the occasion of the dedication of the Shrine of Divine Mercy in Krakow Lagiewniki on August 17, 2002:</p><i><p>Today, therefore, in this Shrine, I wish <em>solemnly to entrust the world to Divine Mercy</em>. I do so with the burning desire that the message of God's merciful love, proclaimed here through Saint Faustina, <em>may be made known to all the peoples of the earth </em>and fill their hearts with hope. May this message radiate from this place to our beloved homeland and throughout the world. May the binding promise of the Lord Jesus be fulfilled: from here there must go forth \"the spark which will prepare the world for his final coming\" (cf. <em>Diary</em>, 1732). This spark needs to be lighted by the grace of God. This fire of mercy needs to be passed on to the world. <em>In the mercy of God the world will find peace and mankind will find happiness! </em>(emphasis in original; 5).</p></i><p> Having said that the charism of prophecy has been alive and active in the life of the Church through the ages, an important point can be made: The words of post-Biblical prophets do not carry the same weight as Divine Revelation, which is communicated to us through Sacred Scripture and Sacred Tradition. Thus, we should always consider the words of prophetic saints in light of Divine Revelation and keep in mind that their words do not contain the same fullness of authority as, for instance, the words of Jesus in the Gospels or the teachings of the Magisterium of the Church. Still, the Church may decide that the prophetic testimony of a saint (or group of saints) contributes to and comprises a part of Sacred Tradition (for instance, when a saint is made a Doctor of the Church). The testimony of such a saint would then have greater weight. On this topic, it may be helpful to meditate on words from the Dogmatic Constitution on Divine Revelation, <em>Dei Verbum </em>(8) as it teaches about the role of believers in the development of Sacred Tradition:</p><i><p>This Tradition which comes from the apostles develops in the Church with the help of the Holy Spirit. For there is a growth in the understanding of the realities and the words which have been handed down. <em>This happens through the contemplation and study made by believers, who treasure these things in their hearts </em>(cf. Lk 2:19, 51), <em>through a penetrating understanding of the realities which they experience</em>, and through the preaching of those who have received through Episcopal succession the sure gift of truth. For as the centuries succeed one another, the Church constantly moves forward toward the fullness of divine truth until the words of God reach their complete fulfillment in her (emphasis added; cited from <em>The Sixteen Documents of Vatican II </em>ed. Marianne Lorraine Trouve. Boston: Pauline Books and Media, 1999).</p></i><p>For an excellent and thorough study of prophecy and its role in the life of the Church, see Niels Christian Hvidt's <em>Christian Prophecy: The Post Biblical Tradition </em>(Oxford/New York: Oxford University Press, 2007).</p>"
            },
            {
                id: 5,
                name: "Why the Marians and Divine Mercy?",
                description: "<p>This app is brought to you by the Congregation of the Marian Fathers of the Immaculate Conception of the Blessed Virgin Mary. Why the Marians? What's their connection with Divine Mercy?</p><p>The Marians of the Immaculate Conception have been promoters of the authentic message of Divine Mercy since 1941, which is barely three years after the death of St. Faustina. How this became their role is an amazing story, and it starts with St. Faustina's spiritual director, Blessed Michael Sopocko.</p><p>After her death, Fr. Sopocko had possession of Sr. Faustina's writings on Divine Mercy and desired to promote them. However, he couldn't do so in Poland because first the Soviets, and then the Nazis, had occupied the country since September 1939, just a year after Faustina's death. So, when Fr. Sopocko heard that a young priest was going to try to escape to the U.S.A., he entrusted the young priest with some of Faustina's writings on Divine Mercy. That priest's name was Fr. Joseph Jarzebowski, and he belonged to the Congregation of Marian Fathers of the Immaculate Conception.</p><p>Fr. Joseph entrusted himself and his mission to The Divine Mercy, and he vowed to spend the rest of his life spreading the mercy message and devotion if he were to reach safety. His daring journey took him through the desolate wastelands of Russia, the rice fields of Japan, and finally on the long ocean voyage across the Pacific to Seattle. From Seattle, without speaking a word of English, Fr. Joseph made his way across the U.S.A. to Washington, D.C., where a Marian house had been founded in 1922.</p><p>When the Marian community in Washington, D.C., learned about Fr. Joseph's amazing journey, they believed him when he exclaimed that it was a miracle of Divine Mercy. At Fr. Joseph's prompting, the Marian community in D.C., with the help of Felician Sisters, began to publish and distribute the message of Divine Mercy.</p><p>The message spread quickly. Eventually, the Marians' little publishing operation in D.C. couldn't keep up with the huge demand for Divine Mercy materials. Moreover, the community was rapidly growing. So, one of the Marians, Fr. Walter Pelczynski, organized the purchase of a property for the Marian community on Eden Hill in Stockbridge, MA, and founded the Mercy of God Apostolate. From Eden Hill, that Mercy of God Apostolate, which later became the Association of Marian Helpers, spread the message of Divine Mercy throughout the world. Also, in 1950, the Marians began construction of a beautiful Shrine to Divine Mercy.</p><p>In 1959, the Vatican banned the message of Divine Mercy because of a faulty translation and lack of original documents. This was a time of great suffering for the Marian community as they experienced persecution due to their previous efforts to spread the message. Being obedient to the Church, they destroyed or locked up all of their Divine Mercy materials associated with Sr. Faustina. Then, in 1978, when the Vatican was able to examine Sr. Faustina's original writings, Pope Paul VI lifted the ban and the Marians continued right where they had left off. One of their priests, Fr. Seraphim Michalenko, was particularly zealous for Divine Mercy. Through his initiative, the entire <em>Diary of St. Faustina</em> was translated into English and published in both English and Polish. Furthermore, Fr. Michalenko was instrumental in the canonization cause of Faustina, who was declared the first saint of the new millennium by Pope John Paul II on April 30, 2000. </p><p>To date, the Marians of the Immaculate Conception have published nearly one million copies of the <em>Diary of St. Faustina </em>and about 200 million pamphlets and holy cards on the message of Divine Mercy. More than anyone, they have helped fuel \"the greatest grassroots movement in the history of the Church,\" the spread of the beautiful message of God's merciful love. And now, they are pleased to bring the fullness of that message to mobile devices. Their hope and prayer is that this app will help everyone who uses it to draw closer to the merciful Heart of Jesus.</p>"
            }
        ),

        timeline: new Array<TextItem>(
            {
                id: 1,
                name: "timeline 1",
                description: "<em>The main events of the life of St. Faustina Kowalska, her cause of beatification and canonization, and her ongoing mission of mercy in our time:</em></p><p><u><h2 style='text-align:center; margin:0; padding:0'>1900s</h2></u></p><p><strong>AUGUST 25, 1905: </strong>Sister Faustina is born Helen Kowalska in the village of Glogowiec, near Lodz, Poland.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1910s</h2></u></p><p><strong>1912: </strong>At the age of seven, Helen hears for the first time a voice in her soul, calling her to a more perfect way of life.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1920s</h2></u></p><p><strong>JUNE 19-25, 1925: </strong>At the age of 20, during the Octave of Corpus Christi, Helen makes a vow of perpetual chastity.</p><p><strong>AUGUST 1, 1925: </strong>Helen is accepted into the Congregation of the Sisters of Our Lady of Mercy as a lay sister. She begins her postulancy at Warsaw and then leaves for Krakow to complete it.</p><p><strong>APRIL 30, 1926: </strong>Helen begins her two-year novitiate in Krakow, receiving her religious habit and the name Maria Faustina.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1930s</h2></u></p><p><strong>FEBRUARY 22, 1931: </strong>Sister Faustina sees the Lord Jesus dressed in a white robe. Red and pale rays stream forth from the area of His Heart. <strong>Paint an image, He tells her, according to the pattern you see, bearing the signature, \"Jesus, I trust in You.\"</strong></p><p><strong>JANUARY 2, 1934: </strong>Sister Faustina meets with the artist Eugene Kazimirowski, who, through Fr. Michael Sopocko (her spiritual director and confessor), has been commissioned to paint the image of The Divine Mercy.</p><p><strong>JUNE 1934: </strong>The Kazimirowski painting is completed. Sister Faustina is disappointed with it and cries to the Lord, \"Who will paint You as beautiful as You are?\" In reply, she hears the words, <strong>Not in the beauty of the color nor of the brush lies the greatness of this image, but in My grace </strong>(<em>Diary</em>, 313). The painting is hung in the corridor of the Bernardine Sisters' Convent near St. Michael's Church in Vilnius, where Fr. Sopocko is rector.</p><p><strong>JULY 1934: </strong>Following the instructions of her spiritual director (Fr. Sopocko), Sr. Faustina begins keeping a personal diary, which she entitles <em>Divine Mercy in My Soul</em>.</p><p><strong>AUGUST 1934: </strong>Sister Faustina suffers a violent attack of asthma for the first time, perhaps already due to tuberculosis, which is to cause her almost constant suffering for the few remaining years of her life.</p><p><strong>OCTOBER 26, 1934: </strong>Sister Faustina sees the Lord Jesus above the chapel in Vilnius, with the same red and pale rays coming from the area of His Heart. The rays envelop the chapel and the students' infirmary, and then spread out over the whole world.</p><p><strong>APRIL 26-28, 1935: </strong>During the celebration concluding the Jubilee Year of the Redemption of the world, the Kazimirowski image of The Divine Mercy is transferred to Ostra Brama (Shrine of Our Lady of Mercy in Vilnius) and placed in a high window so it may be seen from far away. This event coincides with the Second Sunday of Easter, which, according to Sister Faustina, is to be celebrated as the Feast of Divine Mercy. Father Sopocko delivers a homily about The Divine Mercy.</p><p><strong>JANUARY 8, 1936: </strong>Sister Faustina visits Bishop Romuald Jalbrzykowski and tells him that Jesus has asked for a new congregation to be founded.</p><p><strong>OCTOBER 5, 1936: </strong>Father Sopocko writes to Sr. Faustina, asking for the texts of the Chaplet and the Novena to The Divine Mercy.</p><p><strong>DECEMBER 9, 1936: </strong>With her health deteriorating, Sr. Faustina is sent to the hospital in Pradnik, a sanatorium in Krakow for tuberculosis patients. Except for a few days during the Christmas season, she remains there until March 27, 1937.</p><p><strong>DECEMBER 13, 1936: </strong>Under the appearance of her confessor, Jesus Himself hears Sr. Faustina's confession.</p><p><strong>APRIL 4, 1937: </strong>Father Sopocko publishes an article on The Divine Mercy in the <em>Vilnius Catholic Weekly</em>.</p><p><strong>APRIL 4, 1937: </strong>By permission of Archbishop Romuald Jalbrzykowski, the Kazmirowski image is blessed and placed in St. Michael's Church in Vilnius.</p><p><strong>SEPTEMBER 27, 1937: </strong>Sister Faustina and Mother Irene meet with the printer who is to print holy cards bearing the image of The Divine Mercy.</p><p><strong>NOVEMBER 1937: </strong>Through the efforts of Fr. Sopocko, the Litany, Chaplet, and Novena to The Divine Mercy are published by the J. Cebulski Press in Krakow in a pamphlet entitled \"Christ, King of Mercy.\" On the cover of the pamphlet is a color picture representing the merciful Christ with the signature, \"Jesus, I trust in You.\" Holy cards, bearing a copy of Kazimirowski's image of The Divine Mercy on the front, and the chaplet on the back, are also printed by Cebulski.</p><p><strong>NOVEMBER 10, 1937: </strong>Sister Faustina and Mother Superior Irene look over the pamphlet containing the Litany, Chaplet, and Novena, to The Divine Mercy, and the Lord tells Sr. Faustina that many souls have already been drawn to Him through the image.</p><p><strong>APRIL 21, 1938: </strong>Suffering greatly from tuberculosis, Sr. Faustina leaves the convent for her final, five-month stay at the sanatorium in Pradnik.</p><p><strong>APRIL 22-MAY 6, 1938: </strong>For 14 days, at the sanatorium in Pradnik, Sr. Faustina receives Holy Communion from an angel.</p><p><strong>JUNE 24, 1938: </strong>Sister Faustina sees the Sacred Heart of Jesus in the sky in the midst of a great brilliance. Rays are streaming from the wound in His side and spreading out over the entire world.</p><p><strong>JUNE 1938: </strong>She stops writing the <em>Diary </em>due to illness.</p><p><strong>SEPTEMBER 2, 1938: </strong>Father Sopocko visits her at the sanatorium in Pradnik and discovers her in ecstasy.</p><p><strong>SEPTEMBER 26, 1938: </strong>Father Sopocko visits her in Krakow for the last time and notes that \"she looked like an unearthly being, I no longer had the slightest doubt that what she had written in her <em>Diary </em>about receiving Holy Communion from an angel was really true.\"</p><p><strong>OCTOBER 5, 1938: </strong>At 10:45 p.m., Sr. Faustina dies of tuberculosis in Krakow, at the age of 33.</p><p><strong>OCTOBER 7, 1938: </strong>Her funeral coincides with the First Friday of the month and the Feast of Our Lady of the Rosary.</p><p><strong>SEPTEMBER 1, 1939: </strong>German tanks and planes cross the Polish frontier, and the Nazis take control of Poland. In the course of the war, the city of Warsaw, along with many other Polish cities and towns, is destroyed by incendiary and demolition bombs, an apparent fulfillment of Sr. Faustina's earlier prophecy:</p><i><p>One day Jesus told me that He would cause a chastisement to fall upon the most beautiful city in our country [probably, Warsaw]. This chastisement would be that with which God had punished Sodom and Gomorrah (<em>Diary</em>, 39).</p></i><p><u><h2 style='text-align:center; margin:0; padding:0'>1940s</h2></u></p><p><strong>SPRING, 1940: </strong>Father Joseph Jarzebowski, MIC, a Marian priest from Warsaw who had been blacklisted by the Nazi SS, hears about the devotion to The Divine Mercy at a camp in Vikomir, Lithuania.<br /><strong>JULY-SEPTEMBER 1940: </strong>Father Jarzebowski prays to The Divine Mercy to help him escape to America.</p><p><strong>FEBRUARY 25, 1941: </strong>Hearing of Fr. Jarzebowski's plan to escape, Fr. Sopocko gives him a Latin memorandum outlining the message and devotion to The Divine Mercy. Father Jarzebowski promises to do his best to keep the memorandum safe and have it printed when he reaches America. Entrusting himself and his mission to The Divine Mercy, he vows to spend the rest of his life spreading the mercy message and devotion if he reaches safety.</p><p><strong>FEBRUARY 26, 1941: </strong>Carrying a picture of the Merciful Jesus next to his heart and Fr. Sopocko's Divine Mercy memorandum in his traveling bag, Fr. Jarzebowski leaves his hiding place in Vilnius and boards an ordinary trans-Siberian train. Traveling across the whole of Russia and Siberia, he reaches Vladivostock, where the customs officer searches everything except the bag containing the memorandum. No one seems to notice that his American visa is obsolete and invalid, and he is granted Japanese transit. When he reaches Japan, he finds $30.00 and a ticket to the United States waiting for him, sent by Fr. Joseph Luniewski, MIC, of the Marians in America. The Polish embassy validates his American visa, and he leaves for the United States.</p><p><strong>MAY 1941: </strong>Father Jarzebowski lands on American soil. Full of gratitude to the mercy of God and remembering his promises to Fr. Sopocko, he begins to share the message and devotion of mercy privately. At a Detroit print shop, the first sample copies of the image are made.</p><p><strong>JUNE 1941: </strong>Asked to assist as confessor at the annual retreat for the Felician Sisters in Enfield, Connecticut, Fr. Jarzebowski speaks to the sisters about the revelations to Sr. Faustina and the essence of the message and devotion to The Divine Mercy, mentioning the special graces given to him. The sisters make a copy of his brief account, and the provincial superior donates a sum of money to have several hundred copies of the image printed.</p><p><strong>1941: </strong>At a \"house meeting\" in Washington, D.C., a tiny group of Marians decides to undertake as an apostolate the spreading of the message and devotion to The Divine Mercy, and they begin printing the first novena leaflets.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1950s</h2></u></p><p><strong>NOVEMBER 28, 1958: </strong>Sister Faustina's prophecy about the apparent destruction of the devotion to The Divine Mercy (see <em>Diary</em>, 378 and 1659) begins its fulfillment by a decree of condemnation due to incorrect translations in the Italian version of her <em>Diary</em>. The severe ban is mitigated by Pope John XXIII on March 6, 1959, to a \"Notification\" that prohibited \"the spreading of the devotion according to Sr. Faustina.\"</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1960s</h2></u></p><p><strong>OCTOBER 21, 1965: </strong>In the Archdiocese of Krakow, 27 years after the death of Faustina, Bishop Julian Groblicki, specially delegated by Archbishop Karol Wojtyla, begins the Informative Process relating to the life and virtues of Sr. Faustina. From this moment, Sr. Faustina is worthy of the title \"Servant of God.\"</p><p><strong>NOVEMBER 25, 1966: </strong>While the Informative Process relating to the virtues, writings, and devotion of the Servant of God Sr. Faustina is being conducted (October 21, 1965, to September 20, 1967), her remains are exhumed and translated to a tomb specially prepared for this purpose in the chapel of the Sisters of Our Lady of Mercy in Lagiewniki. Over the tomb is a black slab with a cross in the center. The slab usually has fresh flowers brought by the faithful, who plead for numerous graces through her intercession.</p><p><strong>JUNE 26, 1967: </strong>Archbishop Karol Wojtyla becomes Cardinal Karol Wojtyla.</p><p><strong>SEPTEMBER 20, 1967: </strong>The Archbishop of Krakow, Cardinal Karol Wojtyla, officially closes the first informative stage in the process for the beatification of the Servant of God Sr. Faustina Kowalska.</p><p><strong>JANUARY 31, 1968: </strong>By a decree of the Sacred Congregation for the Causes of Saints, the Process of Beatification of the Servant of God Sr. Faustina Kowalska is formally inaugurated.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1970s</h2></u></p><p><strong>APRIL 15, 1978: </strong>In response to inquiries from Poland, and in particular Cardinal Wojtyla, about the \"Notification\" of 1959, the Sacred Congregation for the Canonization of Saints declares the Notification is no longer binding due to the changed circumstances and the opinion of many Polish ordinaries.</p><p><strong>OCTOBER 16, 1978: </strong>Cardinal Karol Wojtyla is elected Pope John Paul II.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1980s</h2></u></p><p><strong>NOVEMBER 30, 1980: </strong>Pope John Paul II publishes his encyclical letter <em>Rich in Mercy </em>(<em>Dives in Misericordia</em>), in which he stresses that Jesus Christ has revealed God, who is \"rich in mercy,\" as the Father. He speaks of mercy as \"the most stupendous attribute of the Creator and Redeemer\" (RIM, 13).</p><p><strong>JUNE 19, 1981: </strong>The Sacred Congregation for the Causes of Saints, having completed the investigation of all available writings of the Servant of God Sr. Faustina, issues a decree stating that \"nothing stands in the way of proceeding further\" with her cause.</p><p><strong>OCTOBER 8, 1981: </strong>The Sacred Congregation for the Sacraments and Divine Worship issues a decree confirming the Latin text of a Votive Mass of The Divine Mercy for the Metropolitan Archdiocese of Krakow, Poland.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>1990s</h2></u></p><p><strong>APRIL 10, 1991: </strong>Pope John Paul II, at his general audience, speaks about Sr. Faustina, showing his great respect for her, relating her to his encyclical <em>Rich in Mercy</em>, and emphasizing her role in bringing the message of mercy to the world.</p><p><strong>MARCH 7, 1992: </strong>In the presence of the Holy Father, the Congregation for the Causes of Saints promulgates the Decree of Heroic Virtues, by which the Church acknowledges that Sr. Faustina practiced all the Christian virtues to a heroic degree. As a result, she receives the title \"Venerable\" Servant of God, and the way is opened for verification of the miracle attributed to her intercession. In that same year, the healing of Maureen Digan at the tomb of Sr. Faustina is recognized as a miracle by three separate panels appointed by the Sacred Congregation: first a panel of doctors, then of theologians, and finally, of cardinals and bishops.</p><p><strong>DECEMBER 21, 1992: </strong>The Holy Father publishes the Church's acceptance of the miracle as granted through the intercession of Sr. Faustina and announces the date for her solemn beatification.</p><p><strong>APRIL 18, 1993: </strong>St. Faustina is beatified in Rome on the Second Sunday of Easter (which our Lord has revealed to her as the \"Feast of Divine Mercy\").</p><p><strong>SEPTEMBER 4, 1993: </strong>John Paul II prays the Rosary at the Shrine of Our Lady of Mercy, Ostra Brama, in Vilnius, Lithuania, where the image of the Merciful Jesus was first displayed.</p><p><strong>SEPTEMBER 5, 1993: </strong>John Paul II kneels and prays before the image of The Divine Mercy, painted under the direction of Sr. Faustina, in the Church of the Holy Spirit, Vilnius.</p><p><strong>JANUARY 23, 1995: </strong>Pope John Paul II grants to the Polish Bishops that the Sunday after Easter be the Sunday of Divine Mercy because of the need and desire of the faithful.</p><p><strong>APRIL 23, 1995: </strong>Pope John Paul II celebrates Divine Mercy Sunday in Holy Spirit Church, the Shrine of The Divine Mercy in Rome (<em>L'Osservatore Romano</em>, English Edition, April 26, 1995). In his homily, he challenges us to \"trust in the Lord and be apostles of Divine Mercy.\" In his \"<em>Regina Caeli</em>\" address, he speaks of this Sunday as the day of thanksgiving for God's mercy, called the Sunday of Divine Mercy. He challenges us to personally experience this mercy in order to be merciful and forgive, and so \"break the spiral of violence by the <em>miracle of forgiveness</em>\" (emphasis in original).</p><p><strong>JUNE 7, 1997: </strong>Pope John Paul II makes a pilgrimage to the Shrine of The Divine Mercy in Lagiewniki (Krakow), Poland, at the convent where the relics of Sr. Faustina are honored. He says, \"The message of Divine Mercy has always been near and dear to me.\" John Paul II then goes on to highlight how Divine Mercy helped him and his compatriots in Poland endure \"the tragic experience of the Second World War,\" emphasizing, \"This was also my personal experience, which I took with me to the See of Peter and which in a sense forms the image of this Pontificate.\"</p><p><strong>NOVEMBER 20, 1999: </strong>Pope John Paul II accepts the healing of the heart of Fr. Ronald Pytel of Baltimore, Maryland, as the miracle for the canonization of then Blessed Faustina.</p><p><u><h2 style='text-align:center; margin:0; padding:0'>2000s</h2></u></p><p><strong>APRIL 30, 2000: </strong>Pope John Paul II canonizes Sr. Faustina Kowalska and proclaims Divine Mercy Sunday for the universal Church. The canonization occurs on Divine Mercy Sunday and is held in St. Peter's Square in Rome. In his homily, he repeats three times that Sr. Faustina is \"God's gift to our time.\" He also passes on the message of Divine Mercy to the new millennium. Of Divine Mercy Sunday, he says in his homily, \"It is important that we accept the whole message that comes to us on this Second Sunday of Easter, which from now on throughout the Church will be called \"Divine Mercy Sunday.\"</p><p><strong>AUGUST 17, 2002: </strong>Pope John Paul II consecrates the Basilica of The Divine Mercy in Krakow-Lagiewniki, Poland, and entrusts the World to Divine Mercy. Before he solemnly entrusts the world to Divine Mercy, Pope John Paul says, \"I do so with the burning desire that the message of God's merciful love, proclaimed here through St. Faustina, <em>may be made known to all the peoples of the earth </em>and fill their hearts with hope\" (emphasis in original).</p><p><strong>APRIL 2, 2005: </strong>Pope John Paul II dies on the Vigil of Divine Mercy Sunday. It is altogether fitting that the Great Mercy Pope who established Divine Mercy Sunday for the universal Church goes home to God on its vigil. He leaves his last annual Divine Mercy Sunday message, which is shared with the faithful in St. Peter's Square on April 3, Divine Mercy Sunday. He closes his message with this summary of The Divine Mercy message and devotion: \"Jesus, I trust in You, have mercy upon us and upon the whole world. Amen.\"</p><p><strong>APRIL 19, 2005: </strong>Cardinal Joseph Ratzinger is elected Pope and chooses the name of Benedict XVI. In his first message as Pope on April 20, Benedict XVI expresses \"deep gratitude for a gift of Divine Mercy.\" He says that he considers it \"a special grace\" obtained for him by his predecessor, John Paul II. He goes on to say of John Paul, \"I seem to feel his strong hand clasping mine; I seem to see his smiling eyes and hear his words, at this moment addressed specifically to me, \"Do not be afraid!\"</p><p><strong>MAY 2006: </strong>Pope Benedict XVI goes on pilgrimage to Poland, the homeland of John Paul II. On his pilgrimage, Pope Benedict visits the International Shrine of The Divine Mercy in Lagiewniki, Poland. He says in his general audience of May 31 of his visit there:</p><i><p>It was here in the neighboring convent that Sr. Faustina Kowalska, contemplating the shining wounds of the Risen Christ, received a message of trust for humanity which John Paul II echoed and interpreted and which really is a central message precisely for our time: Mercy as God's power, as a barrier against the evil of the world.</p></i><p><strong>APRIL 2-6, 2008: </strong>The first World Apostolic Congress on Mercy is held in the Vatican. More than 4,000 participants comprising some 200 delegations from every corner of the globe convene in Rome on April 2 for the first World Apostolic Congress on Mercy. Pope Benedict XVI inaugurates the Congress by celebrating Holy Mass in St. Peter's Square on April 2, the third anniversary of the death of John Paul II. In his homily, Pope Benedict underscores John Paul II's legacy of mercy and St. Faustina as \"a prophetic messenger of Divine Mercy\" for John Paul in helping him make sense of the \"terrible tragedies of the 20th century.\" The plenary sessions for the Congress are held in St. John Lateran Basilica, the cathedral of the Bishop of Rome, and many prominent cardinals and bishops attend the sessions. Then, at the conclusion of the Congress, on April 6, Pope Benedict gives his Divine Mercy mandate in his <em>Regina Caeli </em>message:</p><i><p>Yes, dear friends, the first World Congress on Divine Mercy ended this morning. I thank the organizers, especially the Vicariate of Rome, and to all the participants I address my cordial greeting which now becomes a mandate: <em>go forth and be witnesses of God's mercy</em>, a source of hope for every person and for the whole world. May the Risen Lord be with you always! (emphasis added).</p></i><p><strong>SEPTEMBER 28, 2008: </strong>The spiritual director and confessor of St. Faustina, Fr. Michael Sopocko is beatified in Bialystok, Poland, with an estimated 70,000 people attending. They include 100 religious sisters from 13 countries representing the Congregation of the Sisters of the Merciful Jesus, an order founded by Blessed Michael. Pope Benedict XVI addresses the assembly live by satellite feed from Castel Gandolfo, Italy, and says of Blessed Michael:</p><i><p>At his suggestion, [Sister] Faustina described her mystical experiences and apparitions of the merciful Jesus in her well-known <em>Diary</em>. Thanks to his efforts, the image with the words, \"Jesus, I trust in You\" was painted and transmitted to the world. The Servant of God became known as a zealous priest, teacher, and promoter of the Divine Mercy devotion. My beloved Predecessor, the Servant of God John Paul II most certainly rejoices in this beatification in the Father's house.</p></i><p><u><h2 style='text-align:center; margin:0; padding:0'>2010s</h2></u></p><p><strong>OCTOBER 1-5, 2011: </strong>The Second World Apostolic Congress on Mercy is held in Krakow, Poland, hosted by Cardinal Stanislaus Dziwisz, former personal secretary to Pope John Paul II, the Great Mercy Pope.</p><p><strong>APRIL 27, 2014: </strong>During the Mass for Divine Mercy Sunday, Pope Francis canonizes Popes John Paul II (the Great Mercy Pope) and John XXIII (the pope who called the ecumenical “Council of Mercy,” Vatican II) in an historic joint canonization in St. Peter’s Square, Rome.</p><p><strong>AUGUST 15-19, 2014: </strong>The Third World Apostolic Congress on Mercy is held in Bogota, Colombia, the first such Congress to be held outside of Europe.</p><p><strong>MARCH 13, 2015: </strong>Pope Francis announces that he is declaring an extraordinary Jubilee Year of Mercy, beginning December 8, 2015, the Solemnity of the Immaculate Conception, and running through November 20, 2016, the Solemnity of Christ the King.</p><p><strong>APRIL 11, 2015: </strong>Pope Francis promulgates <i>The Face of Mercy</i>, the papal bull of indiction of the extraordinary Jubilee Year, on the <i>Vigil of Divine Mercy Sunday</i>.</p><p><strong>DECEMBER 8, 2015: </strong>On the Solemnity of the Immaculate Conception, the extraordinary Jubilee Year of Mercy begins.</p>"
            }
            // {
            //     id: 2,
            //     name: "timeline 2",
            //     description: "<b>AUGUST 25, 1905:</b> Sister Faustina is born Helen Kowalska in the village Glogowiec, near Lodz, Poland."
            // },
            // {
            //     id: 3,
            //     name: "timeline 3",
            //     description: "<b>1912:</b> At the age of seven, Helen hears for first time a voice in her soul, calling her to a more perfect way of life."
            // },
            // {
            //     id: 4,
            //     name: "timeline 4",
            //     description: "..."
            // }
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
        ),
        chaplet_info: new Array<TextItem>(
            {
                id: 1,
                description: "Prayed on ordinary rosary beads..."
            }
        ),
        dmi_info: new Array<TextItem>(
            {
                id: 1,
                description: "In 1931, Our Lord..."
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

    // get static data hard-coded in the app
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

    // get live data from web service
    getLiveTextItems(page: string) {
        return this.fetchAppData({
            itemType: "text",
            itemPage: page
        });
    }

    getLiveTextItem(page: string, id: number) {
        return this.fetchAppData({
            itemType: "text",
            itemPage: page,
            itemId: id
        });
    }
    getLiveResourceItems(page: string) {
        return this.fetchAppData({
            itemType: "resource",
            itemPage: page
        });
    }

    getLiveResourceItem(page: string, id: number) {
        return this.fetchAppData({
            itemType: "resource",
            itemPage: page,
            itemId: id
        });
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

    fetchData(fetchCode: string, params: any = null) {
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
            this.serverUrl + fetchCode + queryString,
            { headers: this.headers }
        );
    }

    fetchAppData(params: any = null) {
        return this.fetchData("divine-mercy-app", params);
    }

    getNewsArticles() {
        return this.fetchData(
            "tdm-articles-news",
            {
                truncateBody: 200,
                plainTextBody: true,
                imageStyle: "3-wide_teaser_image"
            }
        );
    }

}
