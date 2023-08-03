'use strict'

 let africa = document.getElementById('africa');
 let america = document.getElementById('america');
 let asia = document.getElementById('asia');
 let europe = document.getElementById('europe');
 let oceania = document.getElementById('oceania');

//CREATING DIVS FOR AFRICA SECTION
for(let i = 1; i <= 59; i ++){
   
    let africaCountries = document.createElement('div');
    africaCountries.setAttribute('class', 'africaCountries continental');
    africa.appendChild(africaCountries);
   
}
//CREATING DIVS FOR AMERICA SECTION
for(let j = 1; j <=56; j++){
    
    let americaCountries = document.createElement('div')
    americaCountries.setAttribute('class', 'americaCountries continental');
    america.appendChild(americaCountries);
}
//CREATING DIVS FOR ASIA 
for(let j = 1; j <=50; j++){
    
    let asiaCountries = document.createElement('div')
    asiaCountries.setAttribute('class', 'asiaCountries continental');
    asia.appendChild(asiaCountries);
}
//CREATING DIVS FOR EUROPE
for(let j = 1; j <=53; j++){
    
    let europeCountries = document.createElement('div')
    europeCountries.setAttribute('class', 'europeCountries continental');
    europe.appendChild(europeCountries);
}

//CREATING DIVS FOR OCEANIA 
for(let j = 1; j <=27; j++){
    
    let oceaniaCountries = document.createElement('div')
    oceaniaCountries.setAttribute('class', 'oceaniaCountries continental');
    oceania.appendChild(oceaniaCountries);
}


//FUNCTION TO GET API FOR AFRICA REGION
function getAfricaApi(){
    let africaUrl = `https://restcountries.com/v3.1/region/africa`
    fetch(africaUrl, {mode: "cors"})
    .then((result =>{
        return result.json();
    }))
    .then((result) =>{
        let afrCountries = document.querySelectorAll('.africaCountries');
        let index = 0;
        afrCountries.forEach((elem)=>{
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result[index].flags.svg} alt= "${result[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result[index].name.common}</span>
            <span class= "info"> Capital: ${result[index].capital}</span>
            <span class= "info">Area: ${result[index].area} sq km
            <span class= "info">Population: ${result[index].population}
            </span>`;
            index++;
        })

    })
}
getAfricaApi();


//FUNCTION TO GET API FOR AMERICA REGION
function getAmericaApi() {
    let americaUrl = `https://restcountries.com/v3.1/region/america`
    fetch(americaUrl, {mode: "cors"})
    .then(result2 => {
        return result2.json();
    })
    .then(result2 =>{
        
        let amerCountries = document.querySelectorAll('.americaCountries');
        let index = 0;
        amerCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result2[index].flags.png} alt= "${result2[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result2[index].name.common}</span>
            <span class= "info"> Capital: ${result2[index].capital}</span>
            <span class= "info">Area: ${result2[index].area} sq km
            <span class= "info">Population: ${result2[index].population}
            </span>`;
            index++;

        })
    })
}
getAmericaApi();

//FUNCTION TO GET API FOR ASIA REGION
function getAsiaApi() {
    let asiaUrl = `https://restcountries.com/v3.1/region/asia`;
    fetch(asiaUrl, {mode: "cors"})
    .then(result3 =>  result3.json())
    .then(result3 => {
        let asiaCountries = document.querySelectorAll('.asiaCountries');
        let index = 0;
        asiaCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result3[index].flags.png} alt= "${result3[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result3[index].name.common}</span>
            <span class= "info"> Capital city: ${result3[index].capital}</span>
            <span class= "info">Area: ${result3[index].area} sq km
            <span class= "info">Population: ${result3[index].population}
            </span>`;
            index++;

        })
        
    })
}
getAsiaApi();

//FUNCTION TO GET API FOR EUROPE REGION
function getEuropeApi() {
    let europeUrl = `https://restcountries.com/v3.1/region/europe`;
    fetch(europeUrl, {mode: "cors"})
    .then(result4 => result4.json())
    .then(result4 => {
        let europeCountries = document.querySelectorAll('.europeCountries');
        let index = 0;
        europeCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result4[index].flags.png} alt= "${result4[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result4[index].name.common}</span>
            <span class= "info"> Capital city: ${result4[index].capital}</span>
            <span class= "info">Area: ${result4[index].area} sq km
            <span class= "info">Population: ${result4[index].population}
            </span>`;
            index++;
        })
    })
}
getEuropeApi();

function getOceaniaApi() {
    let oceaniaUrl = `https://restcountries.com/v3.1/region/oceania`;
    fetch(oceaniaUrl, {mode: "cors"})
    .then(result5 => result5.json())
    .then(result5 => {
        let oceaniaCountries = document.querySelectorAll('.oceaniaCountries');
        let index = 0;
        oceaniaCountries.forEach(elem => {
            elem.innerHTML = `
            <span class="flag-container">
            <img class="flags" src=${result5[index].flags.png} alt= "${result5[index].flags.alt}">
            </span>
            <span class="info-container">
            <span class= "title">${result5[index].name.common}</span>
            <span class= "info"> Capital city: ${result5[index].capital}</span>
            <span class= "info">Area: ${result5[index].area} sq km
            <span class= "info">Population: ${result5[index].population}
            </span>`;
            index++;
        })

    })
}
getOceaniaApi();

//FOLD / UNFOLD BUTTONs FOR EACH DIVISION

let buttons = document.querySelectorAll('.continentHead');
  let contents = document.querySelectorAll('.countries');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      contents.forEach((content, contentIndex) => {
        if (contentIndex === index) {
          if (content.style.display === 'none') {
            content.style.display = 'flex';
          } else {
            content.style.display = 'none';
          }
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
 