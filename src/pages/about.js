import * as React from "react"

//create component
const About = () =>
{
    return (
        <>
        <title>Ruth's web</title>
        <h1> This is my about!</h1>
        <p>My name is Ruth! </p>
        <a href="/">Home</a> <a href="/about">About</a>
        </>
    )
};

export const Head = () => <title> About Me</title>

//export
export default About;