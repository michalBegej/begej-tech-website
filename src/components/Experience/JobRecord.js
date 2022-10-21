import * as React from 'react'
import PeriodText from '../PeriodText';
import TitlePrimary from '../TitlePrimary';
import NormalText from '../NormalText';

const JobRecord = ({ companyName, position, period, duties }) => (
    < div className='mb-3 font-sans' >
        <div className='flex'>
            <TitlePrimary text={companyName} subtext={position} />
        </div>
        <PeriodText text={period} />
        <div className='pl-2 pt-3 mb-2'>
            <ul role="list" class="list-disc pl-5 space-y-3 ">
                {duties.map(duty => <li className='text-slate-500'><NormalText text={duty} /></li>)}
            </ul>
        </div>
    </div >
)

export default JobRecord;