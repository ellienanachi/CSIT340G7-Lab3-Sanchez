const Header = (props) => {
  return <h1>{props.course}</h1>
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
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
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
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = {
    name: 'CSIT321 (Database Systems)',
    exercises: 3
  }
  const part2 = {
    name: 'MATH211 (Discrete Mathematics)',
    exercises: 3
  }
  const part3 = {
    name: 'CSIT227 (Object-Oriented Programming)',
    exercises: 3
  }

  const student = {
    fullName: 'Chad Ellie Sanchez',
    courseCode: 'CSIT340',
    section: 'ITG7'
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App
