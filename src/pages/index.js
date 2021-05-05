import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

// styles
const pageStyles = {
  marginTop: "100px",
  color: "#232129",
  fontFamily: "Segoe UI",
}
const Hero = styled.div`
display: flex;
justify-content: center;
align-items: center;

font-family: 'Segoe UI';
font-weight: 400;
font-size: 16px;
/* max-width: 670px; */
/* background-color: white; */
padding: 20px 40px;
h1 {
    font-weight: 400;
}
h3 {
    color: #707070;
    font-weight: 400;
}

h3, li {
    margin-left: 20px;
}
@media (max-width: 1024px) {
    /* flex-wrap: wrap;
    justify-content:flex-start;
    align-items: flex-start; */
    width: 100%;
    max-height: 600px;
    display: block;
    background-color: white;
    -webkit-columns: 1vw 2;
    -moz-columns: 1vw 2;
    columns: 1vw 2;
    column-fill: auto;
    padding: 0;
    align-self: flex-start;
    /* margin-top: 10px; */
    h1 {
        font-size: 20px;
    }
    h3 {
        font-size: 18px;
    }
}

`
const HeroText = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
background-color: white;
padding: 30px 60px 30px 110px;
width: 100%;
@media (max-width: 1024px) {
    display: none;
}
` 
const HeroTextMobile = styled.div`
background-color: white;
display: block;
-webkit-column-break-inside: avoid;
page-break-inside: avoid;
break-inside: avoid;
width: 100%;
height: 100%;
break-after: always;
padding-top: 10px;
@media (min-width: 1024px) {
display: none;
}
`

const HeroImage = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
z-index: 100;
max-height: 360px;
height: 100%;
width: 100%;
max-width: 242px;
margin-right: -50px;

@media (max-width: 1024px) {
    max-width: 242px;
    margin-right: 0px;
    height: 100%;
    width: 100%;
    box-shadow: none;
}
`

const About = styled.div`
margin: auto;
h1{
    
    font-weight: normal;
}
p {margin-top: 30px}
padding: 20px 20px 160px 20px;
max-width: 650px;
background-color: white;
`

const Contact = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
h1 {
    font-weight: 500;
    font-size: 50px;
    font-family: "Halant";
}
width: 960px;
height: 500px;
background-color: white;
border: 5px solid #828FAD;
display: flex;
flex-direction: row;
:first-of-type div {
    max-width: 50%;
    width: 100%;
    /* padding: 20px; */
    p {
        max-width: 270px;
    }
    ul {
        padding: 0;
        list-style: none;
    }
} 
form {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 50px 50px;

    p {
        margin-bottom: 2px;
    }

    label {
        margin: 10px 0;
        color: #707070;
        
    }
    textarea, input, button {
        border: 2px solid #828FAD;
        width: 100%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    button {
        background-color:#828FAD;
        color: white;
        height: 26px;
        transition: .3s; 
        :hover {
            cursor: pointer;
            opacity: 90%;
        }
    }
}

@media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    /* min-width: 360px; */
    border: none;
    justify-content: space-around;
    height: auto;
    :first-of-type div {
        max-width: 100%;
    }
    form {
        margin: auto;
        justify-content: space-between;
        max-width: 440px;
    }
}
`

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
width: 100%;
h1, ul, p {
    width: 270px;
}

@media (max-width: 1024px) {
    h1, ul, p {
    min-width: 100px;
    width: 100%;
    max-width: 270px;
    }
    align-items: center;
    /* width: 100%; */
    form { 
        width: 100%;
    }
}
`


// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

const specialties = [
    "Bail",
    "Trials",
    "Traffic matters",
    "Drink driving",
    "Work licences",
    "Assault",
    "Fraud",
    "Drug charges",
    "Agency appearances",
    "Legal aid",
    "Diversion",
    "Discharge without conviction"
];
const courts = ["Hamilton","Morrinsville","Huntly", "Te Awamutu"];

const about = ["He specialises in criminal and traffic law. He has an excellent record of obtaining the best possible outcomes for clients appearing in Court on a wide range of charges.",
"Rob appears regularly in the Hamilton, Morrinsville, Huntly and Te Awamutu Courts. He acts on a wide range of traffic matters including drink driving (EBA, DIC), careless or dangerous driving, wheel spinning, driving while disqualified, speeding and limited licence applications. Rob has assisted a number of clients in successfully defending traffic charges, avoiding losing their drivers licence and obtaining discharges without conviction or work licences.",
"Rob acts on a variety of criminal matters including assault, theft, fraud and drug charges. He is experienced in negotiating with police to reduce or withdraw charges, obtaining diversion and discharges without conviction. He has an excellent record of getting bail for his clients, defending charges and getting the best possible sentencing outcomes."
];

// markup
const IndexPage = () => {
  return (
    <Layout>
        <main style={pageStyles}>
        <title>Home Page</title>
         {/* Hero Section */}
        <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
            style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 900,
            minHeight: "700px",
            }}
            layout="fullWidth"
         // You can optionally force an aspect ratio for the generated image
            aspectRatio={5 / 2}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={"../images/HeroLabel.png"}
            formats={["auto", "webp", "avif"]}
        />
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            }}
        >
        {/* Any content here will be centered in the component */}
        <Hero>

        <HeroImage>
            <StaticImage src={"../images/profile.jpg"} />
        </HeroImage>

        <HeroText>
            <h1>Criminal & Traffic Lawyer Hamilton</h1>
            <h3>Specialties</h3>
            <ul>
            {specialties.map((service) => (
                <li>{service}</li>
            ))}
            </ul>
            <h3>Courts</h3>
                <ul>
                {courts.map((court) => (
                    <li>{court}</li>
                ))}
                </ul>
        </HeroText>

        <HeroTextMobile>
        <h3>Courts</h3>
                <ul>
                {courts.map((court) => (
                    <li>{court}</li>
                ))}
                </ul>
        </HeroTextMobile>

        <HeroTextMobile>
        <h1>Criminal & Traffic Lawyer Hamilton</h1>
            <h3>Specialties</h3>
            <ul>
            {specialties.map((service) => (
                <li>{service}</li>
            ))}
            </ul>
        </HeroTextMobile>
        
    
        
        
            
        </Hero>
       
      </div> 
      </div>

      {/* About Section */}
      <About>
            <h1>Rob has been a lawyer in Hamilton since 2005 </h1>
            {about.map((paragraph)=>(
                <p>{paragraph}</p>
            ))}
        </About>

    {/* Contact Section */}
    <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
            style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 900, 
            minHeight: "700px",
            }}
            layout="fullWidth"
         // You can optionally force an aspect ratio for the generated image
            aspectRatio={5 / 2}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={"../images/contact3.png"}
            formats={["auto", "webp", "avif"]}
        />
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            }}
        >
            <Contact>
            <ContactInfo>
                <h1>Contact:</h1>
                <p>For a no obligations discussion to see if Robs a fit for you please use the contact information below or send an enquiry.</p>
                <ul>
                    <li>M 021 216 2841</li>
                    <li>P 07 839 2369</li>
                    <li>F 07 839 2366</li>
                    <li>Email: rob@robquin.co.nz</li>
                </ul>
            </ContactInfo>
            <div>
            <form method="post" action="#">
                <label>
                        <p>Name:</p>
                        <input type="text" name="name" />
                </label>
                <label>
                    <p>Email:</p>
                    <input type="email" name="email" />
                </label>
                <label>
                    <p>Enquiry:</p>
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                </form>
            </div>
                
            </Contact>

        </div>
    </div>
    
        </main>
    </Layout>
  )
}

export default IndexPage
