import React from "react";
import { Link } from "gatsby";
import SearchResults from "../components/SearchResults";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Meta-Data" />
    <h1 style={{ fontSize: "1.25em"}}>Stats on your Favorite Meta-Humans, Super Heros and Comic Characters</h1>
    <p>Enter Character Name:</p>
    <input type="text" placeholder="Enter Character Name"></input>
    <button >Search</button>
    <SearchResults />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
