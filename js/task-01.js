const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach(categoryItem => {
            const categoryTitle = categoryItem.firstElementChild.textContent;
            const itemCount = categoryItem.lastElementChild.children.length;
            console.log(`Category: ${categoryTitle}`);
            console.log(`Elements: ${itemCount}`);
        });