import any from './audio/phrases/Any.mp3';
import anybuswillsuityou from './audio/phrases/Any bus will suit you.mp3';
import box from './audio/phrases/Box.mp3';
import crate from './audio/phrases/Crate.mp3';
import isthisyourtrain from './audio/phrases/Is this your train.mp3';
import key from './audio/phrases/Key.mp3';
import noihaveanothertrain from './audio/phrases/No I have another train.mp3';
import number from './audio/phrases/Number.mp3';
import other from './audio/phrases/Other.mp3';
import receipt from './audio/phrases/Receipt.mp3';
import saltandpepper from './audio/phrases/Salt and pepper.mp3';
import sugar from './audio/phrases/Sugar.mp3';
import thisphrase from './audio/phrases/This.mp3';
import thisplaceismine from './audio/phrases/This place is mine.mp3';
import trolley from './audio/phrases/Trolley.mp3';
import youcansitonanyfreeseat from './audio/phrases/You can sit on any free seat.mp3';
import youhaveadifferentwagon from './audio/phrases/You have a different wagon.mp3';

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

const step9 = {
    name: {
        pol: "Krok 9",
        eng: "Step 9"
    },
    title: {
        pol: "Przed wyjazdem",
        eng: "Before a travel",
        img: null,
        alt: null
    },
    phrases: [
        {
            type: "phrase",
            pol: "paragon",
            eng: "receipt",
            rus: "квитанция",
            audio: receipt,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "numerek",
            eng: "number",
            rus: "номерок",
            audio: number,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "klucz",
            eng: "key",
            rus: "ключ",
            audio: key,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "skrzynka",
            eng: "box",
            rus: "коробка",
            audio: box,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "pudło",
            eng: "crate",
            rus: "ящик",
            audio: crate,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "wózek",
            eng: "trolley",
            rus: "тележка",
            audio: trolley,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "cukier",
            eng: "sugar",
            rus: "сахар",
            audio: sugar,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "sól i pieprz",
            eng: "salt and pepper",
            rus: "соль и перец",
            audio: saltandpepper,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "ten",
            eng: "this",
            rus: "этот",
            audio: thisphrase,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "inny",
            eng: "other",
            rus: "другой",
            audio: other,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "jakikolwiek",
            eng: "any",
            rus: "любой",
            audio: any,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Pan ma inny wagon.",
            eng: "You have a different wagon.",
            rus: "У Вас другой вагон.",
            audio: youhaveadifferentwagon,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "To miejsce jest moje. Pan ma miejsce naprzeciwko.",
            eng: "This place is mine. You have a place opposite.",
            rus: "Это место моё. У Вас место напротив.",
            audio: thisplaceismine,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Czy to twój pociąg?",
            eng: "Is this your train?",
            rus: "Твой поезд - этот?",
            audio: isthisyourtrain,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Nie, mam inny pociąg. Oto on, widzę go!",
            eng: "No, I have another train. There it is, I see it!",
            rus: "Нет, у меня другой поезд. Вон он, я его вижу!",
            audio: noihaveanothertrain,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Pan może usiąść na dowolnym wolnym miejscu.",
            eng: "You can sit on any free seat.",
            rus: "Вы можете садиться на любое свободное место.",
            audio: youcansitonanyfreeseat,
            img: null,
            alt: null
        },
        {
            type: "phrase",
            pol: "Panu pasuje każdy autobus.",
            eng: "Any bus will suit you.",
            rus: "Вам подходит любой автобус.",
            audio: anybuswillsuityou,
            img: null,
            alt: null
        },
    ],
    dialogue: [
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Jutro wyjeżdżam. Mam pociąg wieczorem. Proszę podpowiedzieć, gdzie mógłbym zostawić swoje rzeczy?",
            eng: "I'm leaving tomorrow. I have a train in the evening. Could you tell me, where can I leave my things?",
            rus: "Я завтра выезжаю. У меня поезд вечером. Подскажите, где я могу оставить свои вещи?",
            audio: l1
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel worker",
            pol: "Pan może zostawić swój plecak w hostelu. Ale może Panu będzie wygodniej zostawić rzeczy na dworcu. Tam jest przechowalnia bagażu.",
            eng: "You can leave your backpack at the hostel. But it may be more convenient for you to leave your things at the station. There is a luggage room.",
            rus: "Вы можете оставить свой рюкзак в хостеле. Но возможно вам будет удобнее оставить вещи на вокзале. Там есть камера хранения.",
            audio: l2
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Tak, to jest najleprze! Proszę podpowiedzieć, czy mogę wyjść przed dziewiątą rano? Recepcja będzie jeszcze zamknięta.",
            eng: "Yes, this is the best! Please tell me, can I leave before nine in the morning? The reception will still be closed.",
            rus: "Да, это лучше всего! Подскажите пожалуйста, могу я выехать до девяти утра? Рецепция ещё будет закрыта.",
            audio: l3
        },
        {
            namepol: "Pracownik hostelu",
            nameeng: "Hostel worker",
            pol: "Tak, nie ma problemu! Proszę zostawić klucz od pokoju tutaj. Zapraszam do nas ponownie!",
            eng: "Yes, no problem! Leave your room key here. Come to us again!",
            rus: "Да, без проблем! Оставьте ключ от номера вот тут. Приезжайте к нам ещё!",
            audio: l4
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzień dobry! Chcę zostawić ten plecak do wieczora.",
            eng: "Hello! I want to leave this backpack till the evening.",
            rus: "Добрый день! Я хочу оставить этот рюкзак до вечера.",
            audio: l5
        },
        {
            namepol: "Pracownik przechowalni",
            nameeng: "Storage worker",
            pol: "To będzie kosztowało dwa pięćdziesiąt.",
            eng: "It will cost two fifty.",
            rus: "Это будет стоить два пятьдесят.",
            audio: l6
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Proszę!",
            eng: "Please!",
            rus: "Пожалуйста!",
            audio: l7
        },
        {
            namepol: "Pracownik przechowalni",
            nameeng: "Storage worker",
            pol: "Proszę wziąć ten numerek. Proszę pokazać go, kiedy Pan będzie chciał odebrać rzeczy.",
            eng: "Take this number. Show it when you want to pick up things.",
            rus: "Возьмите этот номерок. Предъявите его, когда захотите забрать вещи.",
            audio: l8
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dzień dobry! Proszę powiedzieć, te ciasta są świeże?",
            eng: "Hello! Could you tell me, are these cakes fresh?",
            rus: "Добрый день! Скажите, эти пирожные свежие?",
            audio: l9
        },
        {
            namepol: "Kelner w kawiarni",
            nameeng: "Cafe waiter",
            pol: "Tak, świeże! Mamy codzienną dostawę.",
            eng: "Yes, fresh! We have daily delivery.",
            rus: "Да, свежие! У нас ежедневная доставка.",
            audio: l10
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Ile kosztuje kawa i ciasto?",
            eng: "How much does coffee and cake cost?",
            rus: "Сколько стоит кофе и пирожное?",
            audio: l11
        },
        {
            namepol: "Kelner w kawiarni",
            nameeng: "Cafe waiter",
            pol: "Kawa kosztuje rubel dziesięć. Ciasto trzy sześćdziesiąt. Razem cztery siedemdziesiąt.",
            eng: "Coffee costs one point ten. Cake is three sixty. Total is four seventy.",
            rus: "Кофе стоит рубль десять. Пирожное три шестьдесят. Итого четыре семьдесят.",
            audio: l12
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dobrze. Płacę kartą. Czy Państwo mają Wi-Fi?",
            eng: "Good. I pay by card. Do you have Wi-Fi?",
            rus: "Хорошо. Я плачу карточкой. У вас есть вай-фай?",
            audio: l13
        },
        {
            namepol: "Kelner w kawiarni",
            nameeng: "Cafe waiter",
            pol: "Tak, hasło tutaj, na ścianie.",
            eng: "Yes, the password is here, on the wall.",
            rus: "Да, пароль вот, на стене.",
            audio: l14
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Dziękuję! Gdzie tu jest toaleta?",
            eng: "Thank you! Where is the toilet?",
            rus: "Спасибо! Где у вас находится туалет?",
            audio: l15
        },
        {
            namepol: "Kelner w kawiarni",
            nameeng: "Cafe waiter",
            pol: "Toaleta jest na drugim piętrze.",
            eng: "The toilet is on the second floor.",
            rus: "Туалет на втором этаже.",
            audio: l16
        },
        {
            namepol: "Olek",
            nameeng: "Olek",
            pol: "Mogę wziąć cukier?",
            eng: "Can I take sugar?",
            rus: "Могу я взять сахар?",
            audio: l17
        },
        {
            namepol: "Kelner w kawiarni",
            nameeng: "Cafe waiter",
            pol: "Tak, cukier na ladzie.",
            eng: "Yes, sugar is on the counter.",
            rus: "Да, сахар на стойке.",
            audio: l18
        },
    ],    
}

export default step9;