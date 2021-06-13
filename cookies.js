'use strict';

let cookies = document.getElementById('salmon cookies');

//console.log(cookies);

function myFunction() {
    var x = document.getElementById("title");
    x.style.color = "black";
};

let shope1 = {
    location: 'Seattle',
    mincustomer: 23,
    maxcustomer: 65,
    avgcookies: 6.3,
    hourworks: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesPH: [],
    Total: 0,
    customerPerHour: function (min, max) {
        return Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
    },
    cookiesPerHour: function () {
        for (let c = 0; c < this.hourworks.length; c++) {
            this.cookiesPH.push(Math.floor(this.customerPerHour() * this.avgcookies));
            let subtotal = this.Total + this.cookiesPerHour[c];
            console.log(subtotal);
        }
        console.log(this.cookiesPH);

    },


    //shope1.location = "Amman";

    //delete shope1.loaction;
    render: function () {
        let heads2 = document.createElement("h2");
        let head2 = document.createTextNode("Seattle");


        let tag = document.createElement("p");
        let text = document.createTextNode(shope1.location + " The minimum number of customers per hour is " + shope1.mincustomer + ", The maximum number of customers per hour is " + shope1.maxcustomer, + " The average number of cookies purchased per customer is  " + shope1.avgcookies.style);
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        /*let shopeDescription = document.createElement('p');
        articleElement.appendChild(shopeDescription);
        shopeDescription.textContent = `${this.location} is a ${this.mincustomer}, and he is ${this.maxcustomer} months old`;
    
        let SeattleList = document.createElement('ul');
        articleElement.appendChild(kittenList);
    
        for(let i = 0; i < this.likes.length; i++) {
          let listItem = document.createElement('li');
          kittenList.appendChild(listItem);
          listItem.textContent = this.likes[i];
        }*/
    }
};




let shope2 = {
    location: 'Tokyo',
    mincustomer: 3,
    maxcustomer: 24,
    avgcookies: 1.2,
    hourworks: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesPH: [],
    Total: 0,
    customerPerHour: function (min, max) {
        return Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
    },
    cookiesPerHour: function () {
        for (let c = 0; c < this.hourworks.length; c++) {
            this.cookiesPH.push(Math.floor(this.customerPerHour() * this.avgcookies));
            let subtotal = this.Total + this.cookiesPerHour[c];
            console.log(subtotal);
        }
        console.log(this.cookiesPH);

    },

};


let shope3 = {
    location: 'Dubai',
    mincustomer: 11,
    maxcustomer: 38,
    avgcookies: 3.7,
    hourworks: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesPH: [],
    Total: 0,
    customerPerHour: function (min, max) {
        return Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
    },
    cookiesPerHour: function () {
        for (let c = 0; c < this.hourworks.length; c++) {
            this.cookiesPH.push(Math.floor(this.customerPerHour() * this.avgcookies));
            let subtotal = this.Total + this.cookiesPerHour[c];
            console.log(subtotal);
        }
        console.log(this.cookiesPH);

    },

};
let shope4 = {
    location: 'Paris',
    mincustomer: 20,
    maxcustomer: 38,
    avgcookies: 2.3,
    hourworks: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesPH: [],
    Total: 0,
    customerPerHour: function (min, max) {
        return Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
    },
    cookiesPerHour: function () {
        for (let c = 0; c < this.hourworks.length; c++) {
            this.cookiesPH.push(Math.floor(this.customerPerHour() * this.avgcookies));
            let subtotal = this.Total + this.cookiesPerHour[c];
            console.log(subtotal);
        }
        console.log(this.cookiesPH);

    },

};
let shope5 = {
    location: 'Lima',
    mincustomer: 2,
    maxcustomer: 16,
    avgcookies: 4.6,
    hourworks: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesPH: [],
    Total: 0,
    customerPerHour: function (min, max) {
        return Math.random() * (this.maxcustomer - this.mincustomer) + this.mincustomer;
    },
    cookiesPerHour: function () {
        for (let c = 0; c < this.hourworks.length; c++) {
            this.cookiesPH.push(Math.floor(this.customerPerHour() * this.avgcookies));
            let subtotal = this.Total + this.cookiesPerHour[c];
            console.log(subtotal);
        }
        console.log(this.cookiesPH);

    },
    render: function() {
    let articleElement = document.createElement('article');
    // articleElement.textContent = 'test article content';
    //cookies.appendChild(articleElement);

    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.location;

    let shopeDescription = document.createElement('p5');
    articleElement.appendChild(shopeDescription);
    let text5 = document.createTextNode(shope1.location + " The minimum number of customers per hour is " + shope1.mincustomer + ", The maximum number of customers per hour is " + shope1.maxcustomer+ " The average number of cookies purchased per customer is  " + shope1.avgcookies.style );
    }
};
shope1.cookiesPerHour();
shope2.cookiesPerHour();
shope3.cookiesPerHour();
shope4.cookiesPerHour();
shope5.cookiesPerHour();


shope1.render();
shope5.render(); 






































