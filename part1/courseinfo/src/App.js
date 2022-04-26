import React from "react"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => (
    <div>
      <h1>{props.course}</h1>
    </div>
  )

  const Content = (props) => {
    const Part = (props) => (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )

    return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
    )
  }

  const Total = (props) => (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
