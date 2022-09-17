import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = () => {

    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>My blog posts contents will do here (eventually).</p>
        </Layout>

    )//end Return
}//end BlogPost


export const Head = () => <Seo title="Super Cool Blog Posts" />
export default BlogPost