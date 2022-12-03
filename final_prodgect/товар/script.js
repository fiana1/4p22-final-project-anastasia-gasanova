'use strict';

const container = document.querySelector('.container');

async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();

    result.forEach((item) => {
        const itemContainer = document.createElement('a');
        itemContainer.href = `product.html?id=${item.id}`;
        itemContainer.classList.add('item-container');

        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('item-img');

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('item-title');

        const price = document.createElement('price');
        price.textContent = item.price;
        price.classList.add('item-price')

        itemContainer.appendChild(img);
        itemContainer.appendChild(title);
        itemContainer.appendChild(price);

        container.appendChild(itemContainer);

        const button = document.createElement('button');
        button.textContent = 'Купить';

        itemContainer.appendChild(button);
    });
}

fetchData();

window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}