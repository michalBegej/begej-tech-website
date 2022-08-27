import * as React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout pageTitle="Software development" currentPageId="development">
    <SEO title={"Michal Begej - Senior software developer"} useGlobalTitle={false} />
    <div className="">software development</div>
  </Layout>
)

export default IndexPage;