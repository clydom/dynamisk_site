"use strict";
console.log("Hello World");
const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryList = document.querySelector("#category_list");
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  categoryList.innerHTML = "";

  data.forEach((category) => {
    categoryList.innerHTML += `

      <article class="card">

       <a href="produktliste.html?category=${category.category}">

          <h3>${category.category}</h3>

        </a>

      </article>

    `;
  });
}
