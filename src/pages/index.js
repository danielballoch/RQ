import * as React from "react"
import Layout from "../components/layout"
import ContactComponent from "../components/contact"
import AboutComponent from "../components/about"
import HeroComponent from "../components/hero"

// styles
const pageStyles = {
  marginTop: "100px",
  color: "#232129",
  fontFamily: "Open Sans",
}


// data
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

//components
const IndexPage = ({location}) => {
  return (
    <Layout pageLocation={location.pathname}>
        <main style={pageStyles}>
        <title>Home Page</title>
        <HeroComponent specialties={specialties} courts={courts}/>
        <AboutComponent aboutInfo={about}/>
        <ContactComponent/>
        </main>
    </Layout>
  )
}

export default IndexPage
