//feting data from API
// api https://api.punkapi.com/v2/beers
const url = "https://countriesnow.space/api/v0.1/countries";

//const url="https://countriesnow.space/api/v0.1/countries/population";

const countryFlag= "https://countriesnow.space/api/v0.1/countries/flag/images";
const url2= "https://search.worldbank.org/api/v2/wds?format=json";


    



// inserting html template 
function cardsTemplate() {
    const mainCards= `
    <p class= "input-btn">
    <label for="search">Enter Country
    <input id="search" type="Text" placeholder="us | usa | united states" pattern="[aA-zZ ]{2,}"></label>
    <button id="btn" onclick="retrieve()">Get Data</button>
    </p>
    <img class="flag">
    <p class="country"></p>
    <p class="cities-name">
    <ul class="cities-list"></ul>
    </p>
    <p class="population"></p>`;
    document.querySelector('.main-cards').innerHTML=mainCards;
       
}

cardsTemplate();

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
    getData(url, cName);
    getFlag(countryFlag, cName);
    console.log(cName);
    
}
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
    console.log(a);
  return a;  
}

const myfile="https://countriesnow.space/api/v0.1/countries/population";

async function getData(file, name) {
const res=await  fetch(file);
const data=await res.json();
//console.log(data.data.length);
console.log(data.data);

getCities(data.data,name);
    
}

function getCities(data, name)
{
    let countryName=name;
    let allData; //= data[1].cities;

    data.forEach(item => {
        if (item.country==countryName || item.iso2==countryName || item.iso3==countryName) {
        allData=item.cities;
        countryName=item.country;
        //console.log(item.country); 
        
        }    
    });

    let h2=document.querySelector('.country');
    h2.innerHTML="Country Name: "+countryName;
    document.querySelector('.cities-name').innerHTML="Cities Name:";
    let ul=document.querySelector(".cities-list");
    allData.forEach(element => {
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
        //console.log(element);
        
    });
}


async function getFlag(file, name) {
    const res=await  fetch(file);
    const data=await res.json();
    setFlag(data, name);    
    }

function setFlag(data, name) {
    let countryName=name;
    let path;
    data.data.forEach(item => {
        if (item.name==countryName || item.iso2==countryName || item.iso3==countryName) {
        path=item.flag;
        //console.log(item.flag); 
        }    
    });
    let img=document.querySelector('.flag');
    img.setAttribute("src", path);
    //console.log(data.data);
}

//titleCase("united arab emirates");
function msg(event){
    event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
}


