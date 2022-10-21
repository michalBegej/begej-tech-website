import * as React from 'react'
import Section from '../Section';
import NormalText from '../NormalText';

const About = () => (
    <Section title={'Hi, I am Michal'}>
        <div className='p-3 text-justify'>
            <NormalText text={'I am C#/ .Net developer with over six years of commercial experience in a multicultural environment.'} />
            <NormalText text={'I am focused on customer satisfaction from a business perspective and solution quality from a technical side.'} />
            <NormalText text={'Outside of work, I am trying to continuously expand my technical skills.'} />
        </div>
    </Section>

)

export default About;