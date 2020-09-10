import address from './audio/phrases/Address.mp3';
import bar from './audio/phrases/Bar.mp3';
import bed from './audio/phrases/Bed.mp3';
import breakfrom1to2 from './audio/phrases/Break from 1 to 2.mp3';
import bycard from './audio/phrases/By card.mp3';
import bycash from './audio/phrases/By cash.mp3';
import cafe from './audio/phrases/Cafe.mp3';
import canipay from './audio/phrases/Can I pay.mp3';
import card from './audio/phrases/Card.mp3';
import cash from './audio/phrases/Cash.mp3';
import castle from './audio/phrases/Castle.mp3';
import discount from './audio/phrases/Discount.mp3';
import elevator from './audio/phrases/Elevator.mp3';
import excursion from './audio/phrases/Excursion.mp3';
import exhibition from './audio/phrases/Exhibition.mp3';
import exhibitionofmodernart from './audio/phrases/Exhibition of modern art.mp3';
import forest from './audio/phrases/Forest.mp3';
import fountanna from './audio/phrases/Fountanna.mp3';
import hallway from './audio/phrases/Hallway.mp3';
import hotelroom from './audio/phrases/Hotel room.mp3';
import howmuchdoesitcost from './audio/phrases/How much does it cost.mp3';
import howmuchis from './audio/phrases/How much is.mp3';
import kitchen from './audio/phrases/Kitchen.mp3';
import map from './audio/phrases/Map.mp3';
import museum from './audio/phrases/Museum.mp3';
import navigat from './audio/phrases/Navigator.mp3';
import palace from './audio/phrases/Palace.mp3';
import park from './audio/phrases/Park.mp3';
import refrigerator from './audio/phrases/Refrigerator.mp3';
import reserveaplace from './audio/phrases/Reserve a place.mp3';
import restaurant from './audio/phrases/Restaurant.mp3';
import restaurantofnationalcuisine from './audio/phrases/Restaurant of national cuisine.mp3';
import room from './audio/phrases/Room.mp3';
import shower from './audio/phrases/Shower.mp3';
import stairs from './audio/phrases/Stairs.mp3';
import therefrigeratorisin from './audio/phrases/The refrigerator is in.mp3';
import therestaurantisopenaround from './audio/phrases/The restaurant is open around.mp3';
import theshopisolreadyclosed from './audio/phrases/The shop is already closed.mp3';
import theshopisopenfrom from './audio/phrases/The shop is open from.mp3';
import theshowerisonthefloor from './audio/phrases/The shower is on the floor.mp3';
import thetoiletisdownthehallway from './audio/phrases/The toilet is down the hallway.mp3';
import thetoiletisintheroom from './audio/phrases/The toilet is in the room.mp3';
import theater from './audio/phrases/Theater.mp3';
import thirdfloor from './audio/phrases/Third floor.mp3';
import tickettothemuseum from './audio/phrases/Ticket to the museum.mp3';
import topay from './audio/phrases/To pay.mp3';
import travelbymarshrutka from './audio/phrases/Travel by marshrutka.mp3';
import yourroomisonthe from './audio/phrases/Your room is on the.mp3';

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

import imgaddress from './img/address.png';
import imgcastle from './img/castle.png';
import imgelevator from './img/elevator.png';
import imgforest from './img/forest.png';
import imghallway from './img/hallway.png';
import imgkitchen from './img/kitchen.png';
import imgmuseum from './img/museum.png';
import imgpark from './img/park.png';
import imgrefrigerator from './img/refrigerator.png';
import imgshower from './img/shower.png';
import imgstairs from './img/stairs.png';
import imgtheatre from './img/theatre.png';
import imgthirdfloor from './img/thirdfloor.png';

