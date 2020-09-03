import backpack from './audio/phrases/Backpack.mp3';
import bye from './audio/phrases/Bye.mp3';
import byeforfriends from './audio/phrases/Bye (for friends).mp3';
import doc from './audio/phrases/Dokument.mp3';
import goodday from './audio/phrases/Good day.mp3';
import hello from './audio/phrases/Hello.mp3';
import hi from './audio/phrases/Hi.mp3';
import iamfrompoland from './audio/phrases/I am from Poland, from Krakow.mp3';
import lengthofstay from './audio/phrases/Length of stay.mp3';
import luggage from './audio/phrases/Luggage.mp3';
import mynameis from './audio/phrases/My name is Aleksander Kowalski.mp3';
import no from './audio/phrases/No.mp3';
import openyoursuotcase from './audio/phrases/Open your suitcase.mp3';
import passport from './audio/phrases/Passport.mp3';
import please from './audio/phrases/Please.mp3';
import show from './audio/phrases/Show.mp3';
import showyourthings from './audio/phrases/Show your things.mp3';
import sorry from './audio/phrases/Sorry.mp3';
import suitcase from './audio/phrases/Suitcase.mp3';
import thanks from './audio/phrases/Thanks.mp3';
import thepurposeofstay from './audio/phrases/The purpose of stay.mp3';
import thereasonforavisit from './audio/phrases/The reason for a visit.mp3';
import things from './audio/phrases/Things.mp3';
import visa from './audio/phrases/Visa.mp3';
import whatisyourname from './audio/phrases/What is your name.mp3';
import whereareyoufrom from './audio/phrases/Where are you from.mp3';
import yes from './audio/phrases/Yes.mp3';
import yourpassport from './audio/phrases/Your passport.mp3';
import yourvisa from './audio/phrases/Your visa.mp3';

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
import l14 from './audio/dialogue/L14.mp3';
import l15 from './audio/dialogue/L15.mp3';
import l16 from './audio/dialogue/L16.mp3';
import l17 from './audio/dialogue/L17.mp3';
import l18 from './audio/dialogue/L18.mp3';
import l19 from './audio/dialogue/L19.mp3';
import l20 from './audio/dialogue/L20.mp3';
import l21 from './audio/dialogue/L21.mp3';

