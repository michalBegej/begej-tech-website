import * as React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

const IndexPage = () => (
  <Layout pageTitle="Index">
    <div className="w-3/4 flex flex-col pr-1 pl-1">
      <div className="font-sans text-sky-600 text-5xl">
        <span className="font-bold">Michal</span> <span className="font-light">Begej</span>
      </div>
      <div>
        <span className="font-sans font-extralight text-slate-500">Software development</span>
      </div>
      <hr className="border-slate-300 font-extralight" />
      <div className=" flex justify-around pt-4 pb-4">
        <a href="https://www.linkedin.com/in/michal-begej/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-sky-600 text-xl" /></a>
        <a href="mailto:michal@begej.tech"><FontAwesomeIcon icon={faEnvelope} className="text-sky-600 text-xl" /></a>
      </div>
    </div>
  </Layout>
)

export default IndexPage;