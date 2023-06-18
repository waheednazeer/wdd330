import { countryCardTemplate, countryTemplate, internationalCardTemplate, listTemplate, worldBankDataTemplate } from "./htmltemplates.mjs";

export async function fetchWorldBankApi(api, key) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        setToLs(key, data);
        } catch (error) {
        console.error(error);
    }
    
}
export async function fetchApi(url, key){
    try {
        const response = await fetch(url);
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

export function getCountryData(data, name, wbdata)
{
    let countryName=name;
    let path;
    let countryData;
    let intData;
    let cca2;
    let cca3
    let checked=true;
    
    data.forEach(item => {
        if (item.name.common==countryName || item.cca2==countryName || item.cca3==countryName) {
        countryName=item.name.common;
        path=item.flag;
        cca2=item.cca2;
        cca3=item.cca3;
        countryData=[item.name.official, item.capital, item.cca2, item.cca3, item.area, item.population, Object.values(item.languages)];
        intData=[item.callingCodes[0], item.region, item.subregion, item.borders];
        //console.log(item.currencies); 
        checked=false;
        } 
    });
    if (checked) {
        alert("Please check your country name!");
        return;
    } 
    let img=document.querySelector('.flag');
    img.setAttribute("src", path);

    //let h2=document.querySelector('.country');
    //h2.innerHTML="Country Name: "+countryName;
    countryCardTemplate();
    countryTemplate(countryData);
    internationalCardTemplate(intData);
    listTemplate();
    borderList(data, cca2);
    // world bank api data collection
    worldBankDataTemplate(getWorldBankData(wbdata, cca2, cca3));   
}
// end of function

export function borderList(lsApi, cca2){
    let ul=document.querySelector(".ul-1");
    let ul2=document.querySelector(".ul-2");
    let ul3=document.querySelector(".ul-3");
    let ul4=document.querySelector(".ul-4");
    let ul5=document.querySelector(".ul-5");

lsApi.forEach(name => {

    if (name.cca2 == cca2) {
        //let limit=name.borders.length;
        let counter=0;
        //console.log(limit/3);
        name.borders.forEach(border => {
            lsApi.forEach(name => {
                if (name.cca3== border) {
                    if (counter < 3) {
                        
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul.appendChild(li);
                        counter++;
                        
                    }
                    else if (counter >=3 && counter < 6) {
                        
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul2.appendChild(li);
                        counter++;
                    }
                    else if (counter >=6 && counter < 9) {
                        
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul3.appendChild(li);
                        counter++;
                    }
                    else if (counter >=9 && counter < 12) {
                        
                        let li=document.createElement("li");
                        li.appendChild(document.createTextNode(name.name.common));
                        ul4.appendChild(li);
                        counter++;
                    }
                    else if (counter >=12 && counter < 15) {
                        
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
}

function getWorldBankData(wbdata, cca2, cca3) {

let wbank=[];
wbdata.forEach(wb => {
    
    if (wb.country.id==cca2 || wb.country.countryiso3code==cca3) {
        
    //console.log(wb.country.id+": "+ wb.inflation.toFixed(2)+"%"); population_growth
    if (wb.value==null) {
        wb.value='--';
        wbank[0]=wb.value; 
    }else{
        wbank[0]=(wb.value/1000000000).toFixed(2); 
    }

    if (wb.inflation==null) {
        wb.inflation='--';
        wbank[1]=wb.inflation; 
    }else{
        wbank[1]=wb.inflation.toFixed(2); 
    }
    if (wb.education==null) {
        wb.education='--';
        wbank[2]=wb.education; 
    }else{
        wbank[2]=wb.education.toFixed(2); 
    }

    if (wb.population_growth==null) {
        wb.population_growth='--';
        wbank[3]=wb.population_growth; 
    }else{
        wbank[3]=wb.population_growth.toFixed(2); 
    }
    if (wb.electricity==null) {
        wb.electricity='--';
        wbank[4]=wb.electricity; 
    }else{
        wbank[4]=wb.electricity.toFixed(2); 
    }

    if (wb.forest_area==null) {
        wb.forest_area='--';
        wbank[5]=wb.forest_area; 
    }else{
        wbank[5]=wb.forest_area.toFixed(2); 
    } 
    }    
});
   return wbank; 
}

