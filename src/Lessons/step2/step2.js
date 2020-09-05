import airport from './audio/phrases/Airport.mp3';
import bank from './audio/phrases/Bank.mp3';
import bus from './audio/phrases/Bus.mp3';
import busstation from './audio/phrases/Bus station.mp3';
import bymarshrutka from './audio/phrases/By marshrutka.mp3';
import bytram from './audio/phrases/By tram.mp3';
import cashmachine from './audio/phrases/Cash machine.mp3';
import center from './audio/phrases/Center.mp3';
import centralsquare from './audio/phrases/Central square.mp3';
import consulate from './audio/phrases/Consulate of Poland.mp3';
import door from './audio/phrases/Door.mp3';
import entrance from './audio/phrases/Entrance.mp3';
import exchangeoffice from './audio/phrases/Exchange office.mp3';
import exit from './audio/phrases/Exit.mp3';
import fifteenminutes from './audio/phrases/Fifteen minutes walk.mp3';
import fourstationbymetro from './audio/phrases/Four stations by metro.mp3';
import funicular from './audio/phrases/Funicular.mp3';
import hospital from './audio/phrases/Hospital.mp3';
import hostel from './audio/phrases/Hostel.mp3';
import hotel from './audio/phrases/Hotel.mp3';
import howcaniget from './audio/phrases/How can I get.mp3';
import howtogettothecitycenter from './audio/phrases/How to get to the city center.mp3';
import marshrutka from './audio/phrases/Marshrutka.mp3';
import marshrutkastop from './audio/phrases/Marszrutka stop.mp3';
import nextdoor from './audio/phrases/Next door.mp3';
import oldtown from './audio/phrases/Old town.mp3';
import onfoot from './audio/phrases/On foot.mp3';
import pharmacy from './audio/phrases/Pharmacy.mp3';
import plane from './audio/phrases/Plane.mp3';
import pleasetellme from './audio/phrases/Please tell me.mp3';
import police from './audio/phrases/Police.mp3';
import postoffice from './audio/phrases/Post office.mp3';
import railwaystation from './audio/phrases/Railway station.mp3';
import station from './audio/phrases/Station.mp3';
import stop from './audio/phrases/Stop.mp3';
import suburbtrain from './audio/phrases/Suburb train.mp3';
import subway from './audio/phrases/Subway.mp3';
import subwaystation from './audio/phrases/Subway station.mp3';
import taxi from './audio/phrases/Taxi.mp3';
import threestopsbymarshrutka from './audio/phrases/Three stops by marshrutka.mp3';
import ticket from './audio/phrases/Ticket.mp3';
import tothehostel from './audio/phrases/To the hostel.mp3';
import tothemetro from './audio/phrases/To the metro.mp3';
import totheoldtown from './audio/phrases/To the Old town.mp3';
import totherailwaystation from './audio/phrases/To the railway station.mp3';
import tovladimirskayastreet from './audio/phrases/To Vladimirskaya street.mp3';
import toilet from './audio/phrases/Toilet.mp3';
import train from './audio/phrases/Train.mp3';
import tram from './audio/phrases/Tram.mp3';
import tramstation from './audio/phrases/Tram station.mp3';
import transport from './audio/phrases/Transport.mp3';
import trolleybus from './audio/phrases/Trolleybus.mp3';
import vladimirskayastreet from './audio/phrases/Vladimirskaya street.mp3';
import whereicanbuyabusticket from './audio/phrases/Where I can buy a bus ticket.mp3';
import whereicanchangecurrency from './audio/phrases/Where I can change currency.mp3';
import whereishere from './audio/phrases/Where is here.mp3';
import whereisthestopofbus from './audio/phrases/Where is the stop of bus.mp3';

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

import imgbank from './img/bank.png';
import imgbus from './img/bus.png';
import imgbusstation from './img/busstation.png';
import imgcashmashine from './img/cashmashine.png';
import imgcenter from './img/center.png';
import imgmarshrutka from './img/marshrutka.png';
import imgoldtown from './img/oldtown.png';
import imgplane from './img/plane.png';
import imgpostoffice from './img/postoffice.png';
import imgsquare from './img/square.png';
import imgstop from './img/stop.png';
import imgstreet from './img/street.png';
import imgsubway from './img/subway.png';
import imgtoilet from './img/toilet.png';
import imgtrain from './img/train.png';
import imgtrainstation from './img/trainstation.png';
import imgtram from './img/tram.png';

