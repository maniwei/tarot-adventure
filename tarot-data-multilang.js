// ==================== Tarot Card Data (78 Cards) - Multi-Language ====================
// Source: tarot-healing project
// Languages: English (en), Zulu (zu)
// Image URLs from ext.same-assets.com CDN

(function() {
    'use strict';
    
    // 78 Tarot Cards with multi-language support and external image URLs
    const tarotCards = [
        // ========== Major Arcana (22 cards) ==========
        {
            id_en: "The_Fool",
            number: 0,
            suit: "major",
            name: "The Fool",
            name_zu: "I-Fool",
            keywords: "New beginnings, adventure, freedom, unlimited potential",
            keywords_zu: "Ukuqala okusha, ukuqhakaza, inkululeko, amandla angapheli",
            imageUrl: "https://ext.same-assets.com/2618794310/340646065.jpeg",
            meaning_en: "The Fool depicts a young person embarking on a new journey, facing the unknown future with enthusiasm. Represents new beginnings, adventure, and a free spirit.",
            meaning_zu: "I-Fool ikhombisa intsha eqala uhambo olusha, ibhekene nenkambo engaziwa nokunothisa. Imele ukuqala okusha, ukuqhakaza, nomoya onkululekile.",
            upright_en: "New beginnings, innocence, spontaneity, a free spirit",
            upright_zu: "Ukuqala okusha, umsulwa, ukuziphatha ngokwamukeleka, umoya onkululekile",
            reversed_en: "Recklessness, carelessness, risk, foolishness",
            reversed_zu: "Ukungakhathali, ukuchitha isikhathi, ingozi, ubuvila",
            eastern: "The Fool resonates with Taoist 'wu wei' philosophy, reminding us to follow nature and not force things."
        },
        {
            id_en: "The_Magician",
            number: 1,
            suit: "major",
            name: "The Magician",
            name_zu: "I-Magician",
            keywords: "Creativity, skill, willpower, manifestation",
            keywords_zu: "Ukudala, iziqu, umuzwa wokuthanda, ukubonakaliswa",
            imageUrl: "https://ext.same-assets.com/2618794310/2455888245.jpeg",
            meaning_en: "The Magician stands at the altar with the tools of four elements, representing creativity, skill, and the power to manifest desires.",
            meaning_zu: "I-Magician imi phambi kwe-altare nezinsiza ezine, imele ukudala, iziqu, namandla okubonakalisa izifiso.",
            upright_en: "Manifestation, resourcefulness, power, inspired action",
            upright_zu: "Ukubonakaliswa, ukuyila, amandla, isenzo esihloswe yisibonakaliso",
            reversed_en: "Manipulation, poor planning, untapped talents",
            reversed_zu: "Ukuqhatha, ukuhlela okubi, iziphiwo ezingasetshenziswanga",
            eastern: "The Magician embodies the Buddhist concept of skillful means, using wisdom to transform circumstances."
        },
        {
            id_en: "The_High_Priestess",
            number: 2,
            suit: "major",
            name: "The High Priestess",
            name_zu: "I-High Priestess",
            keywords: "Intuition, unconscious, inner voice, insight",
            keywords_zu: "I-intuition, isiqunto, izwi elingaphakathi, ukubona ngaphakathi",
            imageUrl: "https://ext.same-assets.com/2618794310/1949324866.jpeg",
            meaning_en: "The High Priestess sits between two pillars, representing intuition, subconscious wisdom, and the mysteries of the inner world.",
            meaning_zu: "I-High Priestess ihlala phakathi kwezinsika ezimbili, imele i-intuition, ukuhlakanipha okungaphakathi, nemfihlo yomhlaba ongaphakathi.",
            upright_en: "Intuition, sacred knowledge, divine feminine, subconscious mind",
            upright_zu: "I-intuition, ulwazi olungcwele, ubunkululekazi obumvelo, ingqondo engaphansi kwesiqunto",
            reversed_en: "Secrets, disconnected from intuition, withdrawal",
            reversed_zu: "Imfihlo, ukungabhekani ne-intuition, ukuzithiba",
            eastern: "She represents the Yin principle in Eastern philosophy, the receptive and intuitive aspect of consciousness."
        },
        {
            id_en: "The_Empress",
            number: 3,
            suit: "major",
            name: "The Empress",
            name_zu: "I-Empress",
            keywords: "Abundance, nurturing, sensuality, beauty",
            keywords_zu: "Ukugcwele, ukondla, ukuzwa, ubuhle",
            imageUrl: "https://ext.same-assets.com/2618794310/4291578481.jpeg",
            meaning_en: "The Empress sits amidst abundant nature, representing fertility, creativity, maternal energy, and earthly pleasures.",
            meaning_zu: "I-Empress ihlala phakathi kwemvelo egcwele, imele ukuzala, ukudala, amandla kamama, nezintokozo zomhlaba.",
            upright_en: "Femininity, beauty, nature, nurturing, abundance",
            upright_zu: "Ubunkululekazi, ubuhle, imvelo, ukondla, ukugcwele",
            reversed_en: "Creative block, dependence on others, emptiness",
            reversed_zu: "Ithiyo lokudala, ukuthembela kwabanye, ukusha",
            eastern: "The Empress embodies the Earth element, representing groundedness and natural abundance."
        },
        {
            id_en: "The_Emperor",
            number: 4,
            suit: "major",
            name: "The Emperor",
            name_zu: "I-Emperor",
            keywords: "Authority, structure, control, leadership",
            keywords_zu: "Amandla, isakhiwo, ukulawula, ukuhola",
            imageUrl: "https://ext.same-assets.com/2618794310/1558489674.jpeg",
            meaning_en: "The Emperor sits on his throne, representing authority, structure, fatherly energy, and the establishment of order.",
            meaning_zu: "I-Emperor ihlala esihlalweni sakhe, imele amandla, isakhiwo, amandla kababa, nokumisa ukuhleleka.",
            upright_en: "Authority, establishment, structure, father figure",
            upright_zu: "Amandla, ukuhleleka, isakhiwo, isithombe sikababa",
            reversed_en: "Domination, excessive control, lack of discipline",
            reversed_zu: "Ukubusa ngamandla, ukulawula ngaphezulu, ukuntuleka isiko",
            eastern: "The Emperor represents Yang energy, the active principle of creation and order."
        },
        {
            id_en: "The_Hierophant",
            number: 5,
            suit: "major",
            name: "The Hierophant",
            name_zu: "I-Hierophant",
            keywords: "Tradition, belief, morality, spiritual guidance",
            keywords_zu: "Isiko, inkolelo, imithetho, ukuqondisa kwengqondo",
            imageUrl: "https://ext.same-assets.com/2618794310/2937236736.jpeg",
            meaning_en: "The Hierophant conveys spiritual wisdom and tradition, representing faith, belief systems, and the transmission of sacred knowledge.",
            meaning_zu: "I-Hierophant idlulisa ukuhlakanipha kwengqondo nesiko, imele inkolelo, izinhlelo zokukholwa, nokudluliswa kolwazi olungcwele.",
            upright_en: "Spiritual wisdom, religious beliefs, conformity, tradition",
            upright_zu: "Ukuhlakanipha kwengqondo, inkolelo yenkolo, ukufana, isiko",
            reversed_en: "Personal beliefs, freedom, challenging the status quo",
            reversed_zu: "Inkolelo yomuntu, inkululeko, ukuphikisana nesimo esikhona",
            eastern: "The Hierophant represents the teacher-student relationship central to Eastern spiritual traditions."
        },
        {
            id_en: "The_Lovers",
            number: 6,
            suit: "major",
            name: "The Lovers",
            name_zu: "I-Lovers",
            keywords: "Love, harmony, relationships, values",
            keywords_zu: "Uthando, uhlobo, ubudlelwano, amagugu",
            imageUrl: "https://ext.same-assets.com/2618794310/1048305483.jpeg",
            meaning_en: "The Lovers depicts union and choice, representing love, harmony, relationships, and the alignment of personal values.",
            meaning_zu: "I-Lovers ikhombisa ukuhlangana nokukhetha, imele uthando, uhlobo, ubudlelwano, nokuhambisana kwamagugu omuntu.",
            upright_en: "Love, harmony, relationships, values alignment",
            upright_zu: "Uthando, uhlobo, ubudlelwano, ukuhambisana kwamagugu",
            reversed_en: "Self-love, disharmony, imbalance, misalignment",
            reversed_zu: "Uthando lwasemqondweni, ukungahambisani, ukungalingani, ukungahambisani",
            eastern: "The Lovers card reflects the Taoist concept of complementary opposites finding harmony."
        },
        {
            id_en: "The_Chariot",
            number: 7,
            suit: "major",
            name: "The Chariot",
            name_zu: "I-Chariot",
            keywords: "Control, willpower, victory, self-discipline",
            keywords_zu: "Ukulawula, umuzwa wokuthanda, inqobonkulu, isiko somuntu",
            imageUrl: "https://ext.same-assets.com/2618794310/873220406.jpeg",
            meaning_en: "The Chariot depicts a victorious warrior, representing willpower, determination, victory through self-discipline, and forward movement.",
            meaning_zu: "I-Chariot ikhombisa iqhawe elinqobile, elimele umuzwa wokuthanda, ukuqiniseka, inqobonkulu ngesiko, nokuqhubeka phambili.",
            upright_en: "Control, willpower, success, action, determination",
            upright_zu: "Ukulawula, umuzwa wokuthanda, impumelelo, isenzo, ukuqiniseka",
            reversed_en: "Self-discipline issues, opposition, lack of direction",
            reversed_zu: "Izinkinga zesiko, ukumelana, ukuntuleka ukuqondisa",
            eastern: "The Chariot embodies the Buddhist concept of right effort, moving forward with balanced determination."
        },
        {
            id_en: "Strength",
            number: 8,
            suit: "major",
            name: "Strength",
            name_zu: "Amandla",
            keywords: "Courage, strength, patience, compassion",
            keywords_zu: "Isibindi, amandla, ukubekezela, isihawu",
            imageUrl: "https://ext.same-assets.com/2618794310/2577814387.jpeg",
            meaning_en: "Strength shows gentle power over the lion, representing inner courage, patience, compassion, and the mastery of raw energy.",
            meaning_zu: "Amandla abonisa amandla athambile phezu kwebhubesi, emele isibindi sangaphakathi, ukubekezela, isihawu, nokuqonda amandla angaphandle.",
            upright_en: "Courage, persuasion, influence, compassion",
            upright_zu: "Isibindi, ukuyengisa, umthelela, isihawu",
            reversed_en: "Inner strength issues, self-doubt, low energy",
            reversed_zu: "Izinkinga zamandla angaphakathi, ukuqwashisa ngokwakho, amandla aphansi",
            eastern: "Strength represents the gentle power of compassion, central to Buddhist teachings."
        },
        {
            id_en: "The_Hermit",
            number: 9,
            suit: "major",
            name: "The Hermit",
            name_zu: "I-Hermit",
            keywords: "Introspection, solitude, guidance, wisdom",
            keywords_zu: "Ukubheka ngaphakathi, ukuzwa, ukuqondisa, ukuhlakanipha",
            imageUrl: "https://ext.same-assets.com/2618794310/2016577690.jpeg",
            meaning_en: "The Hermit holds his lantern high, representing introspection, solitude, inner guidance, and the wisdom found within.",
            meaning_zu: "I-Hermit iphatha ilambu layo eliphezulu, imele ukubheka ngaphakathi, ukuzwa, ukuqondisa ngaphakathi, nokuhlakanipha okutholakala ngaphakathi.",
            upright_en: "Soul-searching, introspection, inner guidance",
            upright_zu: "Ukucinga ngomoya, ukubheka ngaphakathi, ukuqondisa ngaphakathi",
            reversed_en: "Isolation, loneliness, withdrawal from others",
            reversed_zu: "Ukuzithiba, ukuzwa, ukuzithiba kwabanye",
            eastern: "The Hermit embodies the meditative traditions of Eastern philosophy, seeking wisdom within."
        },
        {
            id_en: "Wheel_of_Fortune",
            number: 10,
            suit: "major",
            name: "Wheel of Fortune",
            name_zu: "Ivili Lenhlanhla",
            keywords: "Destiny, turning point, opportunity, change",
            keywords_zu: "Ikhethelo, isikhonkwane, ithuba, ushintsho",
            imageUrl: "https://ext.same-assets.com/2618794310/2861723955.jpeg",
            meaning_en: "The Wheel turns eternally, representing destiny, karma, life's cycles, and the constant change inherent in existence.",
            meaning_zu: "Ivili liphendula kuze kube phakade, emele ikhethelo, i-karma, izinkulungwane zobomi, noshintsho oluqhubekayo okusemqoka ekuphileni.",
            upright_en: "Good luck, karma, life cycles, destiny, turning point",
            upright_zu: "Inhlanhla enhle, i-karma, izinkulungwane zobomi, ikhethelo, isikhonkwane",
            reversed_en: "Bad luck, resistance to change, breaking cycles",
            reversed_zu: "Inhlanhla embi, ukumelana noshintsho, ukuwaphula izinkulungwane",
            eastern: "The Wheel reflects the Buddhist concept of karma and the ever-turning cycle of existence."
        },
        {
            id_en: "Justice",
            number: 11,
            suit: "major",
            name: "Justice",
            name_zu: "Ubulungisa",
            keywords: "Justice, fairness, truth, cause and effect",
            keywords_zu: "Ubulungisa, ukufanisa, iqiniso, isizathu nomphumela",
            imageUrl: "https://ext.same-assets.com/2618794310/1456454155.jpeg",
            meaning_en: "Justice holds the scales and sword, representing fairness, truth, cause and effect, and the law of karma.",
            meaning_zu: "Ubulungisa buyiphethe isikali nenkemba, emele ukufanisa, iqiniso, isizathu nomphumela, nomthetho we-karma.",
            upright_en: "Justice, fairness, truth, cause and effect, law",
            upright_zu: "Ubulungisa, ukufanisa, iqiniso, isizathu nomphumela, umthetho",
            reversed_en: "Unfairness, lack of accountability, dishonesty",
            reversed_zu: "Ukungafani, ukuntuleka ubunikazi, ukungathembeki",
            eastern: "Justice represents the Eastern concept of dharma, living in alignment with cosmic law."
        },
        {
            id_en: "The_Hanged_Man",
            number: 12,
            suit: "major",
            name: "The Hanged Man",
            name_zu: "Indoda Ekhwele",
            keywords: "Sacrifice, pause, new perspective, surrender",
            keywords_zu: "Ukuhlwitha, ukuma, umbono omusha, ukunikezela",
            imageUrl: "https://ext.same-assets.com/2618794310/1987963969.jpeg",
            meaning_en: "The Hanged Man hangs in suspension, representing sacrifice, pause, surrender, and gaining new perspectives through letting go.",
            meaning_zu: "Indoda Ekhwele ixhwele ephethweni, emele ukuhlwitha, ukuma, ukunikezela, nokuthola imibono emisha ngokuyeka.",
            upright_en: "Pause, surrender, letting go, new perspectives",
            upright_zu: "Ukuma, ukunikezela, ukuyeka, imibono emisha",
            reversed_en: "Delays, resistance, stalling, indecision",
            reversed_zu: "Ukulibala, ukumelana, ukugijima, ukungakwazi ukuquma",
            eastern: "The Hanged Man embodies the Zen concept of letting go and seeing things from a new perspective."
        },
        {
            id_en: "Death",
            number: 13,
            suit: "major",
            name: "Death",
            name_zu: "Ukufa",
            keywords: "Ending, change, transformation, transition",
            keywords_zu: "Ukuqeda, ushintsho, uguquko, uku dlulisa",
            imageUrl: "https://ext.same-assets.com/2618794310/2696485906.jpeg",
            meaning_en: "Death brings necessary endings, representing transformation, change, transition, and the rebirth that follows release.",
            meaning_zu: "Ukufa luletha ukuphela okudingekayo, emele uguquko, ushintsho, uku dlulisa, nokuzalwa kabusha okulandela ukukhululwa.",
            upright_en: "Endings, change, transformation, transition",
            upright_zu: "Ukuqeda, ushintsho, uguquko, uku dlulisa",
            reversed_en: "Resistance to change, personal transformation issues",
            reversed_zu: "Ukumelana noshintsho, izinkinga zoguquko lomuntu",
            eastern: "Death represents the Buddhist teaching of impermanence, reminding us that all things must pass."
        },
        {
            id_en: "Temperance",
            number: 14,
            suit: "major",
            name: "Temperance",
            name_zu: "Ukuzithiba",
            keywords: "Balance, moderation, patience, purpose",
            keywords_zu: "Uku linganisela, ukuzithiba, ukubekezela, injongo",
            imageUrl: "https://ext.same-assets.com/2618794310/2225087064.jpeg",
            meaning_en: "Temperance pours between cups, representing balance, moderation, patience, and the art of blending opposites.",
            meaning_zu: "Ukuzithiba kugcwele phakathi kwamakhadi, emele uku linganisela, ukuzithiba, ukubekezela, nomculo wokuxuba okuphikisanayo.",
            upright_en: "Balance, moderation, patience, purpose",
            upright_zu: "Uku linganisela, ukuzithiba, ukubekezela, injongo",
            reversed_en: "Imbalance, excess, need for re-alignment",
            reversed_zu: "Ukungalingani, ukweqela, isidingo sokuhlela kabusha",
            eastern: "Temperance embodies the Middle Way of Buddhism, finding balance in all things."
        },
        {
            id_en: "The_Devil",
            number: 15,
            suit: "major",
            name: "The Devil",
            name_zu: "I-Devil",
            keywords: "Bondage, materialism, desire, addiction",
            keywords_zu: "Ukuboshwa, uqobo, ukunxanelwa, ukwezela",
            imageUrl: "https://ext.same-assets.com/2618794310/378074380.jpeg",
            meaning_en: "The Devil represents the shadow self, showing bondage, material attachments, desire, and the chains we forge ourselves.",
            meaning_zu: "I-Devil imele isithombe somthunzi, ibonisa ukuboshwa, ukunamathela komzimba, ukunxanelwa, namakhebula esiwakha ngokwethu.",
            upright_en: "Shadow self, attachment, addiction, restriction",
            upright_zu: "Isithombe somthunzi, ukunamathela, ukwezela, ukuncipha",
            reversed_en: "Releasing limiting beliefs, exploring dark thoughts",
            reversed_zu: "UkuKhulula inkolelo ethiyile, ukucwaninga imicabango emnyama",
            eastern: "The Devil represents attachment, which Buddhism identifies as the root of suffering."
        },
        {
            id_en: "The_Tower",
            number: 16,
            suit: "major",
            name: "The Tower",
            name_zu: "Itoweri",
            keywords: "Sudden change, chaos, revelation, awakening",
            keywords_zu: "Ushintsho olusheshayo, i-chaos, ukubonakaliswa, ukuvuka",
            imageUrl: "https://ext.same-assets.com/2618794310/1259069008.jpeg",
            meaning_en: "The Tower is struck by lightning, representing sudden change, upheaval, revelation, and the destruction of false structures.",
            meaning_zu: "Itoweri iyashaywa yimbani, emele ushintsho olusheshayo, ukudlidwa, ukubonakaliswa, nokuchithwa kwezakhiwo ezingamanga.",
            upright_en: "Sudden change, upheaval, chaos, revelation, awakening",
            upright_zu: "Ushintsho olusheshayo, ukudlidwa, i-chaos, ukubonakaliswa, ukuvuka",
            reversed_en: "Personal transformation, fear of change, disaster aversion",
            reversed_zu: "Uguquko lomuntu, ukwesaba ushintsho, ukugwema ingozi",
            eastern: "The Tower represents the shattering of illusions, a necessary step in spiritual awakening."
        },
        {
            id_en: "The_Star",
            number: 17,
            suit: "major",
            name: "The Star",
            name_zu: "Inkanyezi",
            keywords: "Hope, faith, purpose, renewal",
            keywords_zu: "Ithemba, inkolelo, injongo, ukuvuselela",
            imageUrl: "https://ext.same-assets.com/2618794310/4105717106.jpeg",
            meaning_en: "The Star shines brightly, representing hope, faith, spiritual purpose, renewal, and the divine light within.",
            meaning_zu: "Inkanyezi likhanya kakhulu, emele ithemba, inkolelo, injongo yengqondo, ukuvuselela, nokukhanya okungcwele ngaphakathi.",
            upright_en: "Hope, faith, purpose, renewal, spirituality",
            upright_zu: "Ithemba, inkolelo, injongo, ukuvuselela, ubunqonkulu",
            reversed_en: "Lack of faith, despair, disconnection",
            reversed_zu: "Ukuntuleka kwenkolelo, ukudumala, ukungahlangani",
            eastern: "The Star represents the inner light that guides us, like the Buddha nature within."
        },
        {
            id_en: "The_Moon",
            number: 18,
            suit: "major",
            name: "The Moon",
            name_zu: "Inyanga",
            keywords: "Illusion, fear, anxiety, subconscious",
            keywords_zu: "I-illusion, ukwesaba, ukwesaba, isiqunto",
            imageUrl: "https://ext.same-assets.com/2618794310/653205454.jpeg",
            meaning_en: "The Moon illuminates the darkness, representing illusion, fear, anxiety, intuition, and the mysteries of the subconscious.",
            meaning_zu: "Inyanga ikhanya emnyameni, emele i-illusion, ukwesaba, ukwesaba, i-intuition, nemfihlo yesiqunto.",
            upright_en: "Illusion, fear, anxiety, subconscious, intuition",
            upright_zu: "I-illusion, ukwesaba, ukwesaba, isiqunto, i-intuition",
            reversed_en: "Release of fear, repressed emotion, inner confusion",
            reversed_zu: "Ukukhululwa kwekwesaba, imizwa eciniwe, ukudideka ngaphakathi",
            eastern: "The Moon reflects the Zen teaching that appearances can be deceiving."
        },
        {
            id_en: "The_Sun",
            number: 19,
            suit: "major",
            name: "The Sun",
            name_zu: "Ilanga",
            keywords: "Positivity, joy, success, vitality",
            keywords_zu: "Ukucacisa, injabulo, impumelelo, ukuphila",
            imageUrl: "https://ext.same-assets.com/2618794310/2779272649.jpeg",
            meaning_en: "The Sun radiates warmth and light, representing positivity, joy, success, vitality, and the fullness of life.",
            meaning_zu: "Ilanga likhanyisa ukufudumeza nokukhanya, emele ukucacisa, injabulo, impumelelo, ukuphila, nokugcwala kobomi.",
            upright_en: "Positivity, fun, warmth, success, vitality",
            upright_zu: "Ukucacisa, injabulo, ukufudumeza, impumelelo, ukuphila",
            reversed_en: "Inner child, feeling down, excessive optimism",
            reversed_zu: "Umntwana wangaphakathi, ukuzwa phansi, ukucacisa okuningi",
            eastern: "The Sun represents enlightenment, the awakening to our true radiant nature."
        },
        {
            id_en: "Judgement",
            number: 20,
            suit: "major",
            name: "Judgement",
            name_zu: "Ukucelwa",
            keywords: "Reflection, reckoning, awakening, rebirth",
            keywords_zu: "Ukucabanga, ukubalwa, ukuvuka, ukuzalwa kabusha",
            imageUrl: "https://ext.same-assets.com/2618794310/2898632203.jpeg",
            meaning_en: "Judgement sounds the call, representing spiritual awakening, rebirth, inner calling, and the moment of self-realization.",
            meaning_zu: "Ukucelwa kuvuthela ukubiza, emele ukuvuka kwengqondo, ukuzalwa kabusha, ukubiza ngaphakathi, nenkathi yokuqonda ngokwakho.",
            upright_en: "Judgement, rebirth, inner calling, absolution",
            upright_zu: "Ukucelwa, ukuzalwa kabusha, ukubiza ngaphakathi, ukuxolelwa",
            reversed_en: "Self-doubt, inner critic, ignoring the call",
            reversed_zu: "Ukuqwashisa ngokwakho, umbhali wangaphakathi, ukungaphathi kukubiza",
            eastern: "Judgement represents the moment of spiritual awakening and self-realization."
        },
        {
            id_en: "The_World",
            number: 21,
            suit: "major",
            name: "The World",
            name_zu: "Um mundo",
            keywords: "Completion, achievement, travel, harmony",
            keywords_zu: "Ukuqedwa, impumelelo, ukuhambahamba, uhlobo",
            imageUrl: "https://ext.same-assets.com/2618794310/3885265685.jpeg",
            meaning_en: "The World completes the cycle, representing completion, integration, accomplishment, and the harmony of fulfilled purpose.",
            meaning_zu: "Um mundo uqeda isinkulungwane, emele ukuqedwa, ukuhlanganyela, impumelelo, nohlobo lwenjongo egcwalisiwe.",
            upright_en: "Completion, integration, accomplishment, travel",
            upright_zu: "Ukuqedwa, ukuhlanganyela, impumelelo, ukuhambahamba",
            reversed_en: "Seeking closure, short-cuts, delays",
            reversed_zu: "Ukufuna ukuvala, izinqamuleli, ukulibala",
            eastern: "The World represents the completion of the spiritual journey, enlightenment achieved."
        },
        
        // ========== Wands (14 cards) ==========
        { id_en: "Ace_of_Wands", number: 22, suit: "wands", name: "Ace of Wands", name_zu: "Ace of Wands", keywords: "Creativity, inspiration, potential, new adventure", keywords_zu: "Ukudala, isibonakaliso, amandla, ukuqhakaza okusha", imageUrl: "https://ext.same-assets.com/2618794310/4287011896.jpeg", meaning_en: "The spark of new adventure, representing creative burst and awakening potential.", meaning_zu: "Isikhwehle sokuqhakaza okusha, emele ukuphuma kokudala namandla okuvukela.", upright_en: "Inspiration, new opportunities, growth, potential", upright_zu: "Isibonakaliso, ithuba elisha, ukukhula, amandla", reversed_en: "Delays, lack of motivation, creativity blocks", reversed_zu: "Ukulibala, ukuntuleka kwenshiseko, izithiyo zokudala", eastern: "The Ace of Wands represents the spark of divine fire, the beginning of creative manifestation." },
        { id_en: "Two_of_Wands", number: 23, suit: "wands", name: "Two of Wands", name_zu: "Two of Wands", keywords: "Planning, decision, future vision", keywords_zu: "Ukuhlela, isinqumo, umbono wekusasa", imageUrl: "https://ext.same-assets.com/2618794310/3677842621.jpeg", meaning_en: "A person on a city wall looking into the distance, representing planning and future vision.", meaning_zu: "Umuntu odongeni lomuzi obheke kude, emele ukuhlela nombono wekusasa.", upright_en: "Future planning, progress, decisions, discovery", upright_zu: "Ukuhlela kwakusasa, ukuqhubeka, izinqumo, ukuthola", reversed_en: "Fear of planning, indecision, fear of unknown", reversed_zu: "Ukwesaba ukuhlela, ukungakwazi ukuquma, ukwesaba okungaziwa", eastern: "Looking forward with clear vision, planning the path ahead." },
        { id_en: "Three_of_Wands", number: 24, suit: "wands", name: "Three of Wands", name_zu: "Three of Wands", keywords: "Progress, expansion, foresight", keywords_zu: "Ukuqhubeka, ukwandiswa, ukubona kudule", imageUrl: "https://ext.same-assets.com/2618794310/1234357303.jpeg", meaning_en: "A merchant watching ships, representing progress, expansion, and foresight.", meaning_zu: "Umthengisi obheke izikebhe, emele ukuqhubeka, ukwandiswa, nokubona kudule.", upright_en: "Progress, expansion, foresight, overseas opportunities", upright_zu: "Ukuqhubeka, ukwandiswa, ukubona kudule, ithuba elingaphandle", reversed_en: "Playing small, lack of foresight, unexpected delays", reversed_zu: "Ukudlala kancane, ukuntuleka kokubona, ukulibala okungalindelekile", eastern: "Watching your efforts begin to bear fruit with patience." },
        { id_en: "Four_of_Wands", number: 25, suit: "wands", name: "Four of Wands", name_zu: "Four of Wands", keywords: "Celebration, unity, harmony", keywords_zu: "Ukuhlabelela, ukubambisana, uhlobo", imageUrl: "https://ext.same-assets.com/2618794310/667498838.jpeg", meaning_en: "Celebration and unity, representing harmony and achievement.", meaning_zu: "Ukuhlabelela nokubambisana, emele uhlobo nokufezekisa.", upright_en: "Celebration, joy, harmony, relaxation, homecoming", upright_zu: "Ukuhlabelela, injabulo, uhlobo, ukuphumula, ukubuyela ekhaya", reversed_en: "Personal celebration, inner harmony, conflict", reversed_zu: "Ukuhlabelela komuntu, uhlobo lwangaphakathi, ukuphikisana", eastern: "A moment of harmony and celebration in your journey." },
        { id_en: "Five_of_Wands", number: 26, suit: "wands", name: "Five of Wands", name_zu: "Five of Wands", keywords: "Competition, challenge, conflict", keywords_zu: "Ukucasha, izinselelo, ukuphikisana", imageUrl: "https://ext.same-assets.com/2618794310/2819544089.jpeg", meaning_en: "Five wands competing, representing challenge and competition.", meaning_zu: "Izinduku ezinhlanu eziphikisanayo, emele izinselelo nokucasha.", upright_en: "Conflict, disagreements, competition, tension", upright_zu: "Ukuphikisana, ukungavumelani, ukucasha, ukuqina", reversed_en: "Avoiding competition, reaching reconciliation", reversed_zu: "Ukugwema ukucasha, ukufinyelela ukuxolelana", eastern: "Through conflict comes growth and understanding." },
        { id_en: "Six_of_Wands", number: 27, suit: "wands", name: "Six of Wands", name_zu: "Six of Wands", keywords: "Victory, success, recognition", keywords_zu: "Inqobonkulu, impumelelo, ukwamukelwa", imageUrl: "https://ext.same-assets.com/2618794310/1554531710.jpeg", meaning_en: "A victorious warrior, representing success and recognition.", meaning_zu: "Iqhawe elinqobile, emele impumelelo nokwamukelwa.", upright_en: "Success, public recognition, progress, self-confidence", upright_zu: "Impumelelo, ukwamukelwa emphakathini, ukuqhubeka, ukuzethemba", reversed_en: "Private achievement, personal definition of success", reversed_zu: "Impumelelo yangasese, incazelo yomuntu yempumelelo", eastern: "Recognition and success come through righteous action." },
        { id_en: "Seven_of_Wands", number: 28, suit: "wands", name: "Seven of Wands", name_zu: "Seven of Wands", keywords: "Defense, persistence, challenge", keywords_zu: "Ukuwela, ukuqhubeka, izinselelo", imageUrl: "https://ext.same-assets.com/2618794310/3124045011.jpeg", meaning_en: "A defensive stance, representing persistence and defending challenges.", meaning_zu: "Isimo sokuvikela, emele ukuqhubeka nokuvikela izinselelo.", upright_en: "Challenge, competition, protection, perseverance", upright_zu: "Izinselelo, ukucasha, ukuvikela, ukuqhubeka", reversed_en: "Exhaustion, giving up, overwhelmed", reversed_zu: "Ukuphelelwa amandla, ukuyeka, ukugcwele", eastern: "Stand firm in your convictions, defend what you believe." },
        { id_en: "Eight_of_Wands", number: 29, suit: "wands", name: "Eight of Wands", name_zu: "Eight of Wands", keywords: "Swift action, change, messages", keywords_zu: "Isenzo esisheshayo, ushintsho, imilayezo", imageUrl: "https://ext.same-assets.com/2618794310/299363652.jpeg", meaning_en: "Rapidly moving wands, representing swift action and messages.", meaning_zu: "Izinduku ezisheshayo, emele isenzo esisheshayo nemilayezo.", upright_en: "Movement, fast paced change, action, alignment", upright_zu: "Ukunyakaza, ushintsho osheshayo, isenzo, ukuhambisana", reversed_en: "Delays, frustration, resisting change", reversed_zu: "Ukulibala, ukudumala, ukumelana noshintsho", eastern: "Swift movement forward, like an arrow flying true." },
        { id_en: "Nine_of_Wands", number: 30, suit: "wands", name: "Nine of Wands", name_zu: "Nine of Wands", keywords: "Resilience, persistence, final effort", keywords_zu: "Ukuqina, ukuqhubeka, imizamo yokugcina", imageUrl: "https://ext.same-assets.com/2618794310/2565497471.jpeg", meaning_en: "A warrior's final defense, representing resilience and persistence.", meaning_zu: "Ukuwela kokugcina kweqhawe, emele ukuqina nokuqhubeka.", upright_en: "Resilience, courage, persistence, test of faith", upright_zu: "Ukuqina, isibindi, ukuqhubeka, ukuhlolwa kokukholwa", reversed_en: "Inner resources, struggle, overwhelm", reversed_zu: "Izinsiza zangaphakathi, ukulwa, ukugcwele", eastern: "Perseverance through challenges builds inner strength." },
        { id_en: "Ten_of_Wands", number: 31, suit: "wands", name: "Ten of Wands", name_zu: "Ten of Wands", keywords: "Burden, responsibility, pressure", keywords_zu: "Umthwalo, umthwalo, umbiko", imageUrl: "https://ext.same-assets.com/2618794310/4101056322.jpeg", meaning_en: "A heavy burden, representing responsibility and pressure.", meaning_zu: "Umthwalo onzima, emele umthwalo nombiko.", upright_en: "Burden, extra responsibility, hard work, completion", upright_zu: "Umthwalo, umthwalo ongeziwe, umsebenzi onzima, ukuqedwa", reversed_en: "Doing it all, delegation, release of burdens", reversed_zu: "Ukwenza konke, ukunikela, ukukhululwa kwemithwalo", eastern: "Carrying too much can slow your journey." },
        { id_en: "Page_of_Wands", number: 32, suit: "wands", name: "Page of Wands", name_zu: "Page of Wands", keywords: "New opportunity, enthusiasm, exploration", keywords_zu: "Ithuba elisha, ukunothisa, ukuhlola", imageUrl: "https://ext.same-assets.com/2618794310/4228706045.jpeg", meaning_en: "A young messenger, representing new opportunities and enthusiastic exploration.", meaning_zu: "Isithunywa esisha, emele ithuba elisha nokuhlola okunothisa.", upright_en: "Inspiration, ideas, discovery, limitless potential", upright_zu: "Isibonakaliso, imibono, ukuthola, amandla angapheli", reversed_en: "Newly-formed ideas, redirecting energy", reversed_zu: "Imibono emisha, ukuqondisa kabusha amandla", eastern: "The beginner's mind is full of possibilities." },
        { id_en: "Knight_of_Wands", number: 33, suit: "wands", name: "Knight of Wands", name_zu: "Knight of Wands", keywords: "Action, passion, impulse", keywords_zu: "Isenzo, ukunothisa, ukuphuthuma", imageUrl: "https://ext.same-assets.com/2618794310/2809129355.jpeg", meaning_en: "An action warrior, representing impulsiveness and passionate action.", meaning_zu: "Iqhawe lenzenzo, emele ukuphuthuma nokuziphatha ngokunothisa.", upright_en: "Energy, passion, adventure, impulsiveness", upright_zu: "Amandla, ukunothisa, ukuqhakaza, ukuphuthuma", reversed_en: "Delay, lack of direction, scattered energy", reversed_zu: "Ukulibala, ukuntuleka ukuqondisa, amandla acaciswe", eastern: "Bold action driven by passionate purpose." },
        { id_en: "Queen_of_Wands", number: 34, suit: "wands", name: "Queen of Wands", name_zu: "Queen of Wands", keywords: "Confidence, charm, creativity", keywords_zu: "Ukuzethemba, amandla, ukudala", imageUrl: "https://ext.same-assets.com/2618794310/4014954643.jpeg", meaning_en: "A confident woman, representing charm and creativity.", meaning_zu: "Owesifazane onethemba, emele amandla nokudala.", upright_en: "Courage, confidence, independence, social butterfly", upright_zu: "Isibindi, ukuzethemba, ukuzimele, uvutha wemphakathi", reversed_en: "Self-respect, self-confidence, introverted", reversed_zu: "Inhlonipho yomuntu, ukuzethemba, umuntu ongaphakathi", eastern: "Radiant confidence that inspires others." },
        { id_en: "King_of_Wands", number: 35, suit: "wands", name: "King of Wands", name_zu: "King of Wands", keywords: "Leadership, vision, entrepreneurial spirit", keywords_zu: "Ukuhola, umbono, umoya wokuziqalela", imageUrl: "https://ext.same-assets.com/2618794310/4135617433.jpeg", meaning_en: "A leader figure, representing vision and entrepreneurial spirit.", meaning_zu: "Isithombe somholi, emele umbono nomoya wokuziqalela.", upright_en: "Natural-born leader, vision, entrepreneur, honor", upright_zu: "Umholi ozalelwe naye, umbono, umqhubi, inhlanhla", reversed_en: "Impulsiveness, haste, ruthless, high expectations", reversed_zu: "Ukuphuthuma, ukushesha, ukungabi namsiko, ilindelo eliphezulu", eastern: "Wise leadership through vision and inspiration." },
        
        // ========== Cups (14 cards) ==========
        { id_en: "Ace_of_Cups", number: 36, suit: "cups", name: "Ace of Cups", name_zu: "Ace of Cups", keywords: "Love, emotion, new emotional beginning", keywords_zu: "Uthando, izizwa, ukuqala okusha kwezizwa", imageUrl: "https://ext.same-assets.com/2618794310/1809724827.jpeg", meaning_en: "The source of emotions, representing new emotional beginnings.", meaning_zu: "Umthombo wezizwa, emele ukuqala okusha kwezizwa.", upright_en: "Love, new relationships, compassion, creativity", upright_zu: "Uthando, ubudlelwano obusha, isihawu, ukudala", reversed_en: "Self-love, intuition, repressed emotions", reversed_zu: "Uthando lwasemqondweni, i-intuition, izizwa eziciniwe", eastern: "The overflowing cup of divine love and compassion." },
        { id_en: "Two_of_Cups", number: 37, suit: "cups", name: "Two of Cups", name_zu: "Two of Cups", keywords: "Partnership, love, balance", keywords_zu: "Ubudlelwano, uthando, uku linganisela", imageUrl: "https://ext.same-assets.com/2618794310/3682421993.jpeg", meaning_en: "Lovers exchanging cups, representing partnership and harmony.", meaning_zu: "Abathandanayo abaxubanisa amakhadi, emele ubudlelwano nohlobo.", upright_en: "Unified love, partnership, mutual attraction", upright_zu: "Uthando oluhlanganyelwe, ubudlelwano, ukudonsana", reversed_en: "Self-love, break-up, disharmony", reversed_zu: "Uthando lwasemqondweni, ukuhlukana, ukungahambisani", eastern: "Two hearts finding harmony and balance." },
        { id_en: "Three_of_Cups", number: 38, suit: "cups", name: "Three of Cups", name_zu: "Three of Cups", keywords: "Celebration, friendship, community", keywords_zu: "Ukuhlabelela, ubungane, umphakathi", imageUrl: "https://ext.same-assets.com/2618794310/28380381.jpeg", meaning_en: "A celebration scene, representing friendship and community.", meaning_zu: "Isimo sokuhlabelela, emele ubungane nomphakathi.", upright_en: "Celebration, friendship, creativity, collaborations", upright_zu: "Ukuhlabelela, ubungane, ukudala, ukusebenzisana", reversed_en: "Independence, alone time, hardcore partying", reversed_zu: "Ukuzimele, isikhathi sodwa, ukuhlabelela okungangeni", eastern: "Joy shared with others multiplies." },
        { id_en: "Four_of_Cups", number: 39, suit: "cups", name: "Four of Cups", name_zu: "Four of Cups", keywords: "Reflection, choice, refusal", keywords_zu: "Ukucabanga, ukukhetha, ukunqaba", imageUrl: "https://ext.same-assets.com/2618794310/1622517941.jpeg", meaning_en: "A contemplative person, representing reflection and choice.", meaning_zu: "Umuntu o cabangayo, emele ukucabanga nokukhetha.", upright_en: "Meditation, contemplation, apathy, reevaluation", upright_zu: "Ukuhlafuna, ukucabanga, ukungakhathali, ukubuyekeza", reversed_en: "Open to new opportunities, retreat, alignment check", reversed_zu: "Vulekela ithuba elisha, ukuzithiba, ukuhlola ukuhambisana", eastern: "Sometimes we must look within to find what we seek." },
        { id_en: "Five_of_Cups", number: 40, suit: "cups", name: "Five of Cups", name_zu: "Five of Cups", keywords: "Loss, grief, acceptance", keywords_zu: "Uku lahlekelwa, ukudumala, ukwamukela", imageUrl: "https://ext.same-assets.com/2618794310/1347689471.jpeg", meaning_en: "Fallen cups, representing loss and the grief that follows.", meaning_zu: "Amakhadi awile, emele ukulahlekelwa nokudumala okulandelayo.", upright_en: "Regret, failure, disappointment, pessimism", upright_zu: "Ukuzisola, ukwehlulwa, ukudumala, ukungathembeki", reversed_en: "Personal setbacks, self-forgiveness, moving on", reversed_zu: "Izinqumo zomuntu, ukuzixolela, ukuqhubeka", eastern: "In loss, we find the opportunity for growth." },
        { id_en: "Six_of_Cups", number: 41, suit: "cups", name: "Six of Cups", name_zu: "Six of Cups", keywords: "Nostalgia, memories, innocence", keywords_zu: "Ukufisa ukubuya, inkumbulo, umsulwa", imageUrl: "https://ext.same-assets.com/2618794310/1661269065.jpeg", meaning_en: "Memories of the past, representing nostalgia and innocence.", meaning_zu: "Inkumbulo zesikhathi esedlule, emele ukufisa ukubuya nomsulwa.", upright_en: "Revisiting the past, childhood memories, innocence", upright_zu: "Ukubuyela esikhathini esedlule, inkumbulo yobuntwana, umsulwa", reversed_en: "Living in the past, forgiveness, lacking playfulness", reversed_zu: "Ukuphila esikhathini esedlule, ukuxolelwa, ukuntuleka kokudlala", eastern: "Sweet memories of simpler times bring comfort." },
        { id_en: "Seven_of_Cups", number: 42, suit: "cups", name: "Seven of Cups", name_zu: "Seven of Cups", keywords: "Fantasy, choice, dreams", keywords_zu: "Amaphupho, ukukhetha, amaphupho", imageUrl: "https://ext.same-assets.com/2618794310/2247698442.jpeg", meaning_en: "Illusions and choices, representing fantasy and the need for discernment.", meaning_zu: "Ama-illusion nokukhetha, emele amaphupho nesidingo sokuhlola.", upright_en: "Opportunities, choices, wishful thinking, illusion", upright_zu: "Amathuba, ukukhetha, ukucabanga okunethemba, i-illusion", reversed_en: "Alignment, personal values, overwhelmed by choices", reversed_zu: "Ukuhambisana, amagugu omuntu, ukugcwele ngokukhetha", eastern: "Discernment is needed when faced with many paths." },
        { id_en: "Eight_of_Cups", number: 43, suit: "cups", name: "Eight of Cups", name_zu: "Eight of Cups", keywords: "Seeking fulfillment, emotional detachment", keywords_zu: "Ukufuna ukugcwalisiwa, ukwehlukanisa kwezizwa", imageUrl: "https://ext.same-assets.com/2618794310/3352553263.jpeg", meaning_en: "Departure to seek fulfillment, leaving behind what no longer serves.", meaning_zu: "Ukumuka ukuyofuna ukugcwalisiwa, ukushiya ngemuva okungasasebenzi.", upright_en: "Disappointment, abandonment, withdrawal, seeking meaning", upright_zu: "Ukudumala, ukuyeka, ukuzithiba, ukufuna incazelo", reversed_en: "Trying again, indecision, aimless drifting", reversed_zu: "Ukuzama futhi, ukungakwazi ukuquma, ukudrada ngaphandle kwenjongo", eastern: "Sometimes we must leave behind what no longer serves us." },
        { id_en: "Nine_of_Cups", number: 44, suit: "cups", name: "Nine of Cups", name_zu: "Nine of Cups", keywords: "Satisfaction, wish fulfillment", keywords_zu: "Ukukholisiwa, ukugcwalisiwa kwesifiso", imageUrl: "https://ext.same-assets.com/2618794310/1212201608.jpeg", meaning_en: "A satisfied person, representing contentment and wish fulfillment.", meaning_zu: "Umuntu okholisiwe, emele ukukholisiwa nokugcwalisiwa kwesifiso.", upright_en: "Contentment, satisfaction, gratitude, wish come true", upright_zu: "Ukukholisiwa, ukukholisiwa, ukubonga, isifiso esigcwalisiwe", reversed_en: "Inner happiness, materialism, dissatisfaction", reversed_zu: "Injabulo yangaphakathi, uqobo, ukungakholisi", eastern: "True contentment comes from within." },
        { id_en: "Ten_of_Cups", number: 45, suit: "cups", name: "Ten of Cups", name_zu: "Ten of Cups", keywords: "Harmony, family happiness", keywords_zu: "Ukuhlobo, injabulo yomndeni", imageUrl: "https://ext.same-assets.com/2618794310/2684258666.jpeg", meaning_en: "A harmonious family scene, representing family happiness and emotional fulfillment.", meaning_zu: "Isimo somndeni o harmonious, emele injabulo yomndeni nokugcwalisiwa kwezizwa.", upright_en: "Divine love, blissful relationships, harmony", upright_zu: "Uthando olungcwele, ubudlelwano obumnandi, uhlobo", reversed_en: "Disconnection, misaligned values, struggling relationship", reversed_zu: "Ukungahlangani, amagugu angahambisani, ubudlelwano obulwayo", eastern: "The rainbow of fulfilled emotional life." },
        { id_en: "Page_of_Cups", number: 46, suit: "cups", name: "Page of Cups", name_zu: "Page of Cups", keywords: "Emotional message, intuition", keywords_zu: "Umyalezo wezizwa, i-intuition", imageUrl: "https://ext.same-assets.com/2618794310/1372008568.jpeg", meaning_en: "A young messenger, representing emotional messages and intuitive insights.", meaning_zu: "Isithunywa esisha, emele imilayezo yezizwa nokuqonda kwe-intuition.", upright_en: "Creative opportunities, intuitive messages, curiosity", upright_zu: "Amathuba okudala, imilayezo ye-intuition, ukufuna ukwazi", reversed_en: "New ideas, doubting intuition, creative blocks", reversed_zu: "Imibono emisha, ukungathembi i-intuition, izithiyo zokudala", eastern: "Openness to emotional messages and intuition." },
        { id_en: "Knight_of_Cups", number: 47, suit: "cups", name: "Knight of Cups", name_zu: "Knight of Cups", keywords: "Romance, creative drive", keywords_zu: "Ukuthandeka, ukudonsa kokudala", imageUrl: "https://ext.same-assets.com/2618794310/1330902637.jpeg", meaning_en: "A romantic knight, representing emotional drive and idealism.", meaning_zu: "Iqhawe elithandekayo, emele ukudonsa kwezizwa nokuhlala ngamaphuzu.", upright_en: "Romance, charm, creativity, imagination", upright_zu: "Ukuthandeka, amandla, ukudala, ukucabanga", reversed_en: "Overactive imagination, unrealistic, jealousy", reversed_zu: "Ukucabanga okusebenza kakhulu, okungenzeki, ukugxeka", eastern: "The romantic seeker following their heart." },
        { id_en: "Queen_of_Cups", number: 48, suit: "cups", name: "Queen of Cups", name_zu: "Queen of Cups", keywords: "Emotional maturity, intuition", keywords_zu: "Uku khula kwezizwa, i-intuition", imageUrl: "https://ext.same-assets.com/2618794310/3971482696.jpeg", meaning_en: "An emotionally mature woman, representing intuition and nurturing.", meaning_zu: "Owesifazane osekhulile ngezizwa, emele i-intuition nokondla.", upright_en: "Compassion, calm, comfort, nurturing", upright_zu: "Isihawu, ukuthula, ukukhululeka, ukondla", reversed_en: "Inner feelings, self-care, self-love", reversed_zu: "Izizwa zangaphakathi, ukuzondla, ukuzithanda", eastern: "The nurturing embrace of unconditional love." },
        { id_en: "King_of_Cups", number: 49, suit: "cups", name: "King of Cups", name_zu: "King of Cups", keywords: "Emotional balance, wisdom", keywords_zu: "Uku linganisela kwezizwa, ukuhlakanipha", imageUrl: "https://ext.same-assets.com/2618794310/1234383569.jpeg", meaning_en: "An emotionally balanced leader, representing wisdom and compassion.", meaning_zu: "Umholi osezingeni ngezizwa, emele ukuhlakanipha nesisihawu.", upright_en: "Emotionally balanced, compassionate, diplomatic", upright_zu: "Osezingeni ngezizwa, onesihawu, osebenzisa ubuhlakani", reversed_en: "Self-compassion, inner feelings, moodiness", reversed_zu: "Isihawu kumuntu, izizwa zangaphakathi, ukushintshashintsha", eastern: "Mastery over emotions brings wisdom and peace." },
        
        // ========== Swords (14 cards) ==========
        { id_en: "Ace_of_Swords", number: 50, suit: "swords", name: "Ace of Swords", name_zu: "Ace of Swords", keywords: "Truth, clarity, clear thinking", keywords_zu: "Iqiniso, ukucaca, ukucabanga okucacile", imageUrl: "https://ext.same-assets.com/2618794310/389613862.jpeg", meaning_en: "The blade of truth, representing mental clarity and breakthrough thinking.", meaning_zu: "Inkemba yeqiniso, emele ukucaca kwengqondo nokucabanga okudlulayo.", upright_en: "Breakthroughs, new ideas, mental clarity, success", upright_zu: "Ukudlulayo, imibono emisha, ukucaca kwengqondo, impumelelo", reversed_en: "Inner clarity, re-thinking, clouded judgement", reversed_zu: "Ukucaca ngaphakathi, ukucabanga kabusha, ukwahlulela okufihlakele", eastern: "The sword of truth cuts through illusion." },
        { id_en: "Two_of_Swords", number: 51, suit: "swords", name: "Two of Swords", name_zu: "Two of Swords", keywords: "Difficult choice, stalemate", keywords_zu: "Ukukhetha okunzima, ukungahambisani", imageUrl: "https://ext.same-assets.com/2618794310/2590486378.jpeg", meaning_en: "Difficult choices, representing the need for balance in decisions.", meaning_zu: "Ukukhetha okunzima, emele isidingo sokulinganisela eminqumweni.", upright_en: "Difficult decisions, weighing options, stalemate", upright_zu: "Izinqumo ezinzima, ukulinganisa amathuba, ukungahambisani", reversed_en: "Indecision, confusion, information overload", reversed_zu: "Ukungakwazi ukuquma, ukudideka, ulwazi oluningi", eastern: "Balance between heart and mind in decision." },
        { id_en: "Three_of_Swords", number: 52, suit: "swords", name: "Three of Swords", name_zu: "Three of Swords", keywords: "Heartbreak, grief, release", keywords_zu: "Ukuphulwa kwenhliziyo, ukudumala, ukukhululwa", imageUrl: "https://ext.same-assets.com/2618794310/796967932.jpeg", meaning_en: "Heartbreak and sorrow, representing the pain that leads to growth.", meaning_zu: "Ukuphulwa kwenhliziyo nokudumala, emele ubuhlungu obudala ukukhula.", upright_en: "Heartbreak, emotional pain, sorrow, grief", upright_zu: "Ukuphulwa kwenhliziyo, ubuhlungu bezizwa, ukudumala, inkosi", reversed_en: "Negative self-talk, releasing pain, optimism", reversed_zu: "Ukukhuluma okubi ngokwakho, ukukhulula ubuhlungu, ukucacisa", eastern: "Through pain, we learn compassion for all beings." },
        { id_en: "Four_of_Swords", number: 53, suit: "swords", name: "Four of Swords", name_zu: "Four of Swords", keywords: "Rest, recovery, peace", keywords_zu: "Uku phumula, ukululama, ukuthula", imageUrl: "https://ext.same-assets.com/2618794310/3877715051.jpeg", meaning_en: "Rest and recovery, representing the need for peace and contemplation.", meaning_zu: "Ukuphumula nokululama, emele isidingo sokuthula nokucabanga.", upright_en: "Rest, relaxation, meditation, contemplation", upright_zu: "Ukuphumula, ukukhululeka, ukuzindla, ukucabanga", reversed_en: "Exhaustion, burn-out, deep contemplation", reversed_zu: "Ukuphelelwa amandla, ukushisa, ukucabanga okujulile", eastern: "Rest is essential for the warrior's spirit." },
        { id_en: "Five_of_Swords", number: 54, suit: "swords", name: "Five of Swords", name_zu: "Five of Swords", keywords: "Conflict, competition, defeat", keywords_zu: "Ukuphikisana, ukucasha, ukwehlulwa", imageUrl: "https://ext.same-assets.com/2618794310/354756656.jpeg", meaning_en: "Conflict and competition, representing the cost of victory.", meaning_zu: "Ukuphikisana nokucasha, emele inani lenqobonkulu.", upright_en: "Conflict, disagreements, competition, defeat", upright_zu: "Ukuphikisana, ukungavumelani, ukucasha, ukwehlulwa", reversed_en: "Reconciliation, making amends, past resentment", reversed_zu: "Ukuxolelanwa, ukwenza okulungile, ukugxeka kwesikhathi esedlule", eastern: "Victory at all costs may leave you with nothing." },
        { id_en: "Six_of_Swords", number: 55, suit: "swords", name: "Six of Swords", name_zu: "Six of Swords", keywords: "Transition, change, healing", keywords_zu: "Uku dlulisa, ushintsho, ukululama", imageUrl: "https://ext.same-assets.com/2618794310/3292037747.jpeg", meaning_en: "Transition to calmer waters, representing change and healing.", meaning_zu: "Uku dlulisa emanzini athule, emele ushintsho nokululama.", upright_en: "Transition, change, releasing baggage, rite of passage", upright_zu: "Uku dlulisa, ushintsho, ukukhulula imithwalo, isiko lokudlula", reversed_en: "Personal transition, resistance to change", reversed_zu: "Uku dlulisa komuntu, ukumelana noshintsho", eastern: "Moving toward calmer waters with wisdom." },
        { id_en: "Seven_of_Swords", number: 56, suit: "swords", name: "Seven of Swords", name_zu: "Seven of Swords", keywords: "Strategy, secrecy, deception", keywords_zu: "Isu, imfihlo, ukuqhatha", imageUrl: "https://ext.same-assets.com/2618794310/1395044309.jpeg", meaning_en: "Secretive action and strategy, representing the need for caution.", meaning_zu: "Isenzo esifihlakele nesu, emele isidingo sokucophelela.", upright_en: "Betrayal, deception, getting away with something", upright_zu: "Ukukhohlisa, ukuqhatha, ukuphuma nento", reversed_en: "Imposter syndrome, self-deceit, keeping secrets", reversed_zu: "I-imposter syndrome, ukuqhatha kwakho, ukugcina imfihlo", eastern: "Cleverness without wisdom leads to trouble." },
        { id_en: "Eight_of_Swords", number: 57, suit: "swords", name: "Eight of Swords", name_zu: "Eight of Swords", keywords: "Restriction, trapped, victim mentality", keywords_zu: "Uku cindezelwa, ukuvinjwa, ingqondo yomuntu ohlushwayo", imageUrl: "https://ext.same-assets.com/2618794310/17048538.jpeg", meaning_en: "Self-imposed restrictions, representing the prison of limiting beliefs.", meaning_zu: "Ukuncipha okuzimisile, emele itejisi lemibono ethiyile.", upright_en: "Negative thoughts, self-imposed restriction, victim mentality", upright_zu: "Imicabango emibi, ukuncipha okuzimisile, ingqondo yomuntu ohlushwayo", reversed_en: "Self-limiting beliefs, inner critic, releasing patterns", upright_zu: "Inkolelo ethiyile, umbhali wangaphakathi, ukukhulula izinkulungwane", eastern: "The prison of the mind can be escaped through awareness." },
        { id_en: "Nine_of_Swords", number: 58, suit: "swords", name: "Nine of Swords", name_zu: "Nine of Swords", keywords: "Anxiety, fear, nightmares", keywords_zu: "Uku xakatheka, ukwesaba, amaphupho amabi", imageUrl: "https://ext.same-assets.com/2618794310/1222711066.jpeg", meaning_en: "Anxiety and fear, representing the worries that haunt our minds.", meaning_zu: "Uku xakatheka nokwesaba, emele izinselelo ezi hlushayo ingqondo.", upright_en: "Anxiety, worry, fear, depression, nightmares", upright_zu: "Uku xakatheka, ukukhathazeka, ukwesaba, ukudumala, amaphupho amabi", reversed_en: "Inner turmoil, deep-seated fears, secrets", reversed_zu: "Ukudideka ngaphakathi, ukwesaba okujulile, imfihlo", eastern: "Fear is often greater than the reality it imagines." },
        { id_en: "Ten_of_Swords", number: 59, suit: "swords", name: "Ten of Swords", name_zu: "Ten of Swords", keywords: "Painful ending, betrayal, loss", keywords_zu: "Uku gcina okubuhlungu, ukukhohlakalo, ukulahlekelwa", imageUrl: "https://ext.same-assets.com/2618794310/2750576332.jpeg", meaning_en: "Painful endings, representing the completion of a difficult cycle.", meaning_zu: "Uku gcina okubuhlungu, emele ukuqedwa kwesinkulungwane esinzima.", upright_en: "Painful endings, deep wounds, betrayal, loss", upright_zu: "Uku gcina okubuhlungu, amanxeba ajulile, ukukhohlakalo, ukulahlekelwa", reversed_en: "Recovery, regeneration, resisting inevitable end", reversed_zu: "Ukuphila, ukuvuselelwa, ukumelana nokuphela okungenakwephikwa", eastern: "The darkest hour comes before the dawn." },
        { id_en: "Page_of_Swords", number: 60, suit: "swords", name: "Page of Swords", name_zu: "Page of Swords", keywords: "Curiosity, learning, communication", keywords_zu: "Ukufuna ukwazi, ukufunda, ukuxhumana", imageUrl: "https://ext.same-assets.com/2618794310/3267954128.jpeg", meaning_en: "A young messenger of truth, representing curiosity and new ideas.", meaning_zu: "Isithunywa esisha seqiniso, emele ukufuna ukwazi nemibono emisha.", upright_en: "New ideas, curiosity, thirst for knowledge, communication", upright_zu: "Imibono emisha, ukufuna ukwazi, ukunxanelwa ulwazi, ukuxhumana", reversed_en: "Self-expression, all talk no action, hurtful words", reversed_zu: "Ukuzibonakalisa, ukukhuluma kuphela, amazwi abuhlungu", eastern: "The eager student thirsting for knowledge." },
        { id_en: "Knight_of_Swords", number: 61, suit: "swords", name: "Knight of Swords", name_zu: "Knight of Swords", keywords: "Action, agility, decisiveness", keywords_zu: "Isenzo, ukushesha, ukuquma", imageUrl: "https://ext.same-assets.com/2618794310/1594391271.jpeg", meaning_en: "Swift action and decisiveness, representing the drive to succeed.", meaning_zu: "Isenzo esisheshayo nokuquma, emele ukudonsa impumelelo.", upright_en: "Ambitious, action-oriented, driven to succeed, fast-thinking", upright_zu: "Okunamahloni, okusebenzayo, okudonsa impumelelo, okucabanga ngokushesha", reversed_en: "Restless, unfocused, burnout, headstrong", reversed_zu: "Ongakwazi ukuphumula, ongaphosi khona, ukushisa, okunamehlo", eastern: "Swift action must be balanced with wisdom." },
        { id_en: "Queen_of_Swords", number: 62, suit: "swords", name: "Queen of Swords", name_zu: "Queen of Swords", keywords: "Independence, unbiased judgement, clear boundaries", keywords_zu: "Ukuzimele, ukwahlulela okungabi nalucingo, imingcele ecacile", imageUrl: "https://ext.same-assets.com/2618794310/3413914131.jpeg", meaning_en: "A wise independent woman, representing clarity and honest communication.", meaning_zu: "Owesifazane ohlakaniphile osezimele, emele ukucaca nokuxhumana okungalali.", upright_en: "Independence, unbiased judgement, clear boundaries", upright_zu: "Ukuzimele, ukwahlulela okungabi nalucingo, imingcele ecacile", reversed_en: "Overly-emotional, easily influenced, harsh", reversed_zu: "Okunezizwa kakhulu, okumthethwa kalula, okubuhlungu", eastern: "Clear perception that sees beyond illusion." },
        { id_en: "King_of_Swords", number: 63, suit: "swords", name: "King of Swords", name_zu: "King of Swords", keywords: "Mental clarity, authority, truth", keywords_zu: "Ukucaca kwengqondo, amandla, iqiniso", imageUrl: "https://ext.same-assets.com/2618794310/680141924.jpeg", meaning_en: "An authoritative ruler of truth, representing intellectual power and fairness.", meaning_zu: "Umbusi onamandla weqiniso, emele amandla engqondo nokufanisa.", upright_en: "Mental clarity, intellectual power, authority, truth", upright_zu: "Ukucaca kwengqondo, amandla engqondo, amandla, iqiniso", reversed_en: "Inner truth, misuse of power, manipulation", reversed_zu: "Iqiniso langaphakathi, ukusetshenziswa kabi kwamandla, ukuphatha", eastern: "The wise ruler who judges with fairness and clarity." },
        
        // ========== Pentacles (14 cards) ==========
        { id_en: "Ace_of_Pentacles", number: 64, suit: "pentacles", name: "Ace of Pentacles", name_zu: "Ace of Pentacles", keywords: "New opportunity, material beginning, prosperity", keywords_zu: "Ithuba elisha, ukuqala komzimba, ukuchuma", imageUrl: "https://ext.same-assets.com/2618794310/1343224792.jpeg", meaning_en: "The seed of material abundance, representing new financial opportunities.", meaning_zu: "Imbewu yokugcwele komzimba, emele amathuba amasha ezimali.", upright_en: "New financial opportunity, manifestation, abundance", upright_zu: "Ithuba elisha lezimali, ukubonakaliswa, ukugcwele", reversed_en: "Lost opportunity, lack of planning, security issues", reversed_zu: "Ithuba elilahlekile, ukuntuleka kohlelo, izinkinga zokuphepha", eastern: "The seed of material abundance is planted." },
        { id_en: "Two_of_Pentacles", number: 65, suit: "pentacles", name: "Two of Pentacles", name_zu: "Two of Pentacles", keywords: "Balance, resource management, multitasking", keywords_zu: "Uku linganisela, ukuphatha izinsiza, ukwenza imisebenzi eminingi", imageUrl: "https://ext.same-assets.com/2618794310/282208231.jpeg", meaning_en: "Balancing resources, representing the art of juggling priorities.", meaning_zu: "Uku linganisela izinsiza, emele umculo wokujongela amaphuzu ngokulinganisa.", upright_en: "Multiple priorities, time management, prioritization", upright_zu: "Amaphuzu amaningi, ukuphatha isikhathi, ukuqoka", reversed_en: "Over-committed, disorganization, need to reprioritize", reversed_zu: "Okunikezwe kakhulu, ukungahleleki, isidingo sokuqoka kabusha", eastern: "Dancing with the flow of changing circumstances." },
        { id_en: "Three_of_Pentacles", number: 66, suit: "pentacles", name: "Three of Pentacles", name_zu: "Three of Pentacles", keywords: "Teamwork, craftsmanship, skill", keywords_zu: "Ukusebenza ndawonye, ukuziqeqeka, isiphiwo", imageUrl: "https://ext.same-assets.com/2618794310/60147491.jpeg", meaning_en: "Craftsmen at work, representing teamwork and skilled craftsmanship.", meaning_zu: "Abasebenzi emsebenzini, emele ukusebenza ndawonye nokuziqeqeka okunamakhono.", upright_en: "Teamwork, collaboration, learning, implementation", upright_zu: "Ukusebenza ndawonye, ukusebenzisana, ukufunda, ukuqaliswa", reversed_en: "Disharmony, misalignment, working alone", reversed_zu: "Ukungahambisani, ukungahambisani, ukusebenza wena wedwa", eastern: "Mastery grows through dedicated practice and collaboration." },
        { id_en: "Four_of_Pentacles", number: 67, suit: "pentacles", name: "Four of Pentacles", name_zu: "Four of Pentacles", keywords: "Security, control, possession", keywords_zu: "Uku phepha, ukulawula, ukuba ne", imageUrl: "https://ext.same-assets.com/2618794310/3776370956.jpeg", meaning_en: "Protective posture over wealth, representing security and control.", meaning_zu: "Isimo sokuvikela phezu kobunengi, emele ukuphepha nokulawula.", upright_en: "Saving money, security, conservatism, scarcity", upright_zu: "Ukonga imali, ukuphepha, ukuvikela, ukuntuleka", reversed_en: "Over-spending, greed, self-protection", reversed_zu: "Ukuchitha kakhulu, ukunxanelwa, ukuzivikela", eastern: "Holding too tightly prevents the flow of abundance." },
        { id_en: "Five_of_Pentacles", number: 68, suit: "pentacles", name: "Five of Pentacles", name_zu: "Five of Pentacles", keywords: "Difficult times, isolation, hardship", keywords_zu: "Izikhathi ezinzima, ukuzithiba, ukushushuluza", imageUrl: "https://ext.same-assets.com/2618794310/2739515711.jpeg", meaning_en: "Difficult times and hardship, representing financial loss and isolation.", meaning_zu: "Izikhathi ezinzima nokushushuluza, emele ukulahlekelwa yimali nokuzithiba.", upright_en: "Financial loss, poverty, lack mindset, isolation", upright_zu: "Uku lahlekelwa yimali, ubu bomvu, ingqondo yokuntuleka, ukuzithiba", reversed_en: "Recovery from loss, spiritual poverty, finding help", reversed_zu: "Ukuphila emuva kokulahlekelwa, ubu bomvu bengqondo, ukuthola usizo", eastern: "Even in hardship, there is support if we look for it." },
        { id_en: "Six_of_Pentacles", number: 69, suit: "pentacles", name: "Six of Pentacles", name_zu: "Six of Pentacles", keywords: "Sharing, charity, generosity", keywords_zu: "Ukw abelana, isihthelo, ukunikela", imageUrl: "https://ext.same-assets.com/2618794310/3592873311.jpeg", meaning_en: "Sharing wealth, representing generosity and the balance of giving and receiving.", meaning_zu: "Ukw abelana ubunengi, emele ukunikela nokulinganisela kokupha nokwamukela.", upright_en: "Giving, receiving, sharing wealth, generosity", upright_zu: "Uku pha, ukwamukela, ukw abelana ubunengi, ukunikela", reversed_en: "Self-care, unpaid debts, one-sided charity", reversed_zu: "Ukuzondla, imali engakhokhwayo, isihthelo esisodwa", eastern: "Generosity flows in circles, returning to the giver." },
        { id_en: "Seven_of_Pentacles", number: 70, suit: "pentacles", name: "Seven of Pentacles", name_zu: "Seven of Pentacles", keywords: "Patience, long-term view, investment", keywords_zu: "Ukubekezela, umbono wesikhathi eside, ukutshala", imageUrl: "https://ext.same-assets.com/2618794310/3280572837.jpeg", meaning_en: "Waiting for harvest, representing patience and long-term investment.", meaning_zu: "Uku linda ukuvuna, emele ukubekezela nokutshala isikhathi eside.", upright_en: "Long-term view, sustainable results, perseverance", upright_zu: "Umbono wesikhathi eside, imiphumela eqhubekayo, ukuqhubeka", reversed_en: "Lack of long-term vision, limited success, impatience", reversed_zu: "Ukuntuleka kombono wesikhathi eside, impumelelo encane, ukungabi namphefumulo", eastern: "Patient cultivation brings abundant harvest." },
        { id_en: "Eight_of_Pentacles", number: 71, suit: "pentacles", name: "Eight of Pentacles", name_zu: "Eight of Pentacles", keywords: "Craftsmanship, learning, skill development", keywords_zu: "Uku ziqeqeka, ukufunda, ukuthuthukiswa kwamakhono", imageUrl: "https://ext.same-assets.com/2618794310/23217757.jpeg", meaning_en: "Craft learning and skill development, representing dedication to mastery.", meaning_zu: "Uku ziqeqeka nokuthuthukiswa kwamakhono, emele ukunikela ukufinyelela ubuhlakani.", upright_en: "Apprenticeship, repetitive tasks, mastery, skill development", upright_zu: "Ukufunda umsebenzi, imisebenzi ephindwe, ubuhlakani, ukuthuthukiswa kwamakhono", reversed_en: "Self-development, perfectionism, misdirected activity", reversed_zu: "Ukuthuthukiswa komuntu, ukuhlanganisela okugcwele, isenzo esingaqondile", eastern: "Through dedicated practice, mastery is achieved." },
        { id_en: "Nine_of_Pentacles", number: 72, suit: "pentacles", name: "Nine of Pentacles", name_zu: "Nine of Pentacles", keywords: "Abundance, luxury, self-sufficiency", keywords_zu: "Ukugcwele, ukudla okumnandi, ukuzimela", imageUrl: "https://ext.same-assets.com/2618794310/1557119712.jpeg", meaning_en: "An independent woman in luxury, representing self-sufficiency and abundance.", meaning_zu: "Owesifazane osezimele okudla okumnandi, emele ukuzimela nokugcwele.", upright_en: "Abundance, luxury, self-sufficiency, financial independence", upright_zu: "Ukugcwele, ukudla okumnandi, ukuzimela, inkululeko yezimali", reversed_en: "Self-worth, over-investment in work, hustling", reversed_zu: "Inani yomuntu, ukutshala okuningi emsebenzini, ukukhuthala", eastern: "Enjoying the fruits of your labor with gratitude." },
        { id_en: "Ten_of_Pentacles", number: 73, suit: "pentacles", name: "Ten of Pentacles", name_zu: "Ten of Pentacles", keywords: "Wealth, family, legacy, long-term success", keywords_zu: "Ubunengi, umndeni, ifa, impumelelo yesikhathi eside", imageUrl: "https://ext.same-assets.com/2618794310/408135939.jpeg", meaning_en: "Family wealth and legacy, representing long-term success and security.", meaning_zu: "Ubunengi bomndeni nefa, emele impumelelo yesikhathi eside nokuphepha.", upright_en: "Wealth, financial security, family, long-term success", upright_zu: "Ubunengi, ukuphepha kwezimali, umndeni, impumelelo yesikhathi eside", reversed_en: "The dark side of wealth, financial failure", reversed_zu: "Icala elimnyama lobunengi, ukwehlulwa kwezimali", eastern: "Lasting prosperity that benefits future generations." },
        { id_en: "Page_of_Pentacles", number: 74, suit: "pentacles", name: "Page of Pentacles", name_zu: "Page of Pentacles", keywords: "Manifestation, financial opportunity, skill development", keywords_zu: "Ukubonakaliswa, ithuba lezimali, ukuthuthukiswa kwamakhono", imageUrl: "https://ext.same-assets.com/2618794310/1709741478.jpeg", meaning_en: "A young learner, representing new opportunities and the study of material wisdom.", meaning_zu: "Umfundi omusha, emele amathuba amasha nokufunda ukuhlakanipha komzimba.", upright_en: "Manifestation, financial opportunity, skill development", upright_zu: "Ukubonakaliswa, ithuba lezimali, ukuthuthukiswa kwamakhono", reversed_en: "Lack of progress, procrastination, learning from failure", reversed_zu: "Ukuntuleka kokukhula, ukulibala, ukufunda ekuhambeni", eastern: "The diligent student of material wisdom." },
        { id_en: "Knight_of_Pentacles", number: 75, suit: "pentacles", name: "Knight of Pentacles", name_zu: "Knight of Pentacles", keywords: "Hard work, productivity, routine", keywords_zu: "Umsebenzi onzima, ukukhiqiza, isiko", imageUrl: "https://ext.same-assets.com/2618794310/4266169231.jpeg", meaning_en: "A diligent worker, representing patience, responsibility, and steady progress.", meaning_zu: "Umsebenzi onzima, emele ukubekezela, umthwalo, nokuqhubeka okuqhubekayo.", upright_en: "Hard work, productivity, routine, conservatism", upright_zu: "Umsebenzi onzima, ukukhiqiza, isiko, ukuvikela", reversed_en: "Self-discipline, boredom, perfectionism", reversed_zu: "Isiko somuntu, ukudida, ukuhlanganisela okugcwele", eastern: "Steady progress through persistent effort." },
        { id_en: "Queen_of_Pentacles", number: 76, suit: "pentacles", name: "Queen of Pentacles", name_zu: "Queen of Pentacles", keywords: "Nurturing, practical, providing, working parent", keywords_zu: "Ukondla, okusebenzayo, ukupha, umzali osebenzayo", imageUrl: "https://ext.same-assets.com/2618794310/4191357970.jpeg", meaning_en: "A nurturing woman, representing practicality and abundance that supports life.", meaning_zu: "Owesifazane okondlayo, emele ukusebenza nokugcwele okusekelwa ubomi.", upright_en: "Nurturing, practical, providing financially, working parent", upright_zu: "Ukondla, okusebenzayo, ukupha ngemali, umzali osebenzayo", reversed_en: "Financial independence, self-care, work-home conflict", reversed_zu: "Inkululeko yezimali, ukuzondla, ukuphikisana kwemsebenzi nekhaya", eastern: "Nurturing abundance that supports all of life." },
        { id_en: "King_of_Pentacles", number: 77, suit: "pentacles", name: "King of Pentacles", name_zu: "King of Pentacles", keywords: "Wealth, business, leadership, security", keywords_zu: "Ubunengi, ibhizinisi, ukuhola, ukuphepha", imageUrl: "https://ext.same-assets.com/2618794310/2955514101.jpeg", meaning_en: "A successful businessman, representing mastery of material resources.", meaning_zu: "Umuntu webhizinisi ophumelelayo, emele ukuqonda izinsiza zomzimba.", upright_en: "Wealth, business, leadership, security, discipline", upright_zu: "Ubunengi, ibhizinisi, ukuhola, ukuphepha, isiko", reversed_en: "Financial ineptitude, obsession with wealth and status", reversed_zu: "Ukungakwazi ukuphatha imali, ukunxanelwa bubunengi nesimo", eastern: "Wise stewardship of material resources." }
    ];

    // Current language
    let currentLanguage = localStorage.getItem('tarot-lang') || 'en';
    
    // Get localized card data
    function getLocalizedCard(card, lang) {
        const isZu = lang === 'zu';
        return {
            id: card.number,
            id_en: card.id_en,
            number: card.number,
            suit: card.suit,
            name: isZu ? card.name_zu : card.name,
            name_en: card.name,
            name_zu: card.name_zu,
            keywords: isZu ? (card.keywords_zu || card.keywords) : card.keywords,
            description: isZu ? (card.meaning_zu || card.meaning_en) : card.meaning_en,
            meaning_en: card.meaning_en,
            meaning_zu: card.meaning_zu,
            upright: isZu ? (card.upright_zu || card.upright_en) : card.upright_en,
            upright_en: card.upright_en,
            upright_zu: card.upright_zu,
            reversed: isZu ? (card.reversed_zu || card.reversed_en) : card.reversed_en,
            reversed_en: card.reversed_en,
            reversed_zu: card.reversed_zu,
            eastern: card.eastern,
            imageUrl: card.imageUrl,
            fallbackImage: 'images/tarot/back.svg'
        };
    }
    
    // Get all cards for a specific language
    function getLocalizedAllCards(lang) {
        const language = lang || currentLanguage;
        return tarotCards.map(card => getLocalizedCard(card, language));
    }
    
    // Get a specific card by name or id
    function getCardByName(name, lang) {
        const language = lang || currentLanguage;
        const card = tarotCards.find(c => 
            c.id_en === name || 
            c.name === name || 
            c.name_zu === name
        );
        return card ? getLocalizedCard(card, language) : null;
    }
    
    // Initialize/Update the global allCards array
    window.updateAllCardsLanguage = function(lang) {
        currentLanguage = lang || localStorage.getItem('tarot-lang') || 'en';
        const newCards = getLocalizedAllCards(currentLanguage);
        
        // Update global allCards if it exists
        if (typeof window.allCards !== 'undefined') {
            window.allCards.length = 0;
            window.allCards.push(...newCards);
        } else {
            window.allCards = newCards;
        }
        
        return newCards;
    };
    
    // Listen for language changes
    window.addEventListener('languageChanged', function(e) {
        updateAllCardsLanguage(e.detail.lang);
    });
    
    // Initialize on load - delay to ensure script.js has loaded
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            updateAllCardsLanguage(currentLanguage);
        }, 0);
    });
    
    // Export
    window.TarotI18nData = {
        getCards: getLocalizedAllCards,
        getCardByName: getCardByName,
        getAllRawCards: () => tarotCards
    };
    
    // Also provide direct access function
    window.getLocalizedAllCards = getLocalizedAllCards;
    
})();
