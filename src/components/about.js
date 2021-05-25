import React from "react"
import styled from '@emotion/styled';

const AboutDiv = styled.div`
margin: auto;
h1{
    
    font-weight: normal;
}
p {margin-top: 30px}
/* padding: 20px 20px 160px 20px; */
padding: 40px 20px 100px 20px;
max-width: 650px;
background-color: white;
`

const AboutId = styled.div`
position: relative;
top: -86px;
`
// const aboutInfo = ["He specialises in criminal and traffic law. He has an excellent record of obtaining the best possible outcomes for clients appearing in Court on a wide range of charges.",
//     "Rob appears regularly in the Hamilton, Morrinsville, Huntly and Te Awamutu Courts. He acts on a wide range of traffic matters including drink driving (EBA, DIC), careless or dangerous driving, wheel spinning, driving while disqualified, speeding and limited licence applications. Rob has assisted a number of clients in successfully defending traffic charges, avoiding losing their drivers licence and obtaining discharges without conviction or work licences.",
//     "Rob acts on a variety of criminal matters including assault, theft, fraud and drug charges. He is experienced in negotiating with police to reduce or withdraw charges, obtaining diversion and discharges without conviction. He has an excellent record of getting bail for his clients, defending charges and getting the best possible sentencing outcomes."
//     ];

function About ({aboutInfo}) {
    
    return (
        <div>
            <AboutId id="aboutM"/>
            <AboutDiv id="aboutSection">
                <h1 >Rob has been a lawyer in Hamilton since 2005 </h1>
                {aboutInfo.map((paragraph)=>(
                    <p>{paragraph}</p>
                ))}
            </AboutDiv>
        </div>
    )
}

export default About;