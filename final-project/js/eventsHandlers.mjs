import { titleCase, getCountryData, getFromLs } from "./helper.mjs";

let cName;
export function retrieve() {
       
    let search=document.getElementById('search').value;
    //console.log("retrieve funtion call "+search);
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
    let wbLsApi=getFromLs('wbKey');
    let jsonLsApi=getFromLs('apiKey');
    getCountryData(jsonLsApi, cName, wbLsApi);

    //console.log(cName);   
}
export function help() {
    let msg="Please follow below rules,"
            +"\n1: Country Name can be two letters,"
            +"\n2: Three letters or full name including space if any."
            +"\n3: Capital/ Small/ Title case allowed";
    alert(msg);
    
}

export default class Help{
    constructor(){
        console.log(" This my class");
        const helpline= `
        <h4>How to Search Country Name<h4>
        
        <ul>
        <li>Please enter two or three letters iso2 or iso3 country code.</li>
        <li>Please enter full name</li>
        <li>Name can be any format, upper, lower or title case</li>
        </ul>
        
      
        
        `;
        document.querySelector('.help-detail').innerHTML= helpline;

    }
}