const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach(categoryItem => {
            const categoryTitle = categoryItem.querySelector("h2").textContent;
            const itemCount = categoryItem.querySelectorAll("ul li").length;
            console.log(`Category: ${categoryTitle}`);
            console.log(`Elements: ${itemCount}`);
        });