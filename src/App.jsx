const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>
        {props.fullName} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      { name: 'CSIT321 (Database Systems)', exercises: 3 },
      { name: 'MATH211 (Discrete Mathematics)', exercises: 3 },
      { name: 'CSIT227 (Object-Oriented Programming)', exercises: 3 }
    ]
  }

  const student = {
    fullName: 'Chad Ellie Sanchez',
    courseCode: 'CSIT340',
    section: 'ITG7'
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App
