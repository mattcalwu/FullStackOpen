import React from 'react'
const CapitalWeather = ({weather}) => {
    if(weather.success !== false && weather !== [])
    {    return(
            <>
                <ul style = {{listStyle: 'none', paddingLeft: 0}}>
                    <li><strong>Temperature:</strong> {weather.current.temperature} Celcius</li>
                    <li><img alt = 'Cute icon of weather' src = {weather.current.weather_icons[0]}/></li>
                    <li><strong>Wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</li>
                </ul>
            </>
        )}
    else{
        return(
            <p>Empty weather</p>
        )
    }
}   

export default CapitalWeather