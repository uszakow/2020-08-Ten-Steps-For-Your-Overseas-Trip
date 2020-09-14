import activebox from './../../../img/AboutMe/Examples/activebox.jpg';
import fashiontaglinehere from './../../../img/AboutMe/Examples/fashion tagline here.jpg';
import fashionshop from './../../../img/AboutMe/Examples/fashionshop.jpg';
import hipotrofia from './../../../img/AboutMe/Examples/hipotrofia.jpg';
import memory from './../../../img/AboutMe/Examples/memory.jpg';
import pokemons from './../../../img/AboutMe/Examples/pokemons.jpg';
import todo from './../../../img/AboutMe/Examples/todo.jpg';
import weather from './../../../img/AboutMe/Examples/weather.jpg';

const title = {
    pol: "Przykłady moich stron:",
    eng: "Examples of my sites:"
}

const examples = [
    {
        pol: "Mój aktualny projekt. Razem z przyjaciółmi piszę portal internetowy, poświęcony leczeniu hipotrofii (obniżonej masy ciała) u dzieci. Piszę dla portalu wizualną część oraz koordynuję pracę wydziału front-end.",
        eng: "My current project. Together with my friends, I am writing an internet portal devoted to the treatment of hypotrophy (reduced body weight) in children. I write the visual part for the portal and coordinate the work of the front-end department.",
        src: hipotrofia,
        alt: "Hipotrofia",
        github: "https://github.com/uszakow/2020-06-Hipotrofia",
        gitpage: "https://uszakow.github.io/2020-06-Hipotrofia/",
    },
    {
        pol: "Wyszukiwarka pokemonów według różnych parametrów za pomocą API. W tej aplikacji ćwiczyłem pracę z API, funkcje asynchroniczne, filtrowanie wyników, paginację.",
        eng: "Pokemon finder by various parameters using API. In this application, I practiced working with API, asynchronous functions, result filtering, pagination.",
        src: pokemons,
        alt: "Pokemons",
        github: "https://github.com/uszakow/2020-04-Pokemons",
        gitpage: "https://uszakow.github.io/2020-04-Pokemons/",
    },
    {
        pol: "Notatnik do zapisywania spraw z możliwością włączenia przypomnienia. W tej aplikacji uczyłem się konstruowaniu aplikacji i zasad wzorcu MVC.",
        eng: "Notebook for saving cases with the option of enabling a reminder. In this application, I learned application development and the principles of the MVC pattern.",
        src: todo,
        alt: "Diary",
        github: "https://github.com/uszakow/2019-11-To-do-list",
        gitpage: "https://uszakow.github.io/2019-11-To-do-list/",
    },
    {
        pol: "Aplikacja pogodowa. Na jej przykładzie uczyłem się wykorzystywać w aplikacji API oraz wykorzystywać funkcje asynchroniczne.",
        eng: "Weather application. On this example I learned how to use API in applications and asynchronous functions.",
        src: weather,
        alt: "Weather",
        github: "https://github.com/uszakow/2020-03-Weather",
        gitpage: "https://uszakow.github.io/2020-03-Weather/",
    },
    {
        pol: "Gra na zapamiętywanie obrazków. Moja pierwsza aplikacja, napisana w JavaScript.",
        eng: "A game for remembering pictures. My first JavaScript application.",
        src: memory,
        alt: "Memory Game",
        github: "https://github.com/uszakow/2019-11-Memory",
        gitpage: "https://uszakow.github.io/2019-11-Memory/",
    },
    {
        pol: "Do tej strony mam szczególne uczucia, bo jest pierwszą dużą stroną, którą napisałem w HTML i CSS. Napisałem ją na zakończenie kursu HTML/CSS.",
        eng: "I have a peculiar feelings about this page, because it is the first big page which I wrote in HTML and CSS. I wrote it at the end of the HTML / CSS course.",
        src: fashiontaglinehere,
        alt: "Fashion Tagline Here",
        github: "https://github.com/uszakow/2019-06-Fashion-tagline-here",
        gitpage: "https://uszakow.github.io/2019-06-Fashion-tagline-here/",
    },
    {
        pol: "Statyczna strona, przy napisaniu której uczyłem się wykorzystania Sass.",
        eng: "A static site that I learned to use Sass.",
        src: activebox,
        alt: "ActiveBox",
        github: "https://github.com/uszakow/2019-06-ActiveBox",
        gitpage: "https://uszakow.github.io/2019-06-ActiveBox/",
    },
    {
        pol: "Jedna z moich pierwszych statycznych stron, napisanych z wykorzystaniem HTML i CSS.",
        eng: "One of my first static pages written with HTML and CSS.",
        src: fashionshop,
        alt: "Fashion Shop",
        github: "https://github.com/uszakow/2019-06-Fashion-shop",
        gitpage: "https://uszakow.github.io/2019-06-Fashion-shop/",
    },
]

export { title, examples };