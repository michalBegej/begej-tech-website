import * as React from "react"
import Layout from "../components/Layout"
import About from '../components/About'
import SEO from "../components/SEO"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skils from "../components/Skils"

const IndexPage = () => (
  <Layout pageTitle="Software development" currentPageId="development">
    <SEO title={"Michal Begej - Senior software developer"} useGlobalTitle={false} />
      <About/>
      <Experience/>
      <Skils/>
      <Education/>
  </Layout>
)

export default IndexPage;