// Step 1:export const Head = () => <title>Home Page</title>
import * as React from 'react'; //import react
//import { Link } from 'gatsby'
import Layout from '../components/layout';
//import plugin
import { StaticImage } from 'gatsby-plugin-image';

//Step 2: define component
//capital letter in front for component name.

const Homepage = () => {
  return (
   <Layout pageTitle="My Home Page">
    <p> I'm making this by following the Gatsby tutorial.</p>
   <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
   </Layout>
  )
}

export const Head = () => <title> Home Page</title>
//Step 3: Export
export default Homepage;