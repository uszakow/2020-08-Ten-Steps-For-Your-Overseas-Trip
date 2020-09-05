import additionalservice from './audio/phrases/Additional service.mp3';
import bedlinen from './audio/phrases/Bed linen.mp3';
import bottomshelf from './audio/phrases/Bottom shelf.mp3';
import childticket from './audio/phrases/Child ticket.mp3';
import discountticket from './audio/phrases/Discount ticket.mp3';
import fullticket from './audio/phrases/Full ticket.mp3';
import kupewagon from './audio/phrases/Kupe wagon.mp3';
import payforbedlinen from './audio/phrases/Pay for bed linen.mp3';
import payfortea from './audio/phrases/Pay for tea.mp3';
import plackartwagon from './audio/phrases/Plackart wagon.mp3';
import sideshelf from './audio/phrases/Side shelf.mp3';
import threerublesandfiverubles from './audio/phrases/Three rubles and five rubles.mp3';
import topshelf from './audio/phrases/Top shelf.mp3';
import total from './audio/phrases/Total.mp3';
import youcanadditionally from './audio/phrases/You can additionally.mp3';
import youshouldpay15rubles from './audio/phrases/You should pay 15 rubles.mp3';

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

const step7 = {
    name: {
        pol: "Krok 7",
        eng: "Step 7"
    },
    title: {
        pol: "Zakup biletu na pociąg",
        eng: "Buying a train ticket",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "wagon plackartowy (ekonomiczny)",
            eng: "plackart wagon (economy class)",
            rus: "плацкартный вагон",
            audio: plackartwagon,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wagon kupejny (z przydziałami)",
            eng: "kupe wagon (with compartment)",
            rus: "купейный вагон",
            audio: kupewagon,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "półka górna",
            eng: "top shelf",
            rus: "верхняя полка",
            audio: topshelf,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "półka dolna",
            eng: "bottom shelf",
            rus: "нижняя полка",
            audio: bottomshelf,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "półka boczna",
            eng: "side shelf",
            rus: "боковая полка",
            audio: sideshelf,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bilet normalny",
            eng: "full tichet",
            rus: "полный билет",
            audio: fullticket,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bilet dziecięcy",
            eng: "child ticket",
            rus: "детский билет",
            audio: childticket,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "bilet ulgowy",
            eng: "discount ticket",
            rus: "льготный билет",
            audio: discountticket,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Do zapłaty 15 rubli.",
            eng: "You should pay 15 rubles.",
            rus: "К оплате пятнадцать рублей.",
            audio: youshouldpay15rubles,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "łącznie",
            eng: "total",
            rus: "итого",
            audio: total,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "3 rubli i 5 rubli. Łącznie 8 rubli.",
            eng: "3 rubles and 5 rubles. A total of 8 rubles.",
            rus: "Три рубля и пять рублей. Итого восемь рублей.",
            audio: threerublesandfiverubles,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pościel",
            eng: "bed linen",
            rus: "постельное бельё / постель",
            audio: bedlinen,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "usługi dodatkowe",
            eng: "additional service",
            rus: "дополнительные услуги",
            audio: additionalservice,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Pan może dodatkowo ... .",
            eng: "You can additionally ... .",
            rus: "Вы можете дополнительно ... .",
            audio: youcanadditionally,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "zapłacić za bieliznę",
            eng: "pay for the bed linen",
            rus: "оплатить постельное бельё",
            audio: payforbedlinen,
            img: null,
            alt: null
        },
        {
            type: "add",
            pol: "zapłacić za herbatę",
            eng: "pay for a tea",
            rus: "оплатить чай",
            audio: payfortea,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzień dobry! Proszę jeden bilet do Kijowa!",
            eng: "Hello! Please, one ticket to Kiev!",
            rus: "Добрый день! Пожалуйста, один билет до Киева!",
            audio: l1
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Na który dzień?",
            eng: "Which day?",
            rus: "На какой день?",
            audio: l2
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Na pojutrze.",
            eng: "The day after tomorrow.",
            rus: "На послезавтра.",
            audio: l3
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Czyli na 18. sierpnia. Plackartowy lub kupejny?",
            eng: "That is, on the 18. of August. Plackart or kupe?",
            rus: "То есть на восемнадцатое августа. Плацкартный или купейный?",
            audio: l4
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Kupejny.",
            eng: "Kupe.",
            rus: "Купейный.",
            audio: l5
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Półka górna lub dolna?",
            eng: "Top shelf or bottom shelf?",
            rus: "Верхняя полка или нижняя?",
            audio: l6
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dolna, proszę!",
            eng: "Bottom, please!",
            rus: "Нижняя, пожалуйста!",
            audio: l7
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Normalny lub ulgowy?",
            eng: "Full ticket or with discount?",
            rus: "Полный или льготный?",
            audio: l8
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, a czy u was działa polska legitymacja studencka?",
            eng: "Tell me, do you accept a Polish student card?",
            rus: "Скажите, а у вас действует польский студенческий?",
            audio: l9
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Nie, niestety nie działa.",
            eng: "No, unfortunately it doesn't work.",
            rus: "Нет, к сожалению не действует.",
            audio: l10
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Wtedy normalny.",
            eng: "Then full.",
            rus: "Тогда полный.",
            audio: l11
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Na 18. sierpnia jedno kupejne miejsce do Kijowa, dolna półka. To poprawnie?",
            eng: "On the 18. of August, one kupe place to Kiev, bottom shelf. Right?",
            rus: "На восемнадцатое августа одно купейное место до Киева, нижняя полка. Правильно?",
            audio: l12
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tak, wszystko poprawnie.",
            eng: "Yes, that's right.",
            rus: "Да, всё верно.",
            audio: l13
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Do zapłaty 81 rubel.",
            eng: "81 rubles to pay.",
            rus: "К оплате восемьдесят один рубль.",
            audio: l14
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Przepraszam, czy mam dodatkowo zapłacić za pościel?",
            eng: "Excuse me, do I need to pay extra for the bed linen?",
            rus: "Извините, надо ли мне дополнительно оплатить постель?",
            audio: l15
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Pościel jest wliczona do ceny biletu.",
            eng: "Bed linen is included in the ticket price.",
            rus: "Постельное бельё включено в стоимость билета.",
            audio: l16
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Mogę zapłacić kartą?",
            eng: "Can I pay by card?",
            rus: "Могу я заплатить карточкой?",
            audio: l17
        },
        {
            namepol: "Kasjer",
            nameeng: "Cashier",
            pol: "Tak, proszę. Proszę wprowadzić pin. Proszę Pana bilet.",
            eng: " Yes, please. Enter your pin code. Here's your ticket.",
            rus: "Да, пожалуйста. Введите пин-код. Вот Ваш билет.",
            audio: l18
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję! Do widzenia!",
            eng: "Thank you! Bye!",
            rus: "Спасибо! До свиданья!",
            audio: l19
        },
    ],
    addition: [
        {
            pol: "W krajach poradzieckich istnieje nieco inny system funkcjonowania transportu kolejowego. Pociągi międzymiejskie z reguły mają miejsca do spania i idą nocą. Związane to jest z jednej strony z dużymi odległościami (od Moskwy do Władywostoku pociąg idzie około tygodnia, ale nawet od Kijowa do Odessy lub Charkowa podróż trwa całą noc), z drugiej – z dość małą szybkością pociągów (przeciętna szybkość tradycyjnego pociągu stanowi 60-80 kilometrów na godzinę). Wyjątek stanowią albo nowe współczesne szybkie pociągi (takie pociągi są droższe i mają specjalne nazwy – np. Intercity etc.), albo pociągi podmiejskie – tak zwane „elektriczki”. W takich pociągach są tylko miejsca do siedzenia.",
            eng: "In the post-Soviet countries, there is a slightly different system of rail transport operation. Long-distance trains, as a rule, have sleeping places and go at night. On the one hand, this is related to the long distances (the train takes about a week from Moscow to Vladivostok, but even from Kiev to Odessa or Kharkiv the journey takes all night), on the other – with a relatively low speed of trains (the average speed of a traditional train is 60-80 kilometers per hour). The exceptions are either new modern fast trains (such trains are more expensive and have special names – eg Intercity etc.) or suburban trains - the so-called \u{0022}elektrichki\u{0022}. There are only sitting places in such trains.",
            img: null,
            alt: null
        },
        {
            pol: "Wagony do spania są „plackartowe” i „kupejne”. Wagon plackartowy składa się z otwartych przedziałów. Z jednej strony od wspólnego przejścia znajdują się 4 kuszetki (2 górne i 2 dolne). Z drugiej strony są jeszcze 2 miejsca, położone wzdłuż korytarza – tak zwane „miejsca boczne”. Są najbardziej niewygodne, dlatego warto unikać przejazdu na nich. Również gorszymi miejscami są uważane miejsca w 1-2 ostatnich przedziałach przed toaletą. Wagon kupejny składa się z zamkniętych przedziałów, w każdym z których znajduje się 4 miejsca do spania – 2 górne i 2 dolne. Bocznych miejsc nie ma – w ich miejscu znajduje się korytarz. Kuszetki w wagonach kupejnych są dłuższe, co jest bardzo aktualnie dla wysokich osób (długość miejsca do spania w wagonie plackartowym stanowi tylko 165-175 cm, w wagonie kupejnym – około 180-185 cm). Miejsce w wagonie kupejnym z reguły jest droższe od miejsca w wagonie plackartowym nie więcej niż na 50% i dla wygodnej podróży warto brać jego.",
            eng: "Sleeping wagons are \u{0022}plackart\u{0022} or \u{0022}kupe\u{0022}. A plackart wagon consists of open compartments. On one side of the common passage there are 4 berths (2 upper and 2 lower). On another side there are 2 more places along the corridor – the so-called \u{0022}side places\u{0022}. They are the most inconvenient, so avoid riding on them. Places in the last 1-2 compartments before the toilet are also considered as worse places. A kupe wagon consists of closed compartments, in each there are 4 sleeping places – 2 upper and 2 lower. There are no side places – there is a corridor in their place. Berths in a kupe wagons are longer, which is very actuall for tall people (the length of the sleeping place in a plackart wagon is only 165-175 cm, in a kupe wagon – about 180-185 cm). A place in a kupe wagon is usually more expensive than a place in a plackart wagon by no more than 50% and it is worth taking it for a comfortable journey.",
            img: null,
            alt: null
        },
        {
            pol: "Oprócz tego w składzie pociągu mogą być inne wagony – wagon-restauracja oraz tak zwane „wagony sypialne”. Wagon sypialny składa się z przedziałów, w każdym z których jest tylko 2 miejsca do spania (bez miejsc górnych). Wartość biletu jest 2-3 razy większa w porównaniu do wartości miejsca w wagonie kupejnym.",
            eng: "In addition, the train may contain other wagons - a restaurant-wagon and the so-called \u{0022}sleeping wagon\u{0022}. The sleeping car consists of compartments, in each of which there is only 2 sleeping places (no upper places). The value of a ticket is 2-3 times greater than the value of the seat in a kupe wagon.",
            img: null,
            alt: null
        },
        {
            pol: "Ze sobą w drogę warto wziąć coś do jedzenia. Herbatę lub kawę można kupić w każdym wagonie u konduktora – z reguły nie stanowi to problemu. Warto jeszcze zaznaczyć, że w krajach poradzieckich pociąg jest najtańszym środkiem komunikacji – bilet na pociąg może kosztować 1,5-3 razy mniej, niż bilet na autobus.",
            eng: "It's worth taking something to eat with you. You can buy tea or coffee in every wagon from the conductor – usually it is not a problem. It is also worth noting that in the post-Soviet countries the train is the cheapest means of transport - a train ticket can cost 1,5-3 times less than a bus ticket.",
            img: null,
            alt: null
        },
    ]
}

export default step7;