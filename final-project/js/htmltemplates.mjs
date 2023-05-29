
export function mainTemplate() {
    const mainCards= `
    <div class="flag-card">
    <img class="flag">
    <p class="country"></p>
    <p class= "input-btn">
    <label for="search">Enter Country Name: 
    <input id="search" type="Text" placeholder="us | usa | united states" pattern="[aA-zZ ]{2,}"></label>
    <button id="btn">Get Data</button>
    </p>
    <hr class="hr-line">
    </div>`;
    document.querySelector('.main-cards').innerHTML=mainCards;
    
       
}

export function countryCardTemplate() {
    const cards= `
    <section class="country-card"></section>
    <section class="int-card"></section>
    <section class="wb-card"></section>    
    `;
    document.querySelector('.cards').innerHTML=cards;  
}
export function countryTemplate(countryData){
const countryCard= `
<h3>Country Demographic Data</h3>
    <p>
    Official Name: ${countryData[0]} <br>
    Alpha-2 Code: ${countryData[2]} </br>
    Alpha-3 Code: ${countryData[3]}
    </p>
    <p>Capital: ${countryData[1]}</p>
    <p>
    Area: ${countryData[4]} <br>
    Population: ${countryData[5]} 
    </p>
    <p>
    Languages: ${countryData[6]}
    </p>
`;
document.querySelector('.country-card').innerHTML=countryCard;
}
export function internationalCardTemplate(intData){
    const intCard= `
    <h3>Country Interntaional Data</h3>
        <p>Telephone Dialing Code: ${intData[0]}</p>
        <p>
        
        Region: ${intData[1]} </br>
        Sub-Region: ${intData[2]}
        </p>
        Neighbours:
        <div class="ulist">
        
        </div>
    `;
    document.querySelector('.int-card').innerHTML=intCard;
    }

    export function listTemplate() {
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

    export function worldBankDataTemplate(wb) {

        const wbank= `
        <h3>Country World Bank Data</h3>
        <p>GDP: ${wb[0]}$ Billion <br>
        Education Expense % of GDP: ${wb[2]}% <br>
        Inflation: ${wb[1]}% </p>
        <p>Population Growth: ${wb[3]}% </p>
        <p>
        Electricity Availability: ${wb[4]}% <br>
        Forest Area: ${wb[5]}% 
        </p>
        `;
        document.querySelector('.wb-card').innerHTML=wbank;
    }

    export default class Help{
    
        constructor(){
            this.helpline= `
            <h4>How to Enter Country Name<h4>
            <ul>
            <li>Please enter two or three letters iso2 or iso3 country code,or full name.</li>
            <li>Name can be any format, upper, lower or title case</li>
            </ul>
            <h4>How to Fill Feedback Form<h4>
            <ul>
            <li>Full Name must be in Title Case. Must have space between First name and Last name.</li>
            <li>No digit is allowed in name</li>
            <li>Email id must be in email format. no space allowed in email id on left side of @ sign.</li>
            </ul>     
            `;
        }   
            renderHelpTemplate() {
                document.querySelector('.help-detail').innerHTML= this.helpline;
            }   
    }