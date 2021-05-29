import React from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"

const MobileId = styled.div`
position: absolute;
top: -100px;
`

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
@media (min-width: 1025px) {
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



function HeroComponent ({specialties, courts}) {
    return (
            <div style={{ display: "grid" }} id="homeSection">
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
                <MobileId id="homeM"/>

                <HeroImage>
                    <StaticImage src={"../images/profile.jpg"} alt="Profile shot of Rob Quin in navy suit" />
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
                        {courts.map((court, i) => (
                            <li key={"court" + i}>{court}</li>
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
    )
}

export default HeroComponent;