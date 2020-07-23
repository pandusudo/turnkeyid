import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InputLayout from "../components/inputlayout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>.toUpperCase</h1>
    <p>Please insert a word or a sentence, and don't use any special character</p>
    <InputLayout />
  </Layout>
)

export default IndexPage
