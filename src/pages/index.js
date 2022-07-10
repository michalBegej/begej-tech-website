import * as React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <SEO title={"Michal Begej - Senior software developer"} useGlobalTitle={false} />
    <div className="w-3/4 flex flex-col pr-1 pl-1 sm:w-3/5 md:w-3/5 lg:w-3/6 xl:w-2/6">
      <div className="font-sans text-sky-600 text-5xl sm:text-6xl md:text-7xl">
        <span className="font-bold">Michal</span> <span className="font-light">Begej</span>
      </div>
      <div className="md:text-xl">
        <span className="font-sans font-extralight text-slate-500">Senior software developer</span>
      </div>
      <hr className="border-slate-300 font-extralight" />
      <div className=" flex justify-around pt-4 pb-4">
        <a href="https://www.linkedin.com/in/michal-begej/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-sky-600 text-2xl " /></a>
        <a href="mailto:michal@begej.tech"><FontAwesomeIcon icon={faEnvelope} className="text-sky-600 text-2xl " /></a>
      </div>
    </div>
  </Layout>
)

export default IndexPage;