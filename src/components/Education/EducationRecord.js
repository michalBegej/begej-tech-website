import React from "react"
import PeriodText from "../PeriodText";
import TitlePrimary from '../TitlePrimary';
import TitleSecondary from '../TitleSecondary';
import NormalText from "../NormalText";

const EducationRecord = ({ title, degree, period, field }) => (
    < div className='mb-3 font-sans' >
        <div className='flex'>
            <TitlePrimary text={title} />
        </div>
        <div className='mt-2 mb-2 '>
            <TitleSecondary text={degree} />
            <PeriodText text={period} />
            <NormalText text={field} />
        </div>
    </div >
)

export default EducationRecord;