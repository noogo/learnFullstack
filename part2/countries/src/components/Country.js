import React from "react"
import Weather from "./Weather"

const Country = ({ country }) => {
    const languagesKeys = Object.keys(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {languagesKeys.map(languagesKey => <li key={languagesKey}>{country.languages[languagesKey]}</li>)}
            </ul>
            <img width='150' src={country.flags.png} alt='flag' />
            <h2>Weather in {country.name.common}</h2>
            <Weather latlng={country.capitalInfo.latlng} />
        </div>
    )
}

export default Country