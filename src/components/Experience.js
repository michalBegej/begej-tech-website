import React, { useState } from 'react'
import JobRecord from './JobRecord';

function Experience() {
    const jobs = [
        {
            companyName: 'COLUMBUS A/S',
            position: 'Senior .NET developer',
            period: 'February 2020 - Current',
            duties:
                [
                    'Designing and developing eCommerce solutions for Scandinavian and Global clients for both business and individual customers based on Litium platform',
                    'Designing and developing eCommerce solution based on Commercetools platform and Azure services',
                    'Works on multidisciplinary teams located throughout Poland and Scandinavia',
                    'Works closely with clients during features development and testing.',
                    'Participating in center of excellence projects',
                    'Implementing CI/CD process for projects (azure devops)',
                    'Recruiting new employees',
                    'Mentoring of new employees',
                    'Tech leading projects'
                ]
        },
        {
            companyName: 'COLUMBUS A/S',
            position: '.NET developer',
            period: 'March 2019 – January 2020',
            duties:
                [
                    'Developing eCommerce solutions for Scandinavian and Global clients for bothbusiness and individual customers based on Litium platform',
                    'Works on multidisciplinary teams located throughout Poland and Scandinavia'
                ]
        },
        {
            companyName: 'ARGOS MULTILINGUAL',
            position: 'Software developer',
            period: 'November 2017 – February 2019',
            duties:
                [
                    'Implementing features, refactoring and bug fixing of in-house translationmanagement system based on ASP.NET MVC, Web API and React.js'
                ]
        },
        {
            companyName: 'MOTOROLA SOLUTIONS',
            position: 'Software developer',
            period: 'February 2017 – October 2017',
            duties:
                [
                    'Implementing integrations of 3rd party Video Management Systems',
                    'Implementing integration of video streaming desktop application with Cloud solution'
                ]
        },
        {
            companyName: 'MOTOROLA SOLUTIONS',
            position: 'Junior software developer',
            period: 'April 2016 – January 2017',
            duties:
                [
                    'Developing internal tools in ASP.NET',
                    'Implementing Selenium UI test'
                ]
        }
    ]

    return (
        <div className="font-sans min-h-96 p-2 flex flex-col" >
            <h1 className='font-bold text-sky-600'>EXPERIENCE</h1>
            {jobs.map(job => <JobRecord
                companyName={job.companyName}
                position={job.position}
                period={job.period}
                duties={job.duties}
            />)}
        </div>
    )
}

export default Experience;