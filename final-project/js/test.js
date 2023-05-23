import {getFromLs, fetchApi } from "./helper.mjs";
import { mainTemplate } from "./htmltemplates.mjs";
import { retrieve } from "./eventsHandlers.mjs";

const url = 'https://country-facts.p.rapidapi.com/all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e043c650acmsh63deaedd48e9328p1a92efjsnf43078bac6db',
		'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
	}
};




mainTemplate();

document.querySelector('#btn').addEventListener('click', retrieve);





let lsApi=getFromLs('apiKey');
if (lsApi == null) {
    console.log('First Api Fetch!!!');
    fetchApi(url, options, 'apiKey');
}



console.log(lsApi);
listTemplate();
    //document.querySelector('.cities-name').innerHTML="Cities Name:";
    let ul=document.querySelector(".ul-1");
    let ul2=document.querySelector(".ul-2");
    let ul3=document.querySelector(".ul-3");
    let ul4=document.querySelector(".ul-4");
    let ul5=document.querySelector(".ul-5");
    //allData.forEach(element => {
        //let li=document.createElement("li");
        //li.appendChild(document.createTextNode(element));
        //ul.appendChild(li);

lsApi.forEach(name => {

    if (name.cca2 == 'RU') {
        let limit=name.borders.length;
        let counter=0;
        console.log(limit/3);
        name.borders.forEach(border => {
            lsApi.forEach(name => {
                if (name.cca3== border) {
                    if (counter < 3) {
                        console.log(name.name.common);
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul.appendChild(li);
                        counter++;
                        
                    }
                    else if (counter >=3 && counter < 6) {
                        console.log(name.name.common);
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul2.appendChild(li);
                        counter++;
                    }
                    else if (counter >=6 && counter < 9) {
                        console.log(name.name.common);
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul3.appendChild(li);
                        counter++;
                    }
                    else if (counter >=9 && counter < 12) {
                        console.log(name.name.common);
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul4.appendChild(li);
                        counter++;
                    }
                    else if (counter >=12 && counter < 15) {
                        console.log(name.name.common);
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul5.appendChild(li);
                        counter++;
                    }

                    //console.log(counter);

                    
                }
            });
           
        });
    }   
});

function listTemplate() {
    const lists= `
    <section class="list-1">
    <ul class="ul-1"></ul>
    </section>
    <section class="list-2">
    <ul class="ul-2"></ul>
    </section>
    <section class="list-3">
    <ul class="ul-3"></ul>
    </section>
    <section class="list-4">
    <ul class="ul-4"></ul>
    </section>
    <section class="list-5">
    <ul class="ul-5"></ul>
    </section>
    `;
    document.querySelector('.ulist').innerHTML=lists;
    
}

