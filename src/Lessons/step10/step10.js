import lowertheshelf from './audio/phrases/Lower the shelf.mp3';
import makethebed from './audio/phrases/Make the bed.mp3';
import mattress from './audio/phrases/Mattress.mp3';
import shelf from './audio/phrases/Shelf.mp3';

import l1 from './audio/dialogue/L1.mp3';
import l2 from './audio/dialogue/L2.mp3';
import l3 from './audio/dialogue/L3.mp3';
import l4 from './audio/dialogue/L4.mp3';
import l5 from './audio/dialogue/L5.mp3';
import l6 from './audio/dialogue/L6.mp3';
import l7 from './audio/dialogue/L7.mp3';
import l8 from './audio/dialogue/L8.mp3';
import l9 from './audio/dialogue/L9.mp3';
import l10 from './audio/dialogue/L10.mp3';
import l11 from './audio/dialogue/L11.mp3';
import l12 from './audio/dialogue/L12.mp3';
import l13 from './audio/dialogue/L13.mp3';

import imgshelf from './img/shelf.png';
import imgwagon from './img/wagon100.png';

const step10 = {
    name: {
        pol: "Krok 10",
        eng: "Step 10"
    },
    title: {
        pol: "W pociągu",
        eng: "In train",
        img: imgwagon,
        alt: "Wagon"
    },
    phrases: [
        {
            type: "phrase",
            pol: "materac",
            eng: "mattress",
            rus: "матрас",
            audio: mattress,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "półka",
            eng: "shelf",
            rus: "полка",
            audio: shelf,
            img: imgshelf,
            alt: "shelf"
        },
        {
            type: "phrase",
            pol: "spuścić półkę",
            eng: "lower the shelf",
            rus: "опустить полку",
            audio: lowertheshelf,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "posłać łóżko",
            eng: "make the bed",
            rus: "застелить постель",
            audio: makethebed,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Konduktor pociągu",
            nameeng: "Train conductor",
            pol: "Dzień dobry! Pana bilet!",
            eng: "Hello! Your ticket!",
            rus: "Добрый день! Ваш билет!",
            audio: l1
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tutaj, proszę.",
            eng: "Here you are.",
            rus: "Вот, пожалуйста.",
            audio: l2
        },
        {
            namepol: "Konduktor pociągu",
            nameeng: "Train conductor",
            pol: "Pan ma miejsce 23. Zapraszam!",
            eng: "You have a seat 23. Come on in!",
            rus: "У Вас место двадцать три. Проходите!",
            audio: l3
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzień dobry!",
            eng: "Hello!",
            rus: "Добрый день!",
            audio: l4
        },
        {
            namepol: "Sąsiad w przedziale",
            nameeng: "Neighbor by compartment",
            pol: "Dzień dobry!",
            eng: "Hello!",
            rus: "Добрый день!",
            audio: l5
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Pan jedzi do Kijowa?",
            eng: "Do you go to Kiev?",
            rus: "Вы до Киева?",
            audio: l6
        },
        {
            namepol: "Sąsiad w przedziale",
            nameeng: "Neighbor by compartment",
            pol: "Nie, schodzę wcześniej. Pan jest obcokrajowcem? U Pana słychać akcent.",
            eng: "No, I leave earlier. Are you a foreigner? You speack with an accent.",
            rus: "Нет, я выхожу раньше. Вы иностранец? У Вас слышен акцент.",
            audio: l7
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tak, jestem z Polski.",
            eng: "Yes, I'm from Poland.",
            rus: "Да, я из Польши.",
            audio: l8
        },
        {
            namepol: "Sąsiad w przedziale",
            nameeng: "Neighbor by compartment",
            pol: "O, Polska! Byłem w Krakiwie. Macie dużo pięknej architektury, ale często pada.",
            eng: "Oh, Poland! I was in Krakow. You have a lot of beautiful architecture, but it often rains.",
            rus: "О, Польша! Я был в Кракове. У вас много красивой архитектуры, но часто идут дожди.",
            audio: l9
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tak, to prawda. Mógłby Pan podpowiedzieć, gdzie wziąć pościel? Wcześniej nie jeździłem takimi pociągami.",
            eng: "Yes, it's true. Could you tell me where to take a bed linen? I have not traveled on such trains before.",
            rus: "Да, это правда. Вы не подскажете, где взять постель? Я раньше не ездил в таких поездах.",
            audio: l10
        },
        {
            namepol: "Sąsiad w przedziale",
            nameeng: "Neighbor by compartment",
            pol: "Pościel rozdaje konduktor, kiedy będzie sprawdzał bilety. O, już jedziemy!",
            eng: "The conductor gives the bed linen when he will check the tickets. Oh, we're going!",
            rus: "Постель раздаёт проводник, когда будет проверять билеты. О, мы уже едем!",
            audio: l11
        },
        {
            namepol: "Konduktor pociągu",
            nameeng: "Train conductor",
            pol: "Proszę Państwa bilety! Proszę, Państwa pościele. Jeżeli Państwo będą chcieli herbatę lub kawę, to zapraszam!",
            eng: "Your tickets, please! Here's your bed linen. If you would like tea or coffee, tell me!",
            rus: "Ваши билеты, пожалуйста! Вот, ваше постельное бельё. Если пожелаете чай или кофе, то обращайтесь!",
            audio: l12
        },
        {
            namepol: "Sąsiad w przedziale",
            nameeng: "Neighbor by compartment",
            pol: "Pomógłby mi Pan spóścić półkę? Dzięki!",
            eng: "Could you help me lower the shelf? Thank!",
            rus: "Вы не поможете мне опустить полку? Спасибо!",
            audio: l13
        },
    ],    
}

export default step10;