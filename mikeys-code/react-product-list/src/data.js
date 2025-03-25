import data from './data.json';

// base challenges:
export const categories = data.map((x) => x.category);

export const uniqueCategories = [
  ...new Set(data.map((x) => x.category)),
];

export const categoryCount = data.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

export const categoryCounts = Object.entries(categoryCount).map(
  ([name, count]) => ({
    name,
    count,
  })
);

// stretch challenges:
export const priceList = data.map((x) => ({
  name: x.name,
  price: x.price,
}));

export const expensiveProducts = data.filter((x) => {
  // Remove the '$' and convert to a number
  const price = parseFloat(x.price.replace('$', ''));
  return price > 50;
});

export const totalInventoryValue = data.reduce((acc, x) => {
  const price = parseFloat(x.price.replace('$', ''));
  return acc + price * x.units;
}, 0);

export const categoryTotalValue = data.reduce((acc, product) => {
  const price = parseFloat(product.price.replace('$', ''));

  if (!acc[product.category]) {
    acc[product.category] = 0;
  }

  acc[product.category] += price;

  return acc;
}, {});
