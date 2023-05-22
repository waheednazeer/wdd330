import { countryCardTemplate, countryTemplate, internationalCardTemplate } from "./htmltemplates.mjs";

export async function fetchApi(url, options, key){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        setToLs(key, data);
        } catch (error) {
        console.error(error);
    }
}

export function setToLs(key, value){
    let lsApi=JSON.stringify(value);
    localStorage.setItem(key, lsApi);
}

export function getFromLs(key){
let lsApi=localStorage.getItem(key);
let jsonApi= JSON.parse(lsApi);
return jsonApi;
}

export function titleCase(word) {
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

export function getCountryData(data, name)
{
    let countryName=name;
    let path;
    let countryData;
    let intData;

    data.forEach(item => {
        if (item.name.common==countryName || item.cca2==countryName || item.cca3==countryName) {
        //allData=item.cities;
        countryName=item.name.common;
        path=item.flag;
        countryData=[item.name.official, item.capital, item.cca2, item.cca3, item.area, item.population];
        intData=[item.callingCodes, item.region, item.subregion, item.borders];
        //console.log(item.country); 
        
        }    
    });
    let img=document.querySelector('.flag');
    img.setAttribute("src", path);

    let h2=document.querySelector('.country');
    h2.innerHTML="Country Name: "+countryName;

    countryCardTemplate();
    countryTemplate(countryData);
    internationalCardTemplate(intData);
    
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