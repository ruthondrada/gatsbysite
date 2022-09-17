import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

//render?
const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.date}</h2>
                        <p>Posted:  {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }    
        </Layout>
    )
}

//response
export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }
  
  `

export const Head = () => <Seo title="My Blog Posts" />
export default BlogPage