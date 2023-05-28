import {getFromLs, fetchApi, fetchWorldBankApi } from "./helper.mjs";
import { mainTemplate } from "./htmltemplates.mjs";
import { retrieve, help } from "./eventsHandlers.mjs";


let wbApi="../final-project/json/wbApi.json"; // I have compiled more than 8 world bank API to get data from one API store in my pc.
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
document.querySelector('.help').addEventListener('click', help);




let lsWbApi= getFromLs('wbKey');
if (lsWbApi == null) {
    console.log('First Api Fetch!!!');
   fetchWorldBankApi(wbApi, 'wbKey');
}


let lsApi=getFromLs('apiKey');
if (lsApi == null) {
    console.log('First Api Fetch!!!');
    fetchApi(url, options, 'apiKey');
}





//console.log(lsApi);


//const wb="https://api.worldbank.org/v2/countries?format=json";
//const wb2="http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json";   
//const ur = 'http://api.worldbank.org/v2/country/indicator/NY.GDP.MKTP.CD?date=2021&per_page=266&format=json';
//onst wbPopGrowth='http://api.worldbank.org/v2/country/indicator/SP.POP.GROW?date=2021&per_page=266&format=json';
//const inflation='http://api.worldbank.org/v2/country/indicator/FP.CPI.TOTL.ZG?date=2021&per_page=266&format=json';
//inflation

/*let jsonFile="/json/countryfactsApi.json"
let wbgdp="/jsonApi/wbApi.json";
let inf="/jsonApi/eduApi.json";
        async function getApi(url, d2){
            try {
                const response = await fetch(url);
                const data = await response.json();
                const res2 = await fetch(d2);
                const data2= await res2.json();
                
                data.forEach(item => {
                    //console.log(item.country.id);
                    item.indicator= {
                        "VALUE": "GDP in USD",
                        "INFLATION": "in %",
                        "POPULATION GROWTH": "in %",
                        "EDUCATION": "Government expenditure on education, total (% of GDP)",
                        "ELECTRICITY": "Access to electricity (% of population)",
                        "FOREST": "Forest area (% of land area)"
                };
                    data2.forEach(item2 => {

                        if (item.country.id == item2.country.id) {
                            //console.log(item2.value);
                           item.forest_area=item2.value;
                        }
                        
                    });
                    
                });

                console.log(data);
                } catch (error) {
                console.error(error);
            }
        }
    getApi(wbgdp,inf);*/

        //GDP api
        //http://api.worldbank.org/v2/country/indicator/NY.GDP.MKTP.CD?date=2021&per_page=266&format=json

