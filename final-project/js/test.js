import {getFromLs, fetchApi } from "./helper.mjs";
import { mainTemplate, countryCardTemplate } from "./htmltemplates.mjs";
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


fetchApi(url, options, 'apiKey');


let lsApi=getFromLs('apiKey');



console.log(lsApi);