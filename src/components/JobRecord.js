import * as React from 'react'
import ExtendableList from './ExtendableList'; 

const JobRecord = ({ companyName, position, period, duties }) => (

    < div className='mb-3 font-sans' >
        <div className='flex'>
            <p className='font-semibold '>{companyName}</p>
            <p className='font-extralight pl-2'>|{position}</p>
        </div>
        <div className='mb-2'>
            <span className='font-semibold text-slate-500 text-xs' >{period}</span>
        </div>
        <ExtendableList items={duties} />
    </div >
)

export default JobRecord;