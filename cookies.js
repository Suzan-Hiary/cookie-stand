'use strict';
const hourworks = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let parentsElement = document.getElementById("cookies");

//console.log(cookies);

function myFunction() {
    var x = document.getElementById("title");
    x.style.color = "black";
};

let Seattle = {
    location: 'Seattle',
    mincustomer: 23,		
    maxcustomer: 65,
    avgcookies: 6.3,
    cookiesPH: [],
    total: 0,
    getCustomer: function() {
        for(let i = 0; i < hourworks.length; i++) {
           
          let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
    
          this.cookiesPH.push(cookies);
    
          this.total += cookies;
           this.total = this.total + cookies;
           //console.log(this.cookiesPH);
         
        }
        console.log("total=",this.total);
         
      },
    render: function () {
        let h2 = document.createElement('h2');
        parentsElement.appendChild(h2);
        h2.textContent = this.location;

        let tag = document.createElement("p");
        let text = document.createTextNode(" The minimum number of customers per hour is " + Seattle.mincustomer + ", The maximum number of customers per hour is " + Seattle.maxcustomer + "  The average number of cookies purchased per customer is  " + Seattle.avgcookies );
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        let ul = document.createElement('ul');
        parentsElement.appendChild(ul);

    for(let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
};




let Tokyo = {
    location: 'Tokyo',
    mincustomer: 3,
    maxcustomer: 24,
    avgcookies: 1.2,
    cookiesPH: [],
    total: 0,
    getCustomer: function() {
        for(let i = 0; i < hourworks.length; i++) {
           
          let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
    
          this.cookiesPH.push(cookies);
    
          this.total += cookies;
           this.total = this.total + cookies;
           //console.log(this.cookiesPH);
         
        }
    
        console.log("total=",this.total);  
      },
    render: function () {
        let h2 = document.createElement('h2');
        parentsElement.appendChild(h2);
        h2.textContent = this.location;

        let tag = document.createElement("p");
        let text = document.createTextNode(" The minimum number of customers per hour is " + Tokyo.mincustomer + ", The maximum number of customers per hour is " + Tokyo.maxcustomer + " The average number of cookies purchased per customer is  " + Tokyo.avgcookies );
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        let ul = document.createElement('ul');
        parentsElement.appendChild(ul);

    for(let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
};


let Dubai = {
    location: 'Dubai',
    mincustomer: 11,
    maxcustomer: 38,
    avgcookies: 3.7,
    cookiesPH: [],
    total: 0,
    getCustomer: function() {
        for(let i = 0; i < hourworks.length; i++) {
           
          let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
    
          this.cookiesPH.push(cookies);
    
          this.total += cookies;
           this.total = this.total + cookies;
           //console.log(this.cookiesPH);
         
        }
    
        console.log("total=",this.total);
      },
    render: function () {
        let h2 = document.createElement('h2');
        parentsElement.appendChild(h2);
        h2.textContent = this.location;

        let tag = document.createElement("p");
        let text = document.createTextNode(" The minimum number of customers per hour is " + Dubai.mincustomer + ", The maximum number of customers per hour is " + Dubai.maxcustomer + " The average number of cookies purchased per customer is  " + Dubai.avgcookies );
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        let ul = document.createElement('ul');
        parentsElement.appendChild(ul);

    for(let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
};

let Paris = {
    location: 'Paris',
    mincustomer: 20,
    maxcustomer: 38,
    avgcookies: 2.3,
    cookiesPH: [],
    total: 0,
    getCustomer: function() {
        for(let i = 0; i < hourworks.length; i++) {
           
          let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
    
          this.cookiesPH.push(cookies);
    
          this.total += cookies;
           this.total = this.total + cookies;
          // console.log(this.cookiesPH);
         
        }
        console.log("total=",this.total);
         
      },
    render: function () {
        let h2 = document.createElement('h2');
        parentsElement.appendChild(h2);
        h2.textContent = this.location;

        let tag = document.createElement("p");
        let text = document.createTextNode(" The minimum number of customers per hour is " + Paris.mincustomer + ", The maximum number of customers per hour is " + Paris.maxcustomer + " The average number of cookies purchased per customer is  " + Paris.avgcookies );
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        let ul = document.createElement('ul');
        parentsElement.appendChild(ul);

    for(let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
};

let Lima = {
    location: 'Lima',
    mincustomer: 2,
    maxcustomer: 16,
    avgcookies: 4.6,
    cookiesPH: [],
    total: 0,
    getCustomer: function() {
        for(let i = 0; i < hourworks.length; i++) {
           
          let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
    
          this.cookiesPH.push(cookies);
    
          this.total += cookies;
           this.total = this.total + cookies;
          // console.log(this.cookiesPH);
        
        }
    
        console.log("total=",this.total);
      },
    render: function () {
        let h2 = document.createElement('h2');
        parentsElement.appendChild(h2);
        h2.textContent = this.location;

        let tag = document.createElement("p");
        let text = document.createTextNode(" The minimum number of customers per hour is " + Lima.mincustomer + ", The maximum number of customers per hour is " + Lima.maxcustomer + " The average number of cookies purchased per customer is  " + Lima.avgcookies );
        tag.appendChild(text);
        let element = document.getElementById("cookies");
        element.appendChild(tag);

        let ul = document.createElement('ul');
        parentsElement.appendChild(ul);

    for(let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
};

Seattle.getCustomer();
Tokyo.getCustomer();
Dubai.getCustomer();
Paris.getCustomer();
Lima.getCustomer();


Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



































