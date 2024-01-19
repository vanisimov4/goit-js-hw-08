const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
allItems.forEach(items => {
  const title = items.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const allLi = items.querySelectorAll('li');
  console.log(`Elements: ${allLi.length}`);
});
