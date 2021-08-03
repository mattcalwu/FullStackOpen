import React from 'react'
const ListCountry = ({filtered, showCountry}) => {
    return(
        <ul style = {{listStyle: 'none', paddingLeft: 0}} >
            {filtered.map(country => 
            <li key = {country.name}><form id= {country.name} onSubmit = {showCountry}>{country.name}<button  type = 'submit'>show</button></form></li>)}
        </ul>
    )
}

export default ListCountry