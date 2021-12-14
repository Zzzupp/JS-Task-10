// Задание 1

// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.

// function Shop(name, adress){
//     this.name = name;
//     this.adress = adress;
// }
// let shops = [];
// let greenShop = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// let proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск'); 
// shops.push(greenShop); shops.push(proStore)
// console.log(shops.length, shops)

// let adresses = shops.map(item =>{
//     item = item.adress;
//     return item
// });
// console.log(adresses);

// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).

// Добавить эти объекты в массив shops.

// В итоге должен получиться массив объектов типа:

// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]



// 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']


// // Создаём новый HttpRequest-объект:
// let httpRequest = new XMLHttpRequest();
// let div = document.querySelector('div');
// // Этот код сработает после того, как мы получим ответ сервера:
// httpRequest.onload = function() { 

//     let titlee = JSON.parse(httpRequest.responseText);
//     console.log(titlee.title);
//     let p = document.createElement('p');
//     p.innerText = titlee.title;
//     div.appendChild(p);


// };

// // Настраиваем GET-запрос по URL:
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// // Отправляем запрос:
// httpRequest.send();
// Задание 3


// Запросом на сервер по этому url: https://jsonplaceholder.typico... достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
// let ul = document.createElement('ul');
// document.body.appendChild(ul);
// let httpRequest = new XMLHttpRequest();
// httpRequest.onload = function() { 


//     let tasks = JSON.parse(httpRequest.responseText);
//     console.log(tasks)
//     for(let i = 0; i < 20; i++){
        
//         let li = document.createElement('li');
//         li.innerText =tasks[i].title;
        
//         ul.appendChild(li);
//     }
// };
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// httpRequest.send();




let div = document.querySelector('.result')
httpRequest = new XMLHttpRequest();
httpRequest.onload = function() { 

    let comments = JSON.parse(httpRequest.responseText);
    // console.log(comments)
    function createElement(tag, content, className){
        let newTag = document.createElement(tag);
        newTag.innerText = content;
        newTag.classList.add(className);
        div.appendChild(newTag);

    }
    for(let i = 0; i < 10; i++){
    
        createElement('h3', comments[i].name, 'name')
        createElement('p', comments[i].email, 'email')
        createElement('p', comments[i].body, 'body')

    }

};
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();