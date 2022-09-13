import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout';
import Seo from '../components/seo';

//create component
const About = () =>
{
    return (
        <Layout pageTitle="About me">
            <p> Hi There! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
       
    )
}

export const Head = () => <Seo title="About"/>

//export
export default About;