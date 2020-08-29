import titleimg from './img/test1.jpg';
import testaud1 from './audio/test1.mp3';
import testaud2 from './audio/test2.mp3';
import testaud3 from './audio/test3.mp3';
import testaud4 from './audio/test3.mp3';

const test1 = {
    name: {
        pol: "Dodatek 3: czasowniki",
        eng: "Test 1"
    },
    title: {
        pol: "Strona testowania 1",
        eng: "Test Page 1",
        img: titleimg,
        alt: "Test img"
    },
    phrases: [
        {
            type: "phrase",
            pol: "Cześć!",
            eng: "Hi!",
            rus: "Привет!",
            audio: testaud1
        },
        {
            type: "phrase",
            pol: "Gdzie tu jest...?",
            eng: "Where is here...?",
            rus: "Где здесь...?",
            audio: testaud2
        },
        {
            type: "add",
            pol: "toaleta",
            eng: "toilet",
            rus: "туалет",
            audio: testaud3
        },
        {
            type: "add",
            pol: "telefon",
            eng: "phone",
            rus: "телефон",
            audio: testaud4,
            img: titleimg
        },
        {
            type: "add",
            pol: "lotnisko",
            eng: "airport",
            rus: "аэропорт"
        },
        {
            type: "add",
            pol: "Przepraszam! Chciałbym się dowiedzieć o tym, gdzie tu można palić",
            eng: "Where is here...?",
            rus: "Извините! Я бы хотел узнать, где здесь можно курить.",
            audio: testaud2
        },
    ],
    dialogue: [
        {
            name: "Vova",
            pol: "Cześć!",
            eng: "Hi!",
            rus: "Привет!",
            audio: testaud1
        },
        {
            name: "Olek",
            pol: "Cześć! Miło Cie widzieć!",
            eng: "Hi! Nice to meet you!",
            rus: "Привет! Рад тебя видеть!",
            audio: testaud2
        },
        {
            name: "Vova",
            pol: "Jak doleciałeś?",
            eng: "How did you get there?",
            rus: "Как долетел?"
        },
        {
            name: "Olek",
            pol: "Bardzo dobrze.",
            eng: "Very nice.",
            rus: "Очень хорошо.",
            audio: testaud3
        },
        {
            pol: "Co już widziałeś w mieście?",
            eng: "What did you already see in the city?",
            rus: "Что ты уже посмотрел в городе?",
            audio: testaud4
        },
        {
            pol: "Byłem w Muzeum Narodowym.",
            eng: "I was in the National Museum.",
            rus: "Я был в Национальном Музее."
        },
        {
            pol: "Pójź jeszcze na festiwal filmowy.",
            eng: "Go to the film festival.",
            rus: "Сходи еще на фестиваль фильмов"
        },
        {
            pol: "Obowiązkowo! Dzięki za polecenie!",
            eng: "Necessarily! Thank you for rekomendation",
            rus: "Обязательно! Спасибо за совет!"
        },
    ],
    addition: [
        {
            pol: "Dodatek testowy Reprehenderit sint sit labore pariatur labore sint deserunt aute nostrud deserunt pariatur sit. Consectetur mollit velit officia ullamco. Magna esse in fugiat veniam est labore aliqua occaecat ut in. Reprehenderit fugiat commodo sit ullamco do deserunt adipisicing incididunt sunt sunt commodo ex. Adipisicing est ipsum incididunt deserunt aliqua. Deserunt qui esse veniam et consectetur qui id commodo nulla. Exercitation nostrud aute nisi qui nostrud ad deserunt nisi. Cupidatat in irure elit quis.",
            eng: "Test addition"
        },
        {
            pol: "Dodatek testowy 2 Dodatek testowy Reprehenderit sint sit labore pariatur labore sint deserunt aute nostrud deserunt pariatur sit. Consectetur mollit velit officia ullamco. Magna esse in fugiat veniam est labore aliqua occaecat ut in. Reprehenderit fugiat commodo sit ullamco do deserunt adipisicing incididunt sunt sunt commodo ex. Adipisicing est ipsum incididunt deserunt aliqua. Deserunt qui esse veniam et consectetur qui id commodo nulla. Exercitation nostrud aute nisi qui nostrud ad deserunt nisi. Cupidatat in irure elit quis.",
            eng: "Test addition 2",
            img: titleimg
        }
    ]
}

export default test1;