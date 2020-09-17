import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={increaseGood}>
        Good
      </button>
      <button onClick={increaseNeutral}>
        Neutral
      </button>
      <button onClick={increaseBad}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {allFeedback(good, neutral, bad)}</p>
      <p>Average {getAverage(good, bad, allFeedback(good, neutral, bad))}</p>
      <p>Positive {getPositivePercentage(good, allFeedback(good,neutral, bad))}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)