const step1 = {
    name: {
        pol: "Krok 1",
        eng: "Step 1"
    },
    title: {
        pol: "Kontrola graniczna",
        eng: "Border control",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "tak",
            eng: "yes",
            rus: "да",
            audio: yes,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "nie",
            eng: "no",
            rus: "нет",
            audio: no,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "przepraszam",
            eng: "sorry / excuse me",
            rus: "извините",
            audio: sorry,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "dziękuję",
            eng: "thanks",
            rus: "спасибо",
            audio: thanks,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "proszę",
            eng: "please",
            rus: "пожалуйста",
            audio: please,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Dzień dobry!",
            eng: "Good day!",
            rus: "Добрый день!",
            audio: goodday,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Dzień dobry! (dosłownie: \u{0022}bądźcie zdrowi\u{0022}",
            eng: "Hello!",
            rus: "Здравствуйте!",
            audio: hello,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Cześć!",
            eng: "Hi! (for friends)",
            rus: "Привет!",
            audio: hi,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Do widzenia!",
            eng: "Bye!",
            rus: "До свиданья!",
            audio: bye,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Na razie!",
            eng: "Bye! (for friends)",
            rus: "Пока!",
            audio: byeforfriends,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "dokument",
            eng: "document",
            rus: "документ",
            audio: doc,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "paszport",
            eng: "passport",
            rus: "паспорт",
            audio: passport,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wiza",
            eng: "visa",
            rus: "виза",
            audio: visa,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Proszę pokazać....",
            eng: "Show...",
            rus: "Покажите....",
            audio: show,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "Pana/Pani paszport",
            eng: "your passport",
            rus: "Ваш паспорт",
            audio: yourpassport,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "Pana/pani wizę",
            eng: "your visa",
            rus: "Вашу визу",
            audio: yourvisa,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "cel pobytu",
            eng: "the purpose of stay",
            rus: "цель пребывания",
            audio: thepurposeofstay,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "cel wizyty",
            eng: "the reason for a visit",
            rus: "цель визита",
            audio: thereasonforavisit,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "długość pobytu",
            eng: "length of stay",
            rus: "срок пребывания",
            audio: lengthofstay,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "waliza",
            eng: "suitcase",
            rus: "чемодан",
            audio: suitcase,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "plecak",
            eng: "backpack",
            rus: "рюкзак",
            audio: backpack,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bagaż",
            eng: "luggage",
            rus: "багаж",
            audio: luggage,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "rzeczy",
            eng: "things",
            rus: "вещи",
            audio: things,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Jak Pan/Pani się nazywa?",
            eng: "What is your name?",
            rus: "Как Вас зовут?",
            audio: whatisyourname,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Nazywam się Aleksander Kowalski.",
            eng: "My name is Aleksander Kowalski.",
            rus: "Меня зовут Александр Ковальский.",
            audio: mynameis,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Skąd Pan/Pani jest?",
            eng: "Where are you from?",
            rus: "Откуда Вы?",
            audio: whereareyoufrom,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Jestem z Polski, z Krakowa.",
            eng: "I'm from Poland, from Krakow.",
            rus: "Я из Польши, из Кракова.",
            audio: iamfrompoland,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Proszę pokazać Pana/Pani rzeczy.",
            eng: "Show your things.",
            rus: "Покажите Ваши вещи.",
            audio: showyourthings,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Proszę otworzyć walizę.",
            eng: "Open the suitcase.",
            rus: "Откройте чемодан.",
            audio: openyoursuotcase,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, gdzie mogę otrzymać bagaż?",
            eng: "Excuse me, where can I get the luggage?",
            rus: "Извините, где я могу получить багаж?",
            audio: l1
        },
        {
            namepol: "Pracownik lotniska",
            nameeng: "Airport worker",
            pol: "Tam.",
            eng: "Over there.",
            rus: "Вон там.",
            audio: l2
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Dzień dobry! Pana dokumenty!",
            eng: "Good day! Your documents!",
            rus: "Добрый день! Ваши документы!",
            audio: l3
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Proszę, mój paszport.",
            eng: "Please, my passport",
            rus: "Пожалуйста, мой паспорт.",
            audio: l4
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Proszę pokazać wizę.",
            eng: "Show your visa.",
            rus: "Покажите Вашу визу.",
            audio: l5
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Proszę.",
            eng: "Please.",
            rus: "Пожалуйста.",
            audio: l6
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Jak Pan się nazywa?",
            eng: "What is your name?",
            rus: "Как Вас зовут?",
            audio: l7
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, mógłby Pan powtórzyć?",
            eng: "Excuse me, can you repeat it?",
            rus: "Извините, можете повторить?",
            audio: l8
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Pana imię i nazwiski?",
            eng: "Your name and surname?",
            rus: "Ваше имя и фамилия?",
            audio: l9
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Aleksander Kowalski.",
            eng: "Aleksander Kowalski.",
            rus: "Александр Ковальский.",
            audio: l10
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Cel pobytu?",
            eng: "The purpose of the visit?",
            rus: "Цель визита?",
            audio: l11
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Turystyka.",
            eng: "Tourism.",
            rus: "Туризм.",
            audio: l12
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Długość pobytu?",
            eng: "Length of stay?",
            rus: "Продолжительность пребывания?",
            audio: l13
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Proszę powtórzyć!",
            eng: "Repeat, please!",
            rus: "Повторите, пожалуйста!",
            audio: l14
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Termin pobytu. Jak długo Pan będzie w kraju?",
            eng: "Length of stay. How long will you be in the country?",
            rus: "Срок пребывания. Как долго Вы будете в стране?",
            audio: l15
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Pięć dni.",
            eng: "Five days.",
            rus: "Пять дней.",
            audio: l16
        },
        {
            namepol: "Strażnik graniczny",
            nameeng: "Border guard",
            pol: "Proszę iść dalej. Następny!",
            eng: "Go ahead. Next!",
            rus: "Проходите. Следующий!",
            audio: l17
        },
        {
            namepol: "Celnik",
            nameeng: "Customs officer",
            pol: "To Pana waliza?",
            eng: "Is this your suitcase?",
            rus: "Это Ваш чемодан?",
            audio: l18
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Nie. Ja mam tylko ten plecak.",
            eng: "No. I only have this backpack.",
            rus: "Нет. У меня только этот рюкзак.",
            audio: l19
        },
        {
            namepol: "Celnik",
            nameeng: "Customs officer",
            pol: "Proszę otworzyć.",
            eng: "Open it.",
            rus: "Откройте его.",
            audio: l20
        },
        {
            namepol: "Celnik",
            nameeng: "Customs officer",
            pol: "Wszystko w porządku. Proszę.",
            eng: "Everything is good. You are welcome.",
            rus: "Всё в порядке. Проходите.",
            audio: l21
        },
    ],
    addition: [
        {
            pol: "Forma grzecznościowa w języku rosyjskim buduje się w liczbie mnogiej drugiej osoby – na podstawie zaimka \u{0022}Вы\u{0022}. Stanowi to poważną różnicę z językiem polskim, gdzie forma grzecznościowa buduje się w liczbie pojedynczej trzeciej osoby – Pan/Pani. Dosłownie zdanie \u{0022}Czy mógłby Pan mi pomóc?\u{0022} będzie takie: \u{0022}Czy moglibyście Wy mi pomóc?\u{0022}",
            eng: "The polite form of address in Russian is built in the plural of the second person - on the basis of the pronoun \u{0022}Вы\u{0022} (you). So the same as in English.",
            img: null,
            alt: null
        },
    ]
}

export default step1;