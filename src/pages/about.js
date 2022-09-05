import * as React from 'react'
import { Link } from 'gatsby'

//create component
const About = () =>
{
    return (
        <>
        <title>Ruth's web</title>
        <h1> This is my about!</h1>
        <Link to="/">Back to Home</Link>
        <p>My name is Ruth! </p>
        </>
    )
};

export const Head = () => <title> About Me</title>

//export
export default About;