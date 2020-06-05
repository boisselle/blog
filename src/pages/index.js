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
          JavaScript Developer and User Interface Designer
          {/* Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span> */}
        </h1>
        <h3>Specializing in React, Gatsby, and Three.js <br /> Skilled in multiple tech stacks.</h3>
        <Link to="/blog/">
          <Button marginTop="25px">Read my Blog</Button>
        </Link>
        <p> Portfolio 👇</p>
      </Layout>
    )
  }
}

export default IndexPage
