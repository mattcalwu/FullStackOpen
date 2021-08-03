import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CountryForm from './components/CountryForm'

//WeatherApp key: f6e456b50efb5d89d6477aa6609273e9

const App = () => {
  const [searchName, setSearchName] = useState('')
  const [countryName, setCountryName] = useState([])
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  const filtered = searchName
  ? countryName.filter(country => country.name.toLowerCase().includes(searchName.toLowerCase()))
  : countryName

  const handleChange = (event) =>{
    setSearchName(event.target.value)
  }
  
  useEffect(()=>{
    axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            setCountryName(response.data)
          })
  }, [])

  useEffect(()=>{
    if(filtered.length === 1 && filtered[0].capital !== capital){
        setCapital(filtered[0].capital)
    }
  }, [filtered, capital])

  useEffect(()=>{
    axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
          .then(response=>{
            setWeather(response.data)
          })
  },[capital, api_key])
  

  const showCountry = (event) => {
    event.preventDefault()
    setSearchName(event.target.id)
  }

  

  

  return(
    <div>
      <CountryForm 
      searchName = {searchName}
      handleChange = {handleChange}
      filtered = {filtered}
      showCountry = {showCountry}
      setCapital = {setCapital}
      weather = {weather}
      />
    </div>
  )
}

export default App;
