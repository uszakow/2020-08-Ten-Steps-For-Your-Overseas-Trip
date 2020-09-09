import a from './audio/А.mp3';
import b from './audio/Б.mp3';
import v from './audio/В.mp3';
import g from './audio/Г.mp3';
import d from './audio/Д.mp3';
import je from './audio/Е.mp3';
import jo from './audio/Ё.mp3';
import zh from './audio/Ж.mp3';
import z from './audio/З.mp3';
import i from './audio/И.mp3';
import j from './audio/Й.mp3';
import k from './audio/К.mp3';
import l from './audio/Л.mp3';
import m from './audio/М.mp3';
import n from './audio/Н.mp3';
import o from './audio/О.mp3';
import p from './audio/П.mp3';
import r from './audio/Р.mp3';
import s from './audio/С.mp3';
import t from './audio/Т.mp3';
import u from './audio/У.mp3';
import f from './audio/Ф.mp3';
import h from './audio/Х.mp3';
import c from './audio/Ц.mp3';
import ch from './audio/Ч.mp3';
import sh from './audio/Ш.mp3';
import shh from './audio/Щ.mp3';
import y from './audio/Ы.mp3';
import e from './audio/Э.mp3';
import ju from './audio/Ю.mp3';
import ja from './audio/Я.mp3';
import hadrsign from './audio/Hard sign.mp3';
import softsign from './audio/Soft sign.mp3';

