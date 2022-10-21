import * as React from 'react'
import Skillset from './Skillset';

import Section from '../Section';

function Skils() {

    const skillSets = [
        {
            title: 'PROGRAMMING',
            skills: 'C# • .NET framework/ Core • ASP.NET WebApi/ MVC • React.js • Azure • Bicep • SQL'
        },
        {
            title: 'TOOLS/PLATFORMS',
            skills: 'Git • Visual Studio • Rider • Resharper • Azure DevOps • Jira'
        },
        {
            title: 'ADDITIONALS',
            skills: 'REST • SOLID • TDD • IaC • Unit tests • C4 model • ADL'
        },
        {
            title: 'LANGUAGES',
            skills: 'Polish • English'
        }
    ];

    return (
        <Section title={'SKILLS'}>
            {skillSets.map(skillSet => <Skillset title={skillSet.title} skills={skillSet.skills} />)}
        </Section>
    )
}


export default Skils;