import React from "react"

const Filter = ({ searchName, typeSearchName }) =>
    <div>
        filter shown with
        <input value={searchName} onChange={typeSearchName} />
    </div>


export default Filter