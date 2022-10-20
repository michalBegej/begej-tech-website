import * as React from 'react'
import Navigation from './Navigation'
import Footer from './Footer';

const HomePageLayout = ({ children }) => (
    <div className='container mx-auto h-screen w-full flex justify-center items-center bg-slate-50' >
        {children}
    </div>
)

const DefaultPageLayout = ({ children, currentPageId }) => (
    <div className='bg-slate-50 h-screen flex flex-col'>
        <Navigation currentPageId={currentPageId} />
        <div className='container mx-auto h-screen w-full flex flex-col justify-between bg-yellow-50'>
            {children}
        </div>
        <Footer/>
    </div>
)

const Layout = ({ pageTitle, children, isHomePage, currentPageId }) => (
    isHomePage ?
        <HomePageLayout children={children} />
        :
        <DefaultPageLayout children={children} currentPageId={currentPageId} />
)

export default Layout