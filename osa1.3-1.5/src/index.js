import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <p>{props.part} {props.exe}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exe={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exe={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exe={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.amount.parts[0].exercises + props.amount.parts[1].exercises + props.amount.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total amount={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))