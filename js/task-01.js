const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);

categories.forEach(item => {
  const category = item.firstElementChild.textContent;

  const elements = item.lastElementChild.children.length;

  console.log('Category:', category);
  console.log('Elements:', elements);
});
