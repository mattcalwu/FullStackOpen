import React from 'react'
import FoundCountry from './FoundCountry'
import ListCountry from './ListCountry'

const DisplayCountry = ({filtered, showCountry, weather}) => {
    if (filtered.length === 1){
      return(
        <FoundCountry filtered = {filtered} weather = {weather}/>
      )
    }
    else if(filtered.length < 10){
      return(
        <ListCountry filtered = {filtered} showCountry = {showCountry}/>
      )
    }
    else{
      return(
        <p>Too many matches, specify another filter</p>
      )
    }
  }

  export default DisplayCountry