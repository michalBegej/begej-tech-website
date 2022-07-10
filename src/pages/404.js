import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout pageTitle="Index">
    <SEO title={"404"}/>
    <div className="w-3/4 flex flex-col align-end pr-1 pl-1">
      <div className="font-sans text-sky-600 text-5xl sm:text-6xl md:text-7xl self-end">
        <span className="font-bold">404</span>
      </div>
      <div className="self-end"> 
        <span className="font-sans font-extralight text-slate-500 text-xs md:text-xl">Nothing here</span>
      </div>
      <hr className="border-slate-300 font-extralight" />
    </div>
  </Layout>
)

export default NotFoundPage
