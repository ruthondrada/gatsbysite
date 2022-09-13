// Step 1:export const Head = () => <title>Home Page</title>
import * as React from 'react'; //import react
//import { Link } from 'gatsby'
import Layout from '../components/layout';
//import plugin
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

//Step 2: define component
//capital letter in front for component name.

const Homepage = () => {
  return (
   <Layout pageTitle="My Home Page">
    <p> I'm making this by following the Gatsby tutorial.</p>
   <StaticImage
            alt="Kim Taeyeon, Girls Generation"
            src="../images/taeyeon.jpg"/>
   </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
//Step 3: Export
export default Homepage;