'use strict';
const hourworks = ['  6am ', '  7am ', '  8am ', '  9am ', '  10am ', '  11am ', '  12am ', '  1pm ', '  2pm ', '  3pm ', '  4pm ', '  5pm ', '  6pm ', '  7pm ', '  8pm '];
let parentsElement = document.getElementById("cookies");


function myFunction() {
  let x = document.getElementById("title");
  x.style.color = "black";
};

function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let articleElement = document.createElement('article');
parentsElement.appendChild(articleElement);

let tablecookies = document.getElementById("myTable");
articleElement.appendChild(tablecookies);


let locations =[]; 

function Shopelocation(location, mincustomer, maxcustomer, avgcookies, cookiesPH, total) {
  this.location = location;
  this.mincustomer = mincustomer;
  this.maxcustomer = maxcustomer;
  this.avgcookies = avgcookies;
  this.cookiesPH = [];
  this.total = 0;
  locations.push(this);
};

Shopelocation.prototype.getCustomer = function () {
    for (let i = 0; i < hourworks.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.mincustomer, this.maxcustomer) * this.avgcookies);
      this.cookiesPH.push(cookies);

      this.total += cookies;
      this.total = this.total + cookies;

      //console.log(this.cookiesPH);

    }

    Shopelocation.prototype.render = function () {

      let tr = document.createElement('tr');
      tablecookies.appendChild(tr);
    

      let td = document.createElement('td');
      tr.appendChild(td);
      td.textContent= this.location;

      for (let i = 0; i < hourworks.length; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.cookiesPH[i];
      }
      let td2 = document.createElement('td');
     tr.appendChild(td2);
      td2.textContent = this.total;
    }
  };
   


    
    
function headertable () {
      let tablerow = document.createElement('tr');
      tablecookies.appendChild(tablerow);
    
      let th1 = document.createElement('th');
      tablerow.appendChild(th1);
      th1.textContent = ' location   ';
    
      for (let i = 0; i < hourworks.length; i++) {
        let th2 = document.createElement('th');
        tablerow.appendChild(th2);
        th2.textContent = hourworks[i];
      }
      let th3 = document.createElement('th');
      tablerow.appendChild(th3);
      th3.textContent = '   Daily Total  ';
    

    };

    function footertable () {
      let tablerow = document.createElement('tr');
      tablecookies.appendChild(tablerow);
      

     let td  = document.createElement('td');
    tablerow.appendChild(td);
    td.textContent = ' hourly total';
    let hourlytotal=0;
      for (let i = 0 ; i < hourworks.length  ; i++){
       let totaloftotal = 0 ;
        for(let j=0 ; j< locations.length ; j++){

          totaloftotal += locations[j].cookiesPH[i];
        
          hourlytotal +=  totaloftotal;
      }
      let th5 = document.createElement('th');
      tablerow.appendChild(th5);
      th5.textContent= totaloftotal;

        }
        
        let th4 = document.createElement('th');
         tablerow.appendChild(th4);
      th4.textContent = hourlytotal;
      };
      
    
    headertable();



let Seattle = new Shopelocation('seattle', 23, 65, 6.3);
let Tokyo = new Shopelocation('Tokyo', 3, 24, 1.2);
let Dubai = new Shopelocation('Dubai', 11, 38, 3.7);
let Paris = new Shopelocation('Paris ', 20, 38, 2.3);
let Lima = new Shopelocation('Lima', 2, 16, 4.6);



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

footertable();

console.log("after", locations);


