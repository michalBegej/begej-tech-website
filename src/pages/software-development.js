import * as React from "react"
import Layout from "../components/Layout"
import About from '../components/About/About'
import SEO from "../components/SEO"
import Experience from "../components/Experience/Experience"
import Education from "../components/Education/Education"
import Skils from "../components/Skills/Skils"
import Hobbies from "../components/Hobbies/Hobbies";

const IndexPage = () => (
  <Layout pageTitle="Software development" currentPageId="development">
    <SEO title={"Michal Begej - Senior software developer"} useGlobalTitle={false} />
    <div>
      <About />
    </div>
    <div className="lg:flex">
      <div className="flex-auto">
        <Experience />
      </div>
      <div className="basis-1/5">
        <Skils />
        <Education />
        <Hobbies />
      </div>
    </div>
  </Layout>
)

export default IndexPage;