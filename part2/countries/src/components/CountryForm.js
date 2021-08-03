import React from 'react'
import DisplayCountry from './DisplayCountry'

const CountryForm = ({searchName, handleChange, filtered, showCountry, setCapital, weather}) => {
    return(
        <>
        <form onSubmit = {showCountry}>
            find countries<input
            value = {searchName}
            onChange = {handleChange}
            />
        </form>
        <div>
            <DisplayCountry 
            filtered = {filtered} 
            showCountry = {showCountry} 
            weather = {weather}
            />
        </div>
        </>
    )
}

export default CountryForm