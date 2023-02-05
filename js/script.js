


let container = document.querySelector('.container');
let result;
let counter = 0;
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.onreadystatechange = function () {
    // console.log(xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = xhr.response;
        console.log(result);
    }
}
xhr.send();

let createData = function() {
    result.forEach((item) => {
        // ---------створення змінних------
        let card = document.createElement('div');
        card.classList.add('card');

        let btnBox = document.createElement('div');
        btnBox.classList.add('btn-box');

        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'Select';

        let ul = document.createElement('ul');

        let id = document.createElement('li');
        id.classList.add('item-list');
        id.innerText = `id: ${item.id}`;

        let name = document.createElement('li');
        name.classList.add('item-list', 'search');
        name.innerText = item.name;

        let username = document.createElement('li');
        username.classList.add('item-list');
        username.innerText = `Username:  ${item.username}`;

        let email = document.createElement('li');
        email.classList.add('item-list');
        email.innerText = ` Email: ${item.email}`;

        let address = document.createElement('li');
        address.classList.add('item-list');
        address.innerHTML = `Address:<p>City: ${item.address.city}</p><p>Street: ${item.address.street}</p>`;
        
        let phone = document.createElement('li');
        phone.classList.add('item-list');
        phone.innerText = ` Phone: ${item.phone}`;

        let website = document.createElement('li');
        website.classList.add('item-list');
        website.innerText = ` Website: ${item.website}`;

        let company = document.createElement('li');
        company.classList.add('item-list');
        company.innerText = `Company: ${item.company.name}`;
        // ---------складання змінних------
        container.appendChild(card);
        card.appendChild(ul);
        card.appendChild(btnBox);
        btnBox.appendChild(btn);
        ul.appendChild(id);
        ul.appendChild(name);
        ul.appendChild(username);
        ul.appendChild(email);
        ul.appendChild(address);
        ul.appendChild(phone);
        ul.appendChild(website);
        ul.appendChild(company);

        btn.onclick = () => {
            localStorage.setItem('id', `${item.id}`);
            localStorage.counterKey = ++counter
            localStorage[`${item.name}`] = `ID ${item.id}`;
            
        }
    });
};
xhr.onload = createData;

let input = document.querySelector('#search');
// let allName = document.querySelectorAll('.search');
let allName = document.querySelectorAll('.search');
let arr = Array.from(allName);
console.log(name);




