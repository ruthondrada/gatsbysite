// Step 1:export const Head = () => <title>Home Page</title>
import * as React from 'react'; //import react
import { Link } from 'gatsby'

//Step 2: define component
//capital letter in front for component name.

const Homepage = () => {
  return (
    <>
      <main>
        <h1>Welcome to my website!</h1>
        <Link to="/about">About</Link>
        <p>This is my first time to create website using Gatsby!</p>
      </main>
    </>
  )
};

export const Head = () => <title> Home Page</title>
//Step 3: Export
export default Homepage;