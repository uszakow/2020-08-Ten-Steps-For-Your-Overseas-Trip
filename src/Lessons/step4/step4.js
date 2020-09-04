import beach from './audio/phrases/Beach.mp3';
import beautifularchotecture from './audio/phrases/Beautiful architecture.mp3';
import cinema from './audio/phrases/Cinema.mp3';
import cometothesea from './audio/phrases/Come to the sea.mp3';
import fine from './audio/phrases/Fine.mp3';
import friendlypeople from './audio/phrases/Friendly people.mp3';
import goodandyou from './audio/phrases/Good and you.mp3';
import haveaniceday from './audio/phrases/Have a nice day.mp3';
import howareyou from './audio/phrases/How are you.mp3';
import iamfromwarsawandyou from './audio/phrases/I am from Warsaw and you.mp3';
import ihaveneverbeeninukraine from './audio/phrases/I have never been in Ukraine.mp3';
import iwasinbelaruslastyear from './audio/phrases/I was in Belarus last year.mp3';
import memorial from './audio/phrases/Memorial.mp3';
import mickiewiczmonument from './audio/phrases/Mickiewicz monument.mp3';
import monument from './audio/phrases/Monument.mp3';
import monumentofarchitecture from './audio/phrases/Monument of architecture.mp3';
import network from './audio/phrases/Network.mp3';
import networkname from './audio/phrases/Network name.mp3';
import nicetomeetyou1 from './audio/phrases/Nice to meet you1.mp3';
import nicetomeetyou2 from './audio/phrases/Nice to meet you2.mp3';
import outoftown from './audio/phrases/Out of town.mp3';
import resort from './audio/phrases/Resort.mp3';
import resorttown from './audio/phrases/Resort town.mp3';
import sightseeing from './audio/phrases/Sightseeing.mp3';
import statue from './audio/phrases/Statue.mp3';
import thiscityisveryold from './audio/phrases/This city is very old.mp3';
import thisisaresorttown from './audio/phrases/This is a resort town.mp3';
import victorymomnument from './audio/phrases/Victory monument.mp3';
import warmsea from './audio/phrases/Warm sea.mp3';
import whatisyourname from './audio/phrases/What is your name.mp3';
import whereareyoufrom from './audio/phrases/Where are you from.mp3';
import wifi from './audio/phrases/Wifi.mp3';
import wifipassword from './audio/phrases/WiFi password.mp3';
import youtoo from './audio/phrases/You too.mp3';
import zoo from './audio/phrases/Zoo.mp3';

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

import imgcinema from './img/cinema.png';
import imgmickiewiczmonument from './img/mickiewiczmonument.png';
import imgstatue from './img/statue.png';
import imgvictorymonument from './img/victorymonument.png';
import imgzoo from './img/zoo.png';
import { memo } from 'react';

