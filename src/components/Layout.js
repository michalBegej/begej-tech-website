import * as React from 'react'

const Layout = ({ pageTitle, children }) => (

    <div className='container mx-auto h-screen w-full flex justify-center items-center bg-slate-50' >
        {children}
    </div>
)

export default Layout