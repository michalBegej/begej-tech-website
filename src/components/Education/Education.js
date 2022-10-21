import * as React from 'react'
import EducationRecord from './EducationRecord';
import Section from '../Section';

const Education = () => (


    <Section title={'EDUCATION'}>
        <EducationRecord
            title={'AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY'}
            degree={'MASTER\'S IN COMPUTER SCIENCE'}
            period={'2016 - 2017 | Cracow, Poland'}
            field={'Applied Computer Science'}
        />
        <EducationRecord
            title={'AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY'}
            degree={'BACHELOR\'S IN COMPUTER SCIENCE AND ENGINEERING'}
            period={'2012 ‑ 2016 | Cracow, Poland'}
            field={'Applied Computer Science'}
        />
        <EducationRecord
            title={'SECONDARY MUSIC SCHOOL'}
            degree={''}
            period={'2006 ‑ 2012 | Nysa, Poland'}
            field={'Specialization: Drums'}
        />
    </Section>
)



export default Education;