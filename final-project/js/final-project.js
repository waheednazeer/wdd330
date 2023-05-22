//import { fetchApi, getFromLs } from "./helper.mjs";

//feting data from API
// api https://api.punkapi.com/v2/beers
const url = "https://countriesnow.space/api/v0.1/countries";

//const url="https://countriesnow.space/api/v0.1/countries/population";

const countryFlag= "https://countriesnow.space/api/v0.1/countries/flag/images";
const url2= "https://search.worldbank.org/api/v2/wds?format=json";

// world bank api
const wb="https://api.worldbank.org/v2/countries?format=json";

async function getCountries(file) {
    const res=await  fetch(file);
    const data=await res.json();
    //console.log(data.data.length);
    console.log("World Bank API");
    console.log(data);
          
    }

    //getCountries(wb);

// inserting html template 
function cardsTemplate() {
    const mainCards= `
    <div class="flag-card">
    <img class="flag">
    <p class="country"></p>
    <p class= "input-btn">
    <label for="search">Enter Country
    <input id="search" type="Text" placeholder="us | usa | united states" pattern="[aA-zZ ]{2,}"></label>
    <button id="btn" onclick="retrieve()">Get Data</button>
    </p>
    </div>`;
    document.querySelector('.main-cards').innerHTML=mainCards;
       
}

cardsTemplate();


const urll = 'https://country-facts.p.rapidapi.com/all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e043c650acmsh63deaedd48e9328p1a92efjsnf43078bac6db',
		'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
	}
};


async function apiTest(name){
try {
	const response = await fetch(urll, options);
	const data = await response.json();
	//console.log(data[0].name.common);
    
    localStorage.setItem('api', JSON.stringify(data));
    //console.log(data);
getCities(data, name);
} catch (error) {
    alert(error);
	//console.error(error);
}
}
if (localStorage.getItem('countryKey') != null) {
    console.log('Local Storage');
    apiTest(localStorage.getItem('countryKey'));
}

console.log(JSON.parse(localStorage.getItem('api')));
// event handler for pressing button for searching country
let cName;
function retrieve() {
    
    let search=document.getElementById('search').value;
    let input=document.getElementById('search');
    if (!input.checkValidity()) {
       alert(input.validationMessage);
       return;
    }
    cName=titleCase(search);

    if (cName.length<4) {
        cName=cName.toUpperCase();

        console.log(cName.length);
    }
    localStorage.setItem("countryKey", cName);
    apiTest(cName);
    
    //getData(url, cName);
    //getFlag(countryFlag, cName);
    console.log(cName);
    
}



// adding elements into html page
function getCities(data, name)
{
    let countryName=name;
    let capital;
    let path;
    let cOffName;
    let alpha2;
    let alpha3;

    data.forEach(item => {
        if (item.name.common==countryName || item.cca2==countryName || item.cca3==countryName) {
        //allData=item.cities;
        countryName=item.name.common;
        cOffName=item.name.official;
        path=item.flag;
        capital=item.capital;
        alpha2=item.cca2;
        alpha3=item.cca3;
        //console.log(item.country); 
        
        }    
    });
    let img=document.querySelector('.flag');
    img.setAttribute("src", path);

    let h2=document.querySelector('.country');
    h2.innerHTML="Country Name: "+countryName;

    let countryData=[cOffName,capital,alpha2,alpha3];
    countryCardTemplate(countryData);
    
    //document.querySelector('.cities-name').innerHTML="Cities Name:";
    //let ul=document.querySelector(".cities-list");
    //allData.forEach(element => {
        //let li=document.createElement("li");
        //li.appendChild(document.createTextNode(element));
        //ul.appendChild(li);
        //console.log(element);
        
    //});
    
}
// end of function

// functions for country cards
function countryCardTemplate(countryData) {
    const cards= `
    <div class="data-cards">
    <section class="country-card">
    <h3>Country Demographic Data</h3>
    <p>
    Official Name: ${countryData[0]} <br>
    Alpha-2 Code: ${countryData[2]} </br>
    Alpha-3 Code: ${countryData[3]}
    </p>
    <p>Capital: ${countryData[1]}</p>
    </section>
    <section class="int-card"></section>
    <section class="local-card"></section>
    </div>    
    `;
    document.querySelector('.cards').innerHTML=cards;
}






// function converting string into Title Case
function titleCase(word) {
    let a;
    for (let i = 0; i < word.length; i++) {
        if (i==0) {
            a=word[i].toUpperCase();
        }
        else{
            if (word[i]==" ") {
                let b=i+1;
                a= a+" "+word[b].toUpperCase();
                i++;
            }else{
            
            a= a+word[i].toLowerCase();
            }
        }
        
        
    }
    //console.log(a);
  return a;  
}





// for testing
async function getData(file, name) {
const res=await  fetch(file);
const data=await res.json();
//console.log(data.data.length);
console.log(data.data);

getCities(data.data,name);
    
}






