import React from "react"

const PersonForm = ({ addPerson, newName, typeNewName, newNumber, typeNewNumber }) =>
    <form onSubmit={addPerson}>
        <div>
            name: <input value={newName} onChange={typeNewName} />
        </div>
        <div>number: <input value={newNumber} onChange={typeNewNumber} /></div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>

export default PersonForm
