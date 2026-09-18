const App = () => {
  const course = 'Industry Elective 1'
  const part1 = 'Introduction to React'
  const exercises1 = 10
  const part2 = 'Anatomy of React'
  const exercises2 = 7
  const part3 = 'React Hooks'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App