const step4 = {
    name: {
        pol: "Krok 4",
        eng: "Step 4"
    },
    title: {
        pol: "Sąsiad w hostelu",
        eng: "Neighbor at the hostel",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "Jak się nazywasz?",
            eng: "What is your name?",
            rus: "Как тебя зовут?",
            audio: whatisyourname,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Miło Cię poznać!",
            eng: "Nice to meet you!",
            rus: "Приятно познакомиться!",
            audio: nicetomeetyou1,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Bardzo mi miło!",
            eng: "Nice to meet you!",
            rus: "Очень приятно!",
            audio: nicetomeetyou2,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Jak się masz?",
            eng: "How are you?",
            rus: "Как дела?",
            audio: howareyou,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Dobrze. A Ty?",
            eng: "Good. And you?",
            rus: "Хорошо. А у тебя?",
            audio: goodandyou,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "W porządku.",
            eng: "Fine.",
            rus: "Нормально.",
            audio: fine,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Skąd jesteś?",
            eng: "Where are you from?",
            rus: "Откуда ты?",
            audio: whereareyoufrom,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Jestem z Warszawy. A Ty?",
            eng: "I am from Warsaw. And you?",
            rus: "Я из Варшавы. А ты?",
            audio: iamfromwarsawandyou,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Nigdy nie byłem na Ukrainie.",
            eng: "I have never been in Ukraine.",
            rus: "Я никогда не был в Украине.",
            audio: ihaveneverbeeninukraine,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Byłem na Białorusi w ubiegłym roku.",
            eng: "I was in Belarus last year.",
            rus: "Я был в Беларуси в прошлом году.",
            audio: iwasinbelaruslastyear,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "piękna architektura",
            eng: "beautifful architecture",
            rus: "красивая архитектура",
            audio: beautifularchotecture,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "ciepłe morze",
            eng: "warm sea",
            rus: "тёплое море",
            audio: warmsea,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "przyjechać nad morze",
            eng: "come to the sea",
            rus: "приехать на море",
            audio: cometothesea,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "plaża",
            eng: "beach",
            rus: "пляж",
            audio: beach,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "resort",
            eng: "resort",
            rus: "курорт",
            audio: resort,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "miejscowość wypoczynkowa",
            eng: "resort town",
            rus: "курортный город",
            audio: resorttown,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "przyjacielscy ludzie",
            eng: "friendly people",
            rus: "приветливые люди",
            audio: friendlypeople,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "atrakcja turystyczna",
            eng: "sightseeing",
            rus: "достопримечательность",
            audio: sightseeing,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "posąg",
            eng: "statue",
            rus: "статуя",
            audio: statue,
            img: imgstatue,
            alt: "statue"
        },
        {
            type: "phrase",
            pol: "pomnik",
            eng: "monument",
            rus: "памятник",
            audio: monument,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "monument",
            eng: "memorial",
            rus: "монумент",
            audio: memorial,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "kino",
            eng: "cinema",
            rus: "кинотеатр / кино",
            audio: cinema,
            img: imgcinema,
            alt: "cinema"
        },
        {
            type: "phrase",
            pol: "zoo",
            eng: "zoo",
            rus: "зоопарк",
            audio: zoo,
            img: imgzoo,
            alt: "zoo"
        },
        {
            type: "phrase",
            pol: "zabytek architektury",
            eng: "monuments of architecture",
            rus: "памятник архитектуры",
            audio: monumentofarchitecture,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pomnik Mickiewicza",
            eng: "Mickiewicz monument",
            rus: "памятник Мицкевичу",
            audio: mickiewiczmonument,
            img: imgmickiewiczmonument,
            alt: "Mickiewicz monument"
        },
        {
            type: "phrase",
            pol: "pomnik Zwycięstwa",
            eng: "Victory monument",
            rus: "монумент Победы",
            audio: victorymomnument,
            img: imgvictorymonument,
            alt: "Victory monument"
        },
        {
            type: "phrase",
            pol: "To miasto jest bardzo dawne. W nim jest wiele zabytków architektonicznych.",
            eng: "This city is very old. There are many architectural monuments in it.",
            rus: "Этот город очень старый. В нём много памятников архитектуры.",
            audio: thiscityisveryold,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "To jest miasto uzdrowiskowe. Ludzie przyjeżdżają tu nad morze.",
            eng: "This is a resort town. People come here by the sea.",
            rus: "Это курортный город. Люди приезжают сюда на море.",
            audio: thisisaresorttown,
            img: null,
            alt: null
        },        
        {
            type: "phrase",
            pol: "poza miastem",
            eng: "out of town",
            rus: "за городом",
            audio: outoftown,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Miłego dnia!",
            eng: "Have a nice day!",
            rus: "Хорошего дня!",
            audio: haveaniceday,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Wzajemnie!",
            eng: "You too!",
            rus: "Взаимно!",
            audio: youtoo,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Wi-Fi",
            eng: "Wi-Fi",
            rus: "вай-фай",
            audio: wifi,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "sieć",
            eng: "network",
            rus: "сеть",
            audio: network,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "nazwa sieci",
            eng: "network name",
            rus: "название сети",
            audio: networkname,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "hasło do Wi-Fi",
            eng: "Wi-Fi password",
            rus: "пароль от вай-фая",
            audio: wifipassword,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Cześć! Wygląda na to, że jesteśmy sąsiadami!",
            eng: "Hello! Looks like we are neighbors!",
            rus: "Привет! Похоже, мы соседи!",
            audio: l1
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Cześć!",
            eng: "Hi!",
            rus: "Привет!",
            audio: l2
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Jak się nazywasz?",
            eng: "What is your name?",
            rus: "Как тебя зовут?",
            audio: l3
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Olek. A Ty?",
            eng: "Olek. And you?",
            rus: "Олек. А тебя?",
            audio: l4
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Dima. Bardzo mi miło! Skąd jesteś?",
            eng: "Dima. Nice to meet you! Where are you from?",
            rus: "Дима. Очень приятно! Ты откуда?",
            audio: l5
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Jestem z Polski, z Wrocławia. A Ty?",
            eng: "I'm from Poland, from Wroclaw. And you?",
            rus: "Я из Польши, из Вроцлава. А ты?",
            audio: l6
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Jestem z Odessy. Nigdy nie byłem w Polsce.",
            eng: "I'm from Odessa. I have never been to Poland.",
            rus: "Я из Одессы. Я никогда не был в Польше.",
            audio: l7
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przyjeżdżaj! W naszym mieście jest mnóstwo pięknej architektury. Do nas przyjeżdża wiele turystów.",
            eng: "Come! We have a lot of beautiful architecture in our city. Many tourists come to us.",
            rus: " Приезжай! У нас в городе много красивой архитектуры. К нам приезжает много туристов.",
            audio: l8
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Tak, chciałbym przyjechać. Przyjeżdżaj przy okazji do Odessy. U nas latem jest bardzo gorąco i wielu ludzi przyjeżdżają odpocząć nad morzem. Długo tu będziesz?",
            eng: "Yes, I would like to come. Come to Odessa sometime. It is very hot here in summer and many people come to relax at the sea. Are you for long?",
            rus: "Да, я бы хотел приехать. Ты приезжай как-нибудь в Одессу. У нас летом очень жарко и многие приезжают отдохнуть на море. Ты надолго?",
            audio: l9
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Będę tu kilka dni.",
            eng: "I'll be here for a few days.",
            rus: "Я тут буду несколько дней.",
            audio: l10
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Koniecznie zobacz zamek! Znajduje się poza miastem, ale tem łatwo dojechać.",
            eng: "You must to see the castle! It's out of town, but it's easy to get there.",
            rus: "Обязательно посмотри замок! Он находится за городом, но туда легко доехать.",
            audio: l11
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Możesz pokazać na mapie, gdzie on się znajduje?",
            eng: "Can you show me on the map where it is?",
            rus: "Можешь показать мне на карте, где он находится?",
            audio: l12
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "To jest mapa tylko centru miasta. Masz nawigator na smartfonie?",
            eng: "This is a map of the city center only. Do you have a navigator on your smartphone?",
            rus: "Это карта только центра города. У тебя есть навигатор на смартфоне?",
            audio: l13
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tak, mam google maps. Możesz pokazać?",
            eng: "Yes, I have google maps. Could you show it?",
            rus: "Да, у меня есть гугл-мэпс. Можешь показать?",
            audio: l14
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Tutaj jest. Dojechać tam można na marszrutce od centralnego dworca autobusowego. To jest tylko 15 minut od miasta. Marszrutki chodzą co godzinę. Rozkład jazdy jest w internecie, na stronie internetowej zamku.",
            eng: "Here it is. You can get there by marshrutka from the central bus station. It's only 15 minutes out of the city. Marshrutkas run every hour. The schedule is available on the Internet, on the castle's website.",
            rus: "Вот он. Доехать туда можно на маршрутке от центрального автовокзала. Это всего лишь пятнадцать минут за городом. Маршрутки ходят каждый час. Расписание есть в интернете, на сайте замка.",
            audio: l15
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Oj, zapomniałem zapytać hasło do wi-fi. Znasz go?",
            eng: "Oh, I forgot to ask for the wi-fi password. Do you know it?",
            rus: "Ой, я забыл спросить пароль от вай-фая. Ты знаешь его?",
            audio: l16
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Tak, owszem! Sieć \u{0022}Olimp\u{0022}, a hasło jest tu, zapisane na kartce.",
            eng: "Yes, of course! Olimp network, and the password is written on this piece of paper.",
            rus: "Да, конечно! Сеть «Олимп», а пароль вот, записан на бумажке.",
            audio: l17
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzięki!",
            eng: "Thank you!",
            rus: "Спасибо!",
            audio: l18
        },
        {
            namepol: "Dima",
            nameeng: "Dima",
            pol: "Proszę! Miłego dnia, udanej wycieczki!",
            eng: "You are welkom! Have a nice day and a successful excursion!",
            rus: "Не за что! Хорошего дня, успешной экскурсии!",
            audio: l19
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Wzajemnie!",
            eng: "You too!",
            rus: "Взаимно!",
            audio: l20
        },
    ],    
}

export default step4;