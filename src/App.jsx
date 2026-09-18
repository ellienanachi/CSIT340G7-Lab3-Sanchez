const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
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
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Applications Development and Emerging Technologies'
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