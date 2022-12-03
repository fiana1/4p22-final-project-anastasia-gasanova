'use strict';

const container = document.querySelector('.container');

async function fetchProduct() {
    const params = (new URL(document.location)).searchParams;
    console.log(params.get('id'));

    const response = await fetch(`https://fakestoreapi.com/products/${params.get('id')}`);
    const result = await response.json();

    const img = document.createElement('img');
    img.src = result.image;

    const title = document.createElement('h1');
    title.textContent = result.title;

    container.appendChild(title);
    container.appendChild(img);

    /*const button = document.createElement('button');
        button.textContent = 'Купить';

        container.appendChild(button);*/

        
}

fetchProduct();