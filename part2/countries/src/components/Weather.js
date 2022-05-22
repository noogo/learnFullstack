import React, { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ latlng }) => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const [weatherInfo, setWeatherInfo] = useState({ temp: '', icon: '', speed: '', deg: '' })

    useEffect(() => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${api_key}`)
            .then(res => {
                setWeatherInfo({ temp: res.data.main.temp, icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`, speed: res.data.wind.speed, deg: res.data.wind.deg })
            })
    }, [latlng, api_key])


    return (
        <div>
            <div><strong>temperature:</strong> {weatherInfo.temp} Celcuis</div>
            <img src={weatherInfo.icon} alt='icon' />
            <div><strong>wind:</strong> {weatherInfo.speed} mps direction {weatherInfo.deg}</div>
        </div>
    )
}

export default Weather