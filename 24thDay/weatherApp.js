

const temperatureField = document.querySelector(".weather2");
const cityField = document.querySelector(".weather3 p");
const dateField = document.querySelector(".weather3 span");
const emojiField = document.querySelector(".weather1 img");
const weatherField = document.querySelector(".weather1 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


form.addEventListener("submit", search);

// Default
let target = "New Dehli";

// fetch data from api
const fetchData = async(target) => {

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=75a83735a89c4a59bb7140712242004&q=${target}`

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    // Destructuring
    const {
        current: { temp_c,
        condition: { text, icon },
    },
        location: { name, localtime },
    } = data;

    //Calling update function 
    updateDom(temp_c, name, localtime, icon, text);
    } catch (error) {
        alert("Location not found")
    }
};

// update Dom
function updateDom (temperature, city, time, emoji, text) {
    temperatureField.innerText = temperature;
    cityField.innerText = city;
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDayFullName(new Date(exactDate).getDay());
    dateField.innerText = `${exactTime} ${exactDay} ${exactDate}`;
    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData(target);

// search the location
function search(e) {
    e.preventDefault();

    target = searchField.value;
    
    fetchData(target);
};


function getDayFullName(num) {
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    
        default:
            return "Don't know";
    }
};