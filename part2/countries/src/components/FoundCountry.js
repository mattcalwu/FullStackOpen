import React from 'react'
import CapitalWeather from './CapitalWeather'
const FoundCountry = ({filtered, weather}) =>{
    return(
        <>
        <h1>{filtered[0].name}</h1>
        <ul style = {{listStyle: 'none', paddingLeft: 0}}>
            <li>capital {filtered[0].capital}</li>
            <li>population {filtered[0].population}</li>
        </ul>
        <h2>Spoken languages</h2>
        <ul>
            {filtered[0].languages.map(language =>
                <li key = {language.name}>{language.name}</li>)}
        </ul>
        <img 
        src = {filtered[0].flag}
        alt = {`This is the flag of ${filtered[0].name}`}
        style = {{
            width: '20%',
            height: 'auto'
        }}
        />
        <h2>Weather in {filtered[0].capital}</h2>
        <CapitalWeather weather = {weather}/> 
    </>
    )
}
export default FoundCountry