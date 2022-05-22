import React from "react"

const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ name, exercises }) => <div>{name} {exercises}</div>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    const count = parts.reduce((x, y) => x + y.exercises, 0)
    return (
        <div><strong>total of {count} exercises</strong></div>
    )
}
const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Courses = ({ courses }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => <Course course={course} key={course.id} />)}
        </div>
    )
}

export default Courses