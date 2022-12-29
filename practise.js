

const input = document.querySelector("#city-input");
const cityName = document.querySelector("#city-name");
const weatherType = document.querySelector("#weather-type");
const temp = document.querySelector("#temp");
const minTemp = document.querySelector("#min-temp");
const maxTemp = document.querySelector("#max-temp");




const getWeather = async (inputCity) =>{
    
    // fetch('https://open-weather13.p.rapidapi.com/city/jaipur', options)
    //     .then(response => response.json())
    //     .then(response => {return response})
    //     .catch(err => console.error(err));
    
    let data;
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '689e7461damsha50920b0302a4b5p1d388bjsn039e016b5f6a',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        const url = `https://open-weather13.p.rapidapi.com/city/${inputCity}`;
        const res = await fetch(url, options);
        data = await res.json()

    } catch (error){
        console.log(error);
    }

    cityName.innerText = data.name;
        
    
}

const searchCity = () =>{
    const inputCity = ""+input.value;
    // alert(inputCity);    
    getWeather(inputCity);
}