const step3 = {
    name: {
        pol: "Krok 3",
        eng: "Step 3"
    },
    title: {
        pol: "Zameldować się w hostelu",
        eng: "Check in to the hostel",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "rezerwować miejsce",
            eng: "reserve a place",
            rus: "резервировать место",
            audio: reserveaplace,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "adres",
            eng: "address",
            rus: "адрес",
            audio: address,
            img: imgaddress,
            alt: "address"
        },
        {
            type: "phrase",
            pol: "płacić",
            eng: "to pay",
            rus: "платить",
            audio: topay,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "karta",
            eng: "card",
            rus: "карточка",
            audio: card,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "gotówka",
            eng: "cash",
            rus: "наличные",
            audio: cash,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Ile to kosztuje?",
            eng: "How much does it cost?",
            rus: "Сколько это стоит?",
            audio: howmuchdoesitcost,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Ile kosztuje ... ?",
            eng: "How much is ... ?",
            rus: "Сколько стоит ... ?",
            audio: howmuchis,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "wycieczka",
            eng: "excursion",
            rus: "экскурсия",
            audio: excursion,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "przejazd w marszrutce",
            eng: "travel by marshrutka",
            rus: "проезд в маршрутке",
            audio: travelbymarshrutka,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "bilet do muzeum",
            eng: "ticket to the museum",
            rus: "билет в музей",
            audio: tickettothemuseum,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Mogę zapłacić ... ?",
            eng: "Can I pay ... ?",
            rus: "Могу я заплатить ... ?",
            audio: canipay,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "kartą",
            eng: "by card",
            rus: "карточкой",
            audio: bycard,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "gotówką",
            eng: "by cash",
            rus: "наличными",
            audio: bycash,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "schody",
            eng: "stairs",
            rus: "лестница",
            audio: stairs,
            img: imgstairs,
            alt: "stairs"
        },
        {
            type: "phrase",
            pol: "winda",
            eng: "elevator",
            rus: "лифт",
            audio: elevator,
            img: imgelevator,
            alt: "elevator"
        },
        {
            type: "phrase",
            pol: "trzecie piętro",
            eng: "third floor",
            rus: "третий этаж",
            audio: thirdfloor,
            img: imgthirdfloor,
            alt: "third floor"
        },
        {
            type: "phrase",
            pol: "mapa",
            eng: "map",
            rus: "карта",
            audio: map,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "nawigator",
            eng: "navigator",
            rus: "навигатор",
            audio: navigat,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "rabat",
            eng: "discount",
            rus: "скидка",
            audio: discount,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "prysznic",
            eng: "shower",
            rus: "душ",
            audio: shower,
            img: imgshower,
            alt: "shower"
        },
        {
            type: "phrase",
            pol: "kuchnia",
            eng: "kitchen",
            rus: "кухня",
            audio: kitchen,
            img: imgkitchen,
            alt: "kitchen"
        },
        {
            type: "phrase",
            pol: "lodówka",
            eng: "refrigerator",
            rus: "холодильник",
            audio: refrigerator,
            img: imgrefrigerator,
            alt: "refrigerator"
        },
        {
            type: "phrase",
            pol: "pokój",
            eng: "room",
            rus: "комната",
            audio: room,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pokój hotelowy",
            eng: "hotel room",
            rus: "номер",
            audio: hotelroom,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "łóżko",
            eng: "bed",
            rus: "кровать",
            audio: bed,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "korytarz",
            eng: "hallway",
            rus: "коридор",
            audio: hallway,
            img: imghallway,
            alt: "hallway"
        },
        {
            type: "phrase",
            pol: "Pana/Pani pokój jest na piątym piętrze.",
            eng: "Your room is on the fifth floor.",
            rus: "Ваш номер на пятом этаже.",
            audio: yourroomisonthe,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Lodówka znajduje się na kuchni.",
            eng: "The refrigerator is in the kitchen.",
            rus: "Холодильник находится на кухне.",
            audio: therefrigeratorisin,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Prysznic na piętrze.",
            eng: "The shower is on the floor.",
            rus: "Душ на этаже.",
            audio: theshowerisonthefloor,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Toaleta jest w pokoju.",
            eng: "The toilet is in the room.",
            rus: "Туалет в номере.",
            audio: thetoiletisintheroom,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Toaleta jest na korytarzu z lewej strony.",
            eng: "The toilet is down the hallway on the left.",
            rus: "Туалет по коридору с левой стороны.",
            audio: thetoiletisdownthehallway,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Sklep jest otwarty od 9 rana do 7 wieczora.",
            eng: "The shop is open from 9 am to 7 pm.",
            rus: "Магазин открыт с девяти утра до семи вечера.",
            audio: theshopisopenfrom,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Sklep jest już zamknięty.",
            eng: "The shop is already closed.",
            rus: "Магазин уже закрыт.",
            audio: theshopisolreadyclosed,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Restauracja jest otwarta całodobowo.",
            eng: "The restaurant is open around the clock.",
            rus: "Ресторан работает круглосуточно.",
            audio: therestaurantisopenaround,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Przerwa od pierwszej do drugiej.",
            eng: "Break from 1 pm to 2 pm.",
            rus: "Перерыв с часу до двух.",
            audio: breakfrom1to2,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "fontanna",
            eng: "fountain",
            rus: "фонтан",
            audio: fountanna,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "park",
            eng: "park",
            rus: "парк",
            audio: park,
            img: imgpark,
            alt: "park"
        },
        {
            type: "phrase",
            pol: "wystawa",
            eng: "exhibition",
            rus: "выставка",
            audio: exhibition,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wystawa sztuki współczesnej",
            eng: "exhibition of modern art",
            rus: "выставка современного исскусства",
            audio: exhibitionofmodernart,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "las",
            eng: "forest",
            rus: "лес",
            audio: forest,
            img: imgforest,
            alt: "forest"
        },
        {
            type: "phrase",
            pol: "pałac",
            eng: "palace",
            rus: "дворец",
            audio: palace,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "zamek",
            eng: "castle",
            rus: "замок",
            audio: castle,
            img: imgcastle,
            alt: "castle"
        },
        {
            type: "phrase",
            pol: "muzeum",
            eng: "museum",
            rus: "музей",
            audio: museum,
            img: imgmuseum,
            alt: "museum"
        },
        {
            type: "phrase",
            pol: "teatr",
            eng: "theater",
            rus: "театр",
            audio: theater,
            img: imgtheatre,
            alt: "theatre"
        },
        {
            type: "phrase",
            pol: "restauracja",
            eng: "restaurant",
            rus: "ресторан",
            audio: restaurant,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "restauracja z kuchnią narodową",
            eng: "restaurant of national cuisine",
            rus: "ресторан национальной кухни",
            audio: restaurantofnationalcuisine,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "kawiarnia",
            eng: "cafe",
            rus: "кафе",
            audio: cafe,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bar",
            eng: "bar",
            rus: "бар",
            audio: bar,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, czy mógłby Pan podpowiedzieć, gdzie znajduje się hostel \u{0022}Olimp\u{0022}",
            eng: "Excuse me, could you tell me where the Olymp hostel is located?",
            rus: "Извините, Вы не подскажете, где находится хостел «Олимп»?",
            audio: l1
        },
        {
            namepol: "Przechodzień",
            nameeng: "Passerby",
            pol: "Nie, nie wiem. Który adres?",
            eng: "No, I don't know. What is the address?",
            rus: "Нет, не знаю. А какой адрес?",
            audio: l2
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Ulica Władimirskaja 23.",
            eng: "Vladimirskaya Street 23.",
            rus: "Улица Владимирская двадцать три.",
            audio: l3
        },
        {
            namepol: "Przechodzień",
            nameeng: "Passerby",
            pol: "A, to jest blisko! To jest sąsiedni budynek. Tamten!",
            eng: "Oh, it's close! This is a neighboring house. That one!",
            rus: "А, так это рядом! Это соседний дом. Вон тот!",
            audio: l4
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję!",
            eng: "Thank you!",
            rus: "Спасибо!",
            audio: l5
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, czy tu znajduje się hostel?",
            eng: "Excuse me, is a hostel here?",
            rus: "Извините, это здесь находится хостел?",
            audio: l6
        },
        {
            namepol: "Kolejny przechodzień",
            nameeng: "Another passerby",
            pol: "Nie, to chyba następne wejście.",
            eng: "No, this is probably the next entrance.",
            rus: "Нет, это наверное следующий подъезд.",
            audio: l7
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzień dobry! Zarezerwowałem miejsce w Państwa hostelu, na 3 noce.",
            eng: "Hello! I have reserved a place in your hostel for 3 nights.",
            rus: "Здравствуйте! Я резервировал место в Вашем хостеле, на три ночи.",
            audio: l8
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel employee",
            pol: "Poproszę paszport! Tak, jest rezerwacja. Do zapłacenia 72 rubli.",
            eng: "Your passport, please! Yes, there is a booking. To pay 72 rubles.",
            rus: "Ваш паспорт, пожалуйста! Да, есть резервация. К оплате семдесят два рубля.",
            audio: l9
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Mogę zapłacić kartą?",
            eng: "Can I pay by card?",
            rus: "Могу я заплатить карточкой?",
            audio: l10
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel employee",
            pol: "Oj, przepraszam! Terminal nie działa! Czy mógłby Pan zapłacić gotówką? Tutaj obok wejścia jest bankomat.",
            eng: "Oh, sorry! Terminal is not working! Can you pay with cash? There is a cash machine at the entrance.",
            rus: "Ой, извините! Терминал не работает! Вы можете заплатить наличными? Тут у входа есть банкомат.",
            audio: l11
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Mam gotówkę.",
            eng: "I have cash.",
            rus: "У меня есть наличные.",
            audio: l12
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel employee",
            pol: "Dziękuję! Oto Pana klucz. Pana pokój jest na trzecim piętrze. Schody znajdują się tutaj przy wejściu, a winda jest dalej wzdłuż korytarza. Toaleta i prysznic znajdują się na piętrze.",
            eng: "Thank you! Here is your key. Your room is on the third floor. Stairs are here at the entrance, and the elevator is further down the hallway. Toilet and shower are on the floor.",
            rus: "Спасибо! Вот Ваш ключ. Ваш номер на третьем этаже. Лестница находится тут у входа, а лифт – дальше по коридору. Туалет и душ находятся на этаже.",
            audio: l13
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Czy mógłby Pan podpowiedzieć, co warto zobaczyć w Państwa mieście?",
            eng: "Can you suggest what is worth seeing in your city?",
            rus: "Можете подсказать, что стоит увидеть в Вашем городе?",
            audio: l14
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel employee",
            pol: "Tak, oczywiście! Proszę popatrzyć, tutaj znajduje się Muzeum Narodowe, tutaj znajduje się centralny park, tutaj można kupić różne pamiątki.Również polecam odwiedzić operę. Proszę wziąć ulotkę restauracji kuchni narodowej. Z naszą ulotką jest rabat 10%.",
            eng: "Yes, of course! Look, here is the National Museum, here is the central park, here you can buy various souvenirs. I also recommend visiting the opera house. Take a leaflet from a national cuisine restaurant.  With our leaflet it will be 10% discount.",
            rus: "Да, конечно! Смотрите, вот тут находится Национальный музей, тут находится центральный парк, вот здесь можно купить разные сувениры. Также советую посетить оперный театр. Возьмите листовку ресторана национальной кухни. С нашей листовкой скидка десять процентов.",
            audio: l15
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Mogę wziąć tę mapę?",
            eng: "May I take this map?",
            rus: "Могу я взять эту карту?",
            audio: l16
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel employee",
            pol: "Oczywiście! Jeśli będą pytania, proszę się zwracać! Recepcja działa od dziesiątej rano do ósmej wieczora.",
            eng: "Of course! If you have any questions, please contact us! The reception is open from 10 am to 8 pm.",
            rus: "Конечно! Если будут вопросы — обращайтесь! Рецепция работает с десяти утра до восьми вечера.",
            audio: l17
        },
    ],
    addition: [
        {
            pol: "W rosyjskojęzycznych krajach piętra liczą zaczynając od pierwszego. Parter to będzie pierwsze piętro, pierwsze piętro to będzie drugie piętro i tak dalej. Olek otrzymał pokój na  trzecim piętrze, czyli w Polsce to byłoby drugie piętro.",
            eng: "In Russian-speaking countries, floors are counted from the first. The ground floor will be the first floor, the first floor will be the second floor, and so on. Olek got a room on the third floor, so in Poland it would be the second floor.",
            img: null,
            alt: null
        },
    ]
}

export default step3;