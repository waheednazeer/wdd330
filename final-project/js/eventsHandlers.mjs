import { titleCase, getCountryData, getFromLs } from "./helper.mjs";

let cName;
export function retrieve() {
       
    let search=document.getElementById('search').value;
    console.log("retrieve funtion call "+search);
    let input=document.getElementById('search');
    if (!input.checkValidity()) {
       alert(input.validationMessage);
       return;
    }
    cName=titleCase(search);
    console.log(cName); 
    if (cName.length < 4) {
        cName=cName.toUpperCase();
    }
    localStorage.setItem("countryKey", cName);
    let jsonLsApi=getFromLs('apiKey');
    getCountryData(jsonLsApi, cName);

    console.log(cName);   
}