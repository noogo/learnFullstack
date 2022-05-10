// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

// const Statistic = (props) => {
//   return (
//     <div>{props.item} {props.value}</div>
//   )
// }

const Statistics = (props) => {
  if (props.allValue.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    // <div>
    //   <Statistic item='good' value={props.allValue.good} />
    //   <Statistic item='neutral' value={props.allValue.neutral} />
    //   <Statistic item='bad' value={props.allValue.bad} />
    //   <Statistic item='all' value={props.allValue.all} />
    //   <Statistic item='average' value={props.allValue.average} />
    //   <Statistic item='positive' value={props.allValue.positive} />
    // </div>
    <table>
      <tbody>
        <tr><td>good</td><td>{props.allValue.good}</td></tr>
        <tr><td>neutral</td><td>{props.allValue.neutral}</td></tr>
        <tr><td>bad</td><td>{props.allValue.bad}</td></tr>
        <tr><td>all</td><td>{props.allValue.all}</td></tr>
        <tr><td>average</td><td>{props.allValue.average}</td></tr>
        <tr><td>positive</td><td>{props.allValue.positive}</td></tr>
      </tbody>
    </table>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = [good * 1 + bad * (-1)] / all
  const positive = good / all * 100 + '%'
  const allValue = { good: good, neutral: neutral, bad: bad, all: all, average: average, positive: positive }

  const click = (how) => {
    if (how === 'good') {
      return () => setGood(good + 1)
    } else if (how === 'neutral') {
      return () => setNeutral(neutral + 1)
    }
    return () => setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={click('good')} text='good' />
      <Button handleClick={click('neutral')} text='neutral' />
      <Button handleClick={click('bad')} text='bad' />
      <h1>statistics</h1>
      <Statistics allValue={allValue} />
    </div>
  )
}

export default App;
