import React from "react"

const Filter = ({ newValue, typeNewValue }) => {
    return (
        <div>
            find countries
            <input value={newValue} onChange={typeNewValue} />
        </div>
    )
}

export default Filter