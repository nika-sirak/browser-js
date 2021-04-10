const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
navEl.classList.add('super');
navEl.classList.toggle('cool');
navEl.classList.replace('cool', 'hello');
console.log(navEl.classList.contains('hello'));

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"`,
);

linkEl.classList.add('site-nav__link--current');
console.log(linkEl);
