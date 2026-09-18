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
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
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
  const part1 = 'CSIT321 (Database Systems)'
  const exercises1 = 3
  const part2 = 'MATH211 (Discrete Mathematics)'
  const exercises2 = 3
  const part3 = 'CSIT227 (Object-Oriented Programming)'
  const exercises3 = 3

  const student = {
    fullName: 'Chad Ellie Sanchez',
    courseCode: 'CSIT340',
    section: 'ITG7'
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App