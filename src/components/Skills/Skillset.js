import * as React from 'react';
import NormalText from '../NormalText';
import TitlePrimary from '../TitlePrimary';


const Skillset = ({ title, skills }) => (
    < div className='mb-3 font-sans' >
            <TitlePrimary text={title}/>
        <div className='mt-2 mb-2 text-justify'>
            <NormalText text={skills} />
        </div>
    </div >
)

export default Skillset;