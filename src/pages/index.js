// Step 1:export const Head = () => <title>Home Page</title>
import * as React from "react"; //import react

//Step 2: define component
//capital letter in front for component name.

const Homepage = () => {
  return (
    <>
      <h1>Welcome to my website!</h1>
      <p>This is my first time to create website using Gatsby!</p>
      <a href="/">Home</a> <a href="/about">About</a>
    </>
  )
};

//Step 3: Export
export default Homepage;