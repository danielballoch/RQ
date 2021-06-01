import React from "react"
import styled from '@emotion/styled';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-gtag"

const LinkSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
justify-items: last baseline;
width: 100%;
height: 20vh;
padding: 40px 0;
background-color: #283759;
/* background-color: #232323; */
a{
    color: white;
    text-decoration: none;
    padding: 12px 8px;
}
button:hover {
    cursor: pointer;
}
p {
    color: white;
    text-decoration: none;
    padding: 0 8px;
    margin: 0;
    list-style: none;
}
`
const Links = styled.div`
font-size: 1.05em;
min-height: 70px;
padding: 0 18px;
display: flex;
flex-direction: column;
text-align: left;
justify-content: end;

button {
    display: flex;
    align-items: center;
    font-family: 'serif';
    background: none;
    color: white;
    border: none;
    padding: 0 18px;
    min-height: 70px;
    font-size: 1em;
}

a {
    display: flex;
    align-items: center;
    font-family: 'serif';
    background: none;
    color: white;
    border: none;
    padding: 0 18px;
    min-height: 70px;
    font-size: 1em;
    
}





`
const Copyright = styled.div`
/* background-color: #4D5F8B; */
background-color: #283759;
text-align: center;
padding-bottom: 10px;
a {
    margin: auto 12px 10px 12px;
    text-decoration: none;
    color: white;
}
`

const Banner = styled(Copyright)`
/* background-color: #4D5F8B; */
color: white;
font-family: "open sans";
font-size: 1.2em;
a {
    transition: .6s;
    margin: 0;
    border-bottom: #283759 2px solid;
}
a:hover{
    transition: .3s;
        border-bottom: white 2px solid;
        cursor: pointer;
    }
`


const blog = ({pageLocation}) => {
    let NavLinks = (
        <Links>
            <a href="/#homeM">Services</a>
            <a href="/#aboutM">About</a>
            <a href="/#contactM">Contact</a>     
        </Links>
    )
    if (pageLocation === "/"){
        NavLinks = (
            <Links>
                <button onClick={() => {scrollTo("#homeM","start");}}>Services</button>
                <button onClick={() => {scrollTo("#aboutM","start");}}>About</button>
                <button onClick={() => {scrollTo("#contactM","start");}}>Contact</button>     
            </Links>
        )
    }

    return(
        <div>
            <LinkSection>
                {NavLinks}
                <Links>
                    <p>Postal:</p>
                    <p>PO Box 20109</p>
                    <p>Te Rapa</p>
                    <p>Hamilton 3241</p>     
                </Links>
                <Links>
                        <p>Office:</p>
                        <p>71 Anglesea Street</p>
                        <p>Hamilton 3241</p>  
                </Links>
                
            </LinkSection>
            <Banner>Website by <OutboundLink href="https://www.thoughtfulhq.com">thoughtfulHQ</OutboundLink></Banner>
            <Copyright><a href="https://www.robquin.co.nz/">© {new Date().getFullYear()}, {` `}Rob Quin</a> <a href="/privacy-policy">Privacy Policy</a></Copyright>  
            
        </div>
  
    )
}
export default blog