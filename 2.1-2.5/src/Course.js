import React from 'react'

const Header = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
}

const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({course}) => {
    return (
      <div>
          {course.parts.map(part => 
            <Part key={part.id} part={part} />
          )}
      </div>
    )
}

const Total = ({course}) => {
    const total = course.parts.reduce((a, b) => a + b.exercises,0);
    return (
      <div>
        <h4>Total of {total} exercises</h4>
      </div>
    )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default Course  