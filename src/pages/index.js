import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Sean Boisselle"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Software Engineer <br />+ UI Designer
          {/* Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span> */}
        </h1>
        <p style={{fontSize: "22px", fontFamily: "Helvetica", marginTop: "3px"}}> Based in San Francisco</p>
        <h3>
          Skilled in full-stack development from conceptualization to deployment.<br /><br />
          Specializing in JavaScript and Python with React, Gatsby, Node, Django and Flask.
        </h3>
        <Link to="/blog/">
          <Button marginTop="25px">Read my Blog</Button>
        </Link>
        <h4> Portfolio coming soon.</h4>
      </Layout>
    )
  }
}

export default IndexPage