const cyrillic = {
    name: {
        pol: "Cyryllica",
        eng: "Cyrillic"
    },
    title: {
        pol: "Rosyjski alfabet",
        eng: "Russian alphabet"
    },
    phrases: [
        {
            type: "phrase",
            pol: "A",
            eng: "A",
            rus: "А, а",
            audio: a,
        },
        {
            type: "phrase",
            pol: "B",
            eng: "B",
            rus: "Б, б",
            audio: b,
        },
        {
            type: "phrase",
            pol: "W",
            eng: "V",
            rus: "В, в",
            audio: v,
        },
        {
            type: "phrase",
            pol: "G",
            eng: "G",
            rus: "Г, г",
            audio: g,
        },
        {
            type: "phrase",
            pol: "D",
            eng: "D",
            rus: "Д, д",
            audio: d,
        },
        {
            type: "phrase",
            pol: "Je otwarte",
            eng: "Open ie",
            rus: "Е, е",
            audio: je,
        },
        {
            type: "phrase",
            pol: "Jo",
            eng: "Io",
            rus: "Ё, ё",
            audio: jo,
        },
        {
            type: "phrase",
            pol: "Ż",
            eng: "Zh",
            rus: "Ж, ж",
            audio: zh,
        },
        {
            type: "phrase",
            pol: "Z",
            eng: "Z",
            rus: "З, з",
            audio: z,
        },
        {
            type: "phrase",
            pol: "I",
            eng: "I",
            rus: "И, и",
            audio: i,
        },
        {
            type: "phrase",
            pol: "J",
            eng: "J",
            rus: "Й, й",
            audio: j,
        },
        {
            type: "phrase",
            pol: "K",
            eng: "K",
            rus: "К, к",
            audio: k,
        },
        {
            type: "phrase",
            pol: "L twarde",
            eng: "L",
            rus: "Л, л",
            audio: l,
        },
        {
            type: "phrase",
            pol: "M",
            eng: "M",
            rus: "М, м",
            audio: m,
        },
        {
            type: "phrase",
            pol: "N",
            eng: "N",
            rus: "Н, н",
            audio: n,
        },
        {
            type: "phrase",
            pol: "O",
            eng: "O",
            rus: "О, о",
            audio: o,
        },
        {
            type: "phrase",
            pol: "P",
            eng: "P",
            rus: "П, п",
            audio: p,
        },
        {
            type: "phrase",
            pol: "R",
            eng: "R",
            rus: "Р, р",
            audio: r,
        },
        {
            type: "phrase",
            pol: "S",
            eng: "S",
            rus: "С, с",
            audio: s,
        },
        {
            type: "phrase",
            pol: "T",
            eng: "T",
            rus: "Т, т",
            audio: t,
        },
        {
            type: "phrase",
            pol: "U",
            eng: "U",
            rus: "У, у",
            audio: u,
        },
        {
            type: "phrase",
            pol: "F",
            eng: "F",
            rus: "Ф, ф",
            audio: f,
        },
        {
            type: "phrase",
            pol: "H",
            eng: "H",
            rus: "Х, х",
            audio: h,
        },
        {
            type: "phrase",
            pol: "C",
            eng: "C",
            rus: "Ц, ц",
            audio: c,
        },
        {
            type: "phrase",
            pol: "Ć",
            eng: "Ch",
            rus: "Ч, ч",
            audio: ch,
        },
        {
            type: "phrase",
            pol: "Sz",
            eng: "Sh",
            rus: "Ш, ш",
            audio: sh,
        },
        {
            type: "phrase",
            pol: "Ś",
            eng: "Shh",
            rus: "Щ, щ",
            audio: shh,
        },
        {
            type: "phrase",
            pol: "Znak twardości poprzedniej spółgłoski",
            eng: "Hard sign",
            rus: "ъ (твёрдый знак)",
            audio: hadrsign
        },
        {
            type: "phrase",
            pol: "Y",
            eng: "Y",
            rus: "ы",
            audio: y,
        },
        {
            type: "phrase",
            pol: "Znak miękości poprzedniej spółgłoski",
            eng: "Soft sign",
            rus: "ь (мягкий знак)",
            audio: softsign
        },
        {
            type: "phrase",
            pol: "E",
            eng: "E",
            rus: "Э, э",
            audio: e,
        },
        {
            type: "phrase",
            pol: "Ju",
            eng: "Ju",
            rus: "Ю, ю",
            audio: ju,
        },
        {
            type: "phrase",
            pol: "Ja",
            eng: "Ya",
            rus: "Я, я",
            audio: ja,
        },
    ],
    addition: [
        {
            pol: "Warto zwrócić uwagę, że niektóre litery są pisane podobnie do łacińskich, jednak mają inny dźwięk. Np. rosyjska litera \u{0022}c\u{0022} brzmi jako \u{0022}s\u{0022}, a rosyjska litera \u{0022}р\u{0022} jako \u{0022}r\u{0022}.",
            eng: "Note that some letters are written similar to Latin ones, but have a different sound. For example, the Russian letter \u{0022}с\u{0022} sounds like \u{0022}s\u{0022} or the Russian letter \u{0022}р\u{0022} sounds like \u{0022}r\u{0022}."
        },
        {
            pol: "Litera \u{0022}ё\u{0022} często jest zapisywana bez kropek – jako litera \u{0022}е\u{0022}. Jeżeli w słowie jest litera \u{0022}ё\u{0022}, akcent zawsze spada na nią.",
            eng: "The letter \u{0022}ё\u{0022} is often written without dots – as the letter \u{0022}е\u{0022}. If there is a letter \u{0022}ё\u{0022} in a word, the accent always falls on it."
        },
        {
            pol: "Akcent w słowach jest chyba najtrudniejszą rzeczą w języku rosyjskim, bo może padać na każdą sylabę. Dobra wiadomość – jeżeli niepoprawnie zrobisz akcent w słowie, najprawdopodobniej Ciebie zrozumieją.",
            eng: "The stress in words is perhaps the most difficult thing in Russian, as it can fall on any syllable. The good news – if you put the accent in a word incorrectly, people will most likely understand you."
        },
        {
            pol: "Twardy znak \u{0022}ъ\u{0022} oraz mięki znak \u{0022}ь\u{0022} nie mają żadnego dźwięku i oznaczają tylko twardość lub miękkość poprzedniej spółgłoski.",
            eng: "The hard sign \u{0022}ъ\u{0022} and the soft sign \u{0022}ь\u{0022} have no sound and only represent the hardness or softness of the previous consonant."
        },
    ]
}

export default cyrillic;