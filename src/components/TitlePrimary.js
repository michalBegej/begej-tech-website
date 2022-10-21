import React from 'react';

const TitlePrimary = ({ text, subtext }) => (
    <div className='flex'>
        <p className='font-semibold '>{text}</p>
        {subtext&& <p className='font-extralight pl-2'>|{subtext}</p>}
    </div>

)

export default TitlePrimary;