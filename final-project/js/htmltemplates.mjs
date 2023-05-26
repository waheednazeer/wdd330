
export function mainTemplate() {
    const mainCards= `
    <div class="flag-card">
    <img class="flag">
    <p class="country"></p>
    <p class= "input-btn">
    <label for="search">Enter Country
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
<h4>Country Demographic Data</h4>
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
    <h4>Country Interntaional Data</h4>
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
        <h4>Country World Bank Data</h4>
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