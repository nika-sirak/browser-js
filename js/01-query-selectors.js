const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

const navEl = document.querySelector('.site-nav__item');
console.dir(navEl);

const navLinks = navEl.querySelectorAll('.site-nav__link');

console.log(navLinks);

/*
 * Document.querySelector* и Element.querySelector*
 */
