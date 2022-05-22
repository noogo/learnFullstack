import React from "react"

const Person = ({ person, deletePerson }) => <div>
    {person.name} {person.number}
    <button onClick={deletePerson(person)}>delete</button>
</div>

const Persons = ({ persons, deletePerson }) =>
    <div>
        {persons.map(person => <Person person={person} key={person.id} deletePerson={deletePerson} />)}
    </div>


export default Persons