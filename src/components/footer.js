import React from "react"
import styled from '@emotion/styled';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
    transition: .3s;
    margin: 0;
}
a:hover {
    color: black;
}
`


const blog = () => {
    return(
        <div>
            <LinkSection>
                <Links>
                    {/* <a onClick={() => {scrollTo("#homeSection","center");}}>Home</a> */}
                    <button onClick={() => {scrollTo("#homeSection","center");}}>Services</button>
                    <button onClick={() => {scrollTo("#aboutSection","center");}}>About</button>
                    <button onClick={() => {scrollTo("#contactSection","center");}}>Contact</button>     
                </Links>
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
            <Banner>Website by <a href="https://www.thoughtfulhq.com">thoughtfulHQ</a></Banner>
            <Copyright><a href="https://www.robquin.co.nz/">© {new Date().getFullYear()}, {` `}Rob Quin</a> <a href="/privacy-policy">Privacy Policy</a></Copyright>  
            
        </div>
  
    )
}
export default blog