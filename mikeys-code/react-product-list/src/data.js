import data from './data.json';

// base challenges:
const categoriesList = data.map((x) => x.category);

const parsePrice = (price) => parseFloat(price.replace(/\$/g, ''));

export const categories = [...categoriesList];

export const uniqueCategories = [...new Set(categoriesList)];

export const categoryCount = data.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});
/* 
{
  Movies: 6,
  Grocery: 4,
  Baby: 7, ...
  ...
}
*/

export const categoryCounts = Object.entries(categoryCount).map(
  ([name, count]) => ({
    name,
    count,
  })
);
/*
[
   {name: "Movies", count: 6}, 
   {name: "Grocery", count: 4}, 
   {name: "Baby", count: 7},
   ...
 ]
*/

// stretch challenges:
export const priceList = data.map(({ name, price }) => ({
  name,
  price,
}));

export const expensiveProducts = data.filter(
  ({ price }) => parsePrice(price) > 50
);

export const totalInventoryValue = data.reduce(
  (acc, x) => acc + parsePrice(x.price) * x.units,
  0
);

export const categoryTotalValue = data.reduce((acc, product) => {
  const price = parsePrice(product.price);
  acc[product.category] = (acc[product.category] || 0) + price;
  return acc;
}, {});