const step2 = {
    name: {
        pol: "Krok 2",
        eng: "Step 2"
    },
    title: {
        pol: "Po przybyciu",
        eng: "Upon arrival",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "Gdzie tu jest ... ?",
            eng: "Where is here ... ?",
            rus: "Где здесь ... ?",
            audio: whereishere,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "hostel",
            eng: "hostel",
            rus: "хостел",
            audio: hostel,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "hotel",
            eng: "hotel",
            rus: "гостиница",
            audio: hotel,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "toaleta",
            eng: "toilet",
            rus: "туалет",
            audio: toilet,
            img: imgtoilet,
            alt: "toilet"
        },        
        {
            type: "add",
            pol: "bank",
            eng: "bank",
            rus: "банк",
            audio: bank,
            img: imgbank,
            alt: "bank"
        },
        {
            type: "add",
            pol: "kantor",
            eng: "exchange office",
            rus: "обменный пункт / обменник",
            audio: exchangeoffice,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "bankomat",
            eng: "cash machine",
            rus: "банкомат",
            audio: cashmachine,
            img: imgcashmashine,
            alt: "cash machine"
        },
        {
            type: "add",
            pol: "poczta",
            eng: "post office",
            rus: "почта",
            audio: postoffice,
            img: imgpostoffice,
            alt: "post office"
        },
        {
            type: "add",
            pol: "centrum",
            eng: "center",
            rus: "центр",
            audio: center,
            img: imgcenter,
            alt: "center"
        },
        {
            type: "add",
            pol: "Stare miasto",
            eng: "Old town",
            rus: "Старый город",
            audio: oldtown,
            img: imgoldtown,
            alt: "Old town"
        },
        {
            type: "add",
            pol: "przystanek",
            eng: "stop",
            rus: "остановка",
            audio: stop,
            img: imgstop,
            alt: "stop"
        },
        {
            type: "add",
            pol: "przystanek tramwaju",
            eng: "tram station",
            rus: "остановка трамвая",
            audio: tramstation,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "przystanek marszrutki",
            eng: "bus (marshrutka) stop",
            rus: "остановка маршрутки",
            audio: marshrutkastop,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "stacja metra",
            eng: "subway station",
            rus: "станция метро",
            audio: subwaystation,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "dworzec",
            eng: "station",
            rus: "вокзал",
            audio: station,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "dworzec autobusowy",
            eng: "bus station",
            rus: "автовокзал",
            audio: busstation,
            img: imgbusstation,
            alt: "bus station"
        },
        {
            type: "add",
            pol: "dworzec kolejowy",
            eng: "railway station",
            rus: "ж/д вокзал",
            audio: railwaystation,
            img: imgtrainstation,
            alt: "railway station"
        },
        {
            type: "add",
            pol: "lotnisko",
            eng: "airport",
            rus: "аэропорт",
            audio: airport,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "plac Centralny",
            eng: "Central square",
            rus: "площадь Центральная",
            audio: centralsquare,
            img: imgsquare,
            alt: "square"
        },
        {
            type: "add",
            pol: "ulica Władimirskaja",
            eng: "Vladimirskaya street",
            rus: "улица Владимирская",
            audio: vladimirskayastreet,
            img: imgstreet,
            alt: "street"
        },
        {
            type: "add",
            pol: "policja",
            eng: "police",
            rus: "полиция",
            audio: police,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "apteka",
            eng: "pharmacy",
            rus: "аптека",
            audio: pharmacy,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "szpital",
            eng: "hospital",
            rus: "больница",
            audio: hospital,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "konsulat Polski",
            eng: "consulate of Poland",
            rus: "консульство Польши",
            audio: consulate,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Jak mogę dostać się ... ?",
            eng: "How do I get ... ?",
            rus: "Как мне добраться ... ?",
            audio: howcaniget,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "do hostela",
            eng: "to the hostel",
            rus: "до хостела",
            audio: tothehostel,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "do Starego miasta",
            eng: "to the Old town",
            rus: "до Старого города",
            audio: totheoldtown,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "do dworca kolejowego",
            eng: "to the railway station",
            rus: "до ж/д вокзала",
            audio: totherailwaystation,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "do metra",
            eng: "to the metro",
            rus: "до метро",
            audio: tothemetro,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "do ulicy Władimirskiej",
            eng: "to Vladimirskaya street",
            rus: "до улицы Владимирской",
            audio: tovladimirskayastreet,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wejście",
            eng: "entrance",
            rus: "вход",
            audio: entrance,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wyjście",
            eng: "exit",
            rus: "выход",
            audio: exit,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "drzwi",
            eng: "door",
            rus: "дверь",
            audio: door,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "następne drzwi",
            eng: "next door",
            rus: "следующая дверь",
            audio: nextdoor,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bilet",
            eng: "ticket",
            rus: "билет",
            audio: ticket,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "transport",
            eng: "transport",
            rus: "транспорт",
            audio: transport,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "autobus",
            eng: "bus",
            rus: "автобус",
            audio: bus,
            img: imgbus,
            alt: "bus"
        },
        {
            type: "phrase",
            pol: "tramwaj",
            eng: "tram",
            rus: "трамвай",
            audio: tram,
            img: imgtram,
            alt: "tram"
        },
        {
            type: "phrase",
            pol: "marszrutka (mikrobus)",
            eng: "marshrutka (minibus)",
            rus: "маршрутка",
            audio: marshrutka,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "trolejbus",
            eng: "trolleybus",
            rus: "троллейбус",
            audio: trolleybus,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pociąg",
            eng: "train",
            rus: "поезд",
            audio: train,
            img: imgtrain,
            alt: "train"
        },
        {
            type: "phrase",
            pol: "pociąg podmiejski (dosłownie: pociąg elektryczny)",
            eng: "suburban train (literally: electric train)",
            rus: "электричка",
            audio: suburbtrain,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "samolot",
            eng: "plane",
            rus: "самолет",
            audio: plane,
            img: imgplane,
            alt: "plane"
        },
        {
            type: "phrase",
            pol: "kolej linowo-terenowa",
            eng: "funicular",
            rus: "фуникулёр",
            audio: funicular,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "metro",
            eng: "subway",
            rus: "метро",
            audio: subway,
            img: imgsubway,
            alt: "subway"
        },
        {
            type: "phrase",
            pol: "taksówka",
            eng: "taxi",
            rus: "такси",
            audio: taxi,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pieszo",
            eng: "on foot",
            rus: "пешком",
            audio: onfoot,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "marszrutką",
            eng: "by marshrutka / by minibus",
            rus: "на маршрутке",
            audio: bymarshrutka,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "tramwajem",
            eng: "by tram",
            rus: "на трамвае",
            audio: bytram,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Piętnaście minut na piechotę",
            eng: "Fifteen minutes walk.",
            rus: "Пятнадцать минут пешком.",
            audio: fifteenminutes,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Trzy przystanki marszrutką.",
            eng: "Three stops by marshrutka.",
            rus: "Три остановки на маршрутке.",
            audio: threestopsbymarshrutka,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Cztery przystanki metrem.",
            eng: "Four stations by metro.",
            rus: "Четыре станции на метро.",
            audio: fourstationbymetro,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Proszę podpowiedzieć, ... ?",
            eng: "Please tell me, ... ?",
            rus: "Подскажите пожалуйста, ... ?",
            audio: pleasetellme,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "jak dojechać do centrum miasta",
            eng: "how to get to the city center",
            rus: "как доехать до центра города",
            audio: howtogettothecitycenter,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "gdzie można wymienuć walutę",
            eng: "where I can change currency",
            rus: "где можно поменять валюту",
            audio: whereicanchangecurrency,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "gdzie znajduje się przystanek autobusu trzydzieści dwa",
            eng: "where is the stop of bus thirty two",
            rus: "где находится остановка автобуса тридцать два",
            audio: whereisthestopofbus,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "gdzie można kupić bilet na autobus",
            eng: "where I can buy a bus ticket",
            rus: "где можно купить билет на автобус",
            audio: whereicanbuyabusticket,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam! Proszę podpowiedzieć, jak mogę się dostać do hostela?",
            eng: "Excuse me! Can you tell, please, how to get to the hostel?",
            rus: "Извините! Подскажите пожалуйста, как мне добраться до хостела?",
            audio: l1
        },
        {
            namepol: "Pracownik informacji",
            nameeng: "Information consultant",
            pol: "Pan potrzebuje tramwaju numer 2 lub 7. Przystanek z lewej strony od wejścia do lotniska. Również Pan może dojechać na marszrutce 54, 86 lub 135. Marszrutka jedzie szybciej.",
            eng: "You need tram number 2 or 7. Stop is left of the airport entrance. You can also take the marshrutka 54, 86 or 135. The marshrutka goes faster.",
            rus: "Вам нужен трамвай номер два или семь. Остановка слева от входа в аэропорт. Также Вы можете доехать на маршрутке пятдесят четыре, восемдесят шесть или сто тридцать пять. Маршрутка едет быстрее.",
            audio: l2
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Gdzie znajduje się przystanek marszrutki?",
            eng: "Where is the marshrutka stop?",
            rus: "Где находится остановка маршрутки?",
            audio: l3
        },
        {
            namepol: "Pracownik informacji",
            nameeng: "Information consultant",
            pol: "Jak Pan wyjdzie z lotniska, to skręcić w prawo i za 200 metrów będzie przystanek.",
            eng: "Go out from the airport, turn right and after 200 meters there will be a stop.",
            rus: "Выйдите из аэропорта, поверните направо и через двести метров будет остановка.",
            audio: l4
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Gdzie mogę bupić bilet?",
            eng: "Where can I buy a ticket?",
            rus: "Где я могу купить билет?",
            audio: l5
        },
        {
            namepol: "Pracownik informacji",
            nameeng: "Information consultant",
            pol: "Zapłacić za przejazd można tylko u kierowcy.",
            eng: "You can pay for the fare only to the driver.",
            rus: "Оплатить проезд можно только у водителя.",
            audio: l6
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję! Proszę podpopwiedzieć, gdzie mogę wymienić pieniądze?",
            eng: "Thank you! Could you tell me, where can I change money?",
            rus: "Спасибо! Подскажите, где я могу поменять деньги?",
            audio: l7
        },
        {
            namepol: "Pracownik informacji",
            nameeng: "Information consultant",
            pol: "Tutaj jest kantor. Ale u niego niekorzysny kurs. Lepiej niech Pan przejdzie przez ulicę - tam jest bank.",
            eng: "There is an exchange here. But it has an unprofitable course. Better go across the road - there is a bank.",
            rus: "Тут есть обменник. Но в нем невыгодный курс. Лучше перейдите через дорогу – там есть банк.",
            audio: l8
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję! Do widzenia!",
            eng: "Thank you! Goodbye!",
            rus: "Спасибо! До свиданья!",
            audio: l9
        },
        {
            namepol: "(W banku) Olek",
            nameeng: "(In the bank) Olek",
            pol: "Dzień dobry! Chcę wymienić 100 euro.",
            eng: "Hello! I want to change 100 euros.",
            rus: "Добрый день! Я хочу поменять сто евро.",
            audio: l10
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Proszę podpisać paragon.",
            eng: "Sign the receipt.",
            rus: "Поставьте подпись на квитанции.",
            audio: l11
        },
        {
            namepol: "(W marszrutce) Olek",
            nameeng: "(In the marshrutka) Olek",
            pol: "Ile kosztuje przejazd?",
            eng: "How much is the fare?",
            rus: "Сколько стоит проезд?",
            audio: l12
        },
        {
            namepol: "Kierowca",
            nameeng: "Driver",
            pol: "2 rubli.",
            eng: "2 rubles.",
            rus: "Два рубля.",
            audio: l13
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Proszę podpowiedzieć, gdzie znajduje się przystanek \u{0022}Centrum\u{0022}?",
            eng: "Tell me where the stop \u{0022}Centre\u{0022} is?",
            rus: "Подскажите, где находится остановка «Центр»?",
            audio: l14
        },
        {
            namepol: "Kierowca",
            nameeng: "Driver",
            pol: "To około 20 minut jazdy. Powiem.",
            eng: "It's about 20 minutes away. I will say.",
            rus: "Это примерно двадцать минут езды. Я скажу.",
            audio: l15
        },
        {
            namepol: "(Za 20 minut) Olek",
            nameeng: "(After 20 minutes) Olek",
            pol: "Przepraszam, czy dalego jeszcze do przystanku \u{0022}Centrum\u{0022}?",
            eng: "Excuse me, is it far from the stop \u{0022}Centre\u{0022}?",
            rus: "Извините, далеко еще до остановки «Центр»?",
            audio: l16
        },
        {
            namepol: "Pasażer",
            nameeng: "Passenger",
            pol: "Za jeden przystanek.",
            eng: "In one stop.",
            rus: "Через одну остановку.",
            audio: l17
        },
        {
            namepol: "Kierowca",
            nameeng: "Driver",
            pol: "Przystanek \u{0022}Centrum\u{0022}, kto pytał!",
            eng: "The stop \u{0022}Center\u{0022}, who asked!",
            rus: "Остановка «Центр», кто спрашивал!",
            audio: l18
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję!",
            eng: "Thank you!",
            rus: "Спасибо!",
            audio: l19
        },
    ],
    addition: [
        {
            pol: "W krajach rosyjskojęzycznych z reguły można swobodnie wymienić główne waluty (przede wszystkim dolar i euro) zarówno w specjalnych punktach wymiany, jak i w każdym banku. Do operacji wymiany waluty może być potrzebny paszport. Warto również zwracać uwagę, czy poza ceną kursu nie są naliczane dodatkowe koszty.",
            eng: "In Russian-speaking countries, as a rule, it is possible to freely exchange the main currencies (primarily the dollar and the euro) both at special exchange points and at any bank. You may need a passport for currency exchange operations. It is also worth paying attention to whether there are any additional costs besides the course price.",            
        },
        {
            pol: "Marszrutka jest dość specyficznym zjawiskiem krajów poradzieckich. Jest to z reguły mikrobus na 15-20 miejsc do siedzenia, często z niskim dachem, czyli teoretycznie nawet bez miejsc stojących. Mimo to często są jedynym środkiem transportu, dlatego w godziny szczytu ludzie jedzą stojąco i w wielkim tłumie. Niektóre marszrutki są dość nowe, duże i mało czym się różnią od zwykłego autobusu. W większości jednak stan techniczny marszrutek nie jest dobry. Typowa marszrutka znajduje się w prywatnej własności jej kierowcy, który płaci właścicielowi marszruty za prawo na nim pracować. Zapłacić za przejazd w marszrutce można wyłącznie gotówką i wyłącznie u kierowcy. Chociaż teoretycznie kierowca ma wydawać bilet, z reguły biletów w ogóle nie ma. Ponieważ marszrutka należy do kierowcy, on jest i kasjerem, i kontrolerem. Czasami funkcję kasjera może wykonywać inna osoba, najczęściej członek rodziny kierowcy. Słowo \u{0022}marszrutka\u{0022} jest skrótem od \u{0022}taksówka z marszrutą\u{0022}. Oznacza to, że marszrutka nie zatrzymuje się na każdym przystanku – jeżeli pasażer chce zejść, ma powiedzieć do kierowcy. Z tego powodu korzystanie z marszrutki jest utrudnione dla turysty, który nie zna geografii miasta, a tym bardziej miejscowego języka. Jeżeli turysta chce skorzystać z marszrutki, warto na początku poprosić kierowcy, żeby on powiedział, kiedy będzie potrzebny przystanek. Warto również śledzić marszrutę w nawigatorze lub poprosić o pomoc innego pasażera – kierowca, który jednocześnie prowadzi mikrobus, pobiera pieniądze, odlicza resztę i słucha na którym przystanku ma się zatrzymać, może banalnie zapomnieć o tym, że 10 przystanków temu ktoś go prosił o pomoc.",
            eng: "Marshrutka is quite a specific phenomenon of post-Soviet countries. It is usually a minibus with 15-20 seats, often with a low roof, i.e. theoretically even without standing places. Even so, they are often the only means of transport, so during rush hour people eat standing and in large crowds. Some marshrutkas are quite new, large and not much different from a regular bus. For the most part, however, the technical condition of the marshrutkas is not good. A typical marshrutka is in the private property of its driver, who pays the owner of the route to work on it. You can pay for the ride in the marshrutka only in cash and only from the driver. Although the driver is supposed to issue the ticket, as a rule it is not. Since the marshrutka belongs to the driver, he is both the cashier and the controller. Sometimes the cashier function may be performed by another person, most often a member of the driver's family. The word \u{0022}marshrutka\u{0022} is an abbreviation of \u{0022}taxi with a route\u{0022}. This means that the marshrutka does not stop at every stop - if the passenger wants to go down, he is to tell the driver. For this reason, the use of marshrutka is difficult for tourists who do not know the geography of the city, and even less the local language. If a tourist wants to use a marshrutka, it is worth asking the driver at the beginning to tell him when the nessesery stop will be. It is also worth following the route in the navigator or asking another passenger for help - the driver who simultaneously drives the minibus, collects money, counts the rest and listens at which stop is to stop, may banally forget that someone asked for help 10 stops ago.",
            img: imgmarshrutka,
            alt: "marshrutka"
        },
    ]
}

export default step2;