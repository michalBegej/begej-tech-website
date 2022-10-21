import React from "react"

const Section = ({ children, title }) => (
    <div className="font-sans min-h-96 p-2 flex flex-col" >
        <h1 className='font-bold text-sky-600 pb-2 text-xl'>{title}</h1>
        {children}
    </div>
)

export default Section;