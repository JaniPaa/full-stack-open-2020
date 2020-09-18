import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.action}>
        {props.name}
      </button>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {

  if (props.stats.all === 0){
    return (
      <div>
        <h2>Statistics</h2>
        <h3>No feedback given</h3>
      </div>
    )
  } else{
    return (
      <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={props.stats.good}/>
      <StatisticLine text="Neutral" value={props.stats.neutral}/>
      <StatisticLine text="Bad" value={props.stats.bad}/>
      <StatisticLine text="All" value={props.stats.all}/>
      <StatisticLine text="Average" value={props.stats.average}/>
      <StatisticLine text="Positive" value={props.stats.positive}/>
      </div>
    )
  } 
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const allFeedback = (good, neutral, bad) => {
    return good + neutral + bad
  }

  const getAverage = (good, bad, all) => {
    const points = good - bad
    return points / all
  }

  const getPositivePercentage = (good, all) => {
    return (good / all) * 100
  }

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: allFeedback(good, neutral, bad),
    average: getAverage(good, bad, allFeedback(good, neutral, bad)),
    positive: getPositivePercentage(good, allFeedback(good, neutral, bad))
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button name="Good" action={increaseGood}/>
      <Button name="Neutral" action={increaseNeutral}/>
      <Button name="Bad" action={increaseBad}/>    
      <Statistics stats={stats}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)