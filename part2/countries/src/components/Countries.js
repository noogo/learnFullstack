import React from "react"
import Country from "./Country"

const Countries = ({ showCountries, clickToDetail }) => {
    if (showCountries.length > 10) {
        return (
            <div>To many matches, specify another filter</div>
        )
    } else if (showCountries.length > 1) {
        return (
            <div>
                {showCountries.map(country => <div key={country.name.common}>{country.name.common}
                    <button onClick={clickToDetail(country)}>show</button>
                </div>)}
            </div>
        )
    } else if (showCountries.length === 1) {
        return (
            <Country country={showCountries[0]} />
        )
    }
    return (
        <div></div>
    )
}

export default Countries