import products from './data/products.js';

console.log(products);
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__price>Цена: 1111 кредитов</p>
</article>
*/

/*
 * Пишем функцию для создания карточки продукта
 */

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('produt__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('produt__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${price}`;
  priceEl.classList.add('product__pridct');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[0]));

const elements = products.map(makeProductCard);
console.log(elements);

const productContainerEl = document.querySelector('.js-products');

productContainerEl.append(...elements);
