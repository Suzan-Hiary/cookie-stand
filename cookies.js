'use strict';
const hourworks = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let parentsElement = document.getElementById("cookies");


function myFunction() {
  let x = document.getElementById("title");
  x.style.color = "black";
};

function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function shopelocation(location, mincustomer, maxcustomer, avgcookies, cookiesPH, total) {
  this.location = location;
  this.mincustomer = mincustomer;
  this.maxcustomer = maxcustomer;
  this.avgcookies = avgcookies;
  this.cookiesPH = [];
  this.total = 0;
  this.getRandomCustomer = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };
  this.getCustomer = function () {
    for (let i = 0; i < hourworks.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
      this.cookiesPH.push(cookies);

      this.total += cookies;
      this.total = this.total + cookies;

      //console.log(this.cookiesPH);

    }

    this.render = function () {

      let h2 = document.createElement('h2');
      parentsElement.appendChild(h2);
      h2.textContent = this.location;

      let ul = document.createElement('ul');
      parentsElement.appendChild(ul);

      for (let i = 0; i < hourworks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hourworks[i]}: ${this.cookiesPH[i]} cookies`;
      }
      let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
    }
  };


};
let locations=["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

let articleElement = document.createElement('article');
parentsElement.appendChild(articleElement);

let table = document.createElement('table');
  articleElement.appendChild(table);

let   TR = document.createElement('tr');
  table.appendChild(TR);

  let th = document.createElement('th');
  TR.appendChild(th);

  let TD =document.createElement('td');
  TR.appendChild(TD);


function headertable(){
     for(let i = 0; i< 16 ; i++) { 
     let header = table.createTHead(i);
      header.textContent = hourworks[i];
    
    }
  };

  function footertable(hourworks){

  };
  footertable();
  headertable();
/*function headertable (){
  for(let i=0 ; i< hourworks.length ;i++){
    let cookiestable = document.getElementById("myTable");
  let header = cookiestable.createTHead();
  let row = header.insertRow(0); 
  let cell = row.insertCell(0);
  cell.innerHTML = hourworks[i];
}
}
headertable();*/
let Seattle = new shopelocation('seattle', 23, 65, 6.3);
let Tokyo = new shopelocation('Tokyo', 3, 24, 1.2);
let Dubai = new shopelocation('Dubai', 11, 38, 3.7);
let Paris = new shopelocation('Paris ', 20, 38, 2.3);
let Lima = new shopelocation('Lima', 2, 16, 4.6);

console.log(Seattle, Tokyo, Dubai, Paris, Lima);

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






