//const wb="https://api.worldbank.org/v2/countries?format=json";
//const wb2="http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json";   
//const ur = 'http://api.worldbank.org/v2/country/indicator/NY.GDP.MKTP.CD?date=2021&per_page=266&format=json';
//onst wbPopGrowth='http://api.worldbank.org/v2/country/indicator/SP.POP.GROW?date=2021&per_page=266&format=json';
//const inflation='http://api.worldbank.org/v2/country/indicator/FP.CPI.TOTL.ZG?date=2021&per_page=266&format=json';
//inflation
// https://raw.githubusercontent.com/alissoninacio1/countries-api-project/main/restcountries.json
let newApi="/myjson/json/newAPI.json";
let jsonFile="/json/countryfactsApi.json"
let wbgdp="/myjson/json/wbApi.json";
let inf="/jsonApi/eduApi.json";
        async function getApi(url, d2){
            try {
                const response = await fetch(url);
                const data = await response.json();
                const res2 = await fetch(d2);
                const data2= await res2.json();
                
                data.forEach(item => {
                    //console.log(item.country.id);
                    
                  

                    data2.forEach(item2 => {

                        //if (item.cca2 == item2.country.id) {
                            //console.log(item2.country.id);
                            
                           
                        //}
                        
                    });
                    
                });

                console.log(data);
                } catch (error) {
                console.error(error);
            }
        }
    getApi(newApi,wbgdp);



  

        //GDP api
        //http://api.worldbank.org/v2/country/indicator/NY.GDP.MKTP.CD?date=2021&per_page=266&format=json

