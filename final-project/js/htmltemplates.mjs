
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
    </div>`;
    document.querySelector('.main-cards').innerHTML=mainCards;
    
       
}

export function countryCardTemplate() {
    const cards= `
    <section class="country-card"></section>
    <section class="int-card"></section>
    <section class="local-card"></section>    
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
`;
document.querySelector('.country-card').innerHTML=countryCard;
}
export function internationalCardTemplate(intData){
    const intCard= `
    <h4>Country Interntaional Data</h4>
        <p>
        Dialing Code: ${intData[0]} <br>
        Region: ${intData[1]} </br>
        Sub-Region: ${intData[2]}
        </p>
        <p>Borders: ${intData[3]}</p>
        
    `;
    document.querySelector('.int-card').innerHTML=intCard;
    }