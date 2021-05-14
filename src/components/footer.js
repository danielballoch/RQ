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
a:hover {
    cursor: pointer;
}
li {
    color: white;
    text-decoration: none;
    padding: 0 8px;
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


const blog = () => {
    return(
        <div>
            <LinkSection>
                <Links>
                    {/* <a onClick={() => {scrollTo("#homeSection","center");}}>Home</a> */}
                    <a onClick={() => {scrollTo("#homeSection","center");}}>Services</a>
                    <a onClick={() => {scrollTo("#aboutSection","center");}}>About</a>
                    <a onClick={() => {scrollTo("#contactSection","center");}}>Contact</a>     
                </Links>
                <Links>
                    <li>Postal:</li>
                    <li>PO Box 20109</li>
                    <li>Te Rapa</li>
                    <li>Hamilton 3241</li>     
                </Links>
                <Links>
                    <li>Office:</li>
                    <li>71 Anglesea Street</li>
                    <li>Hamilton 3241</li>  
                </Links>
                
            </LinkSection>
            <Copyright><a href="https://www.danielballoch.com">© {new Date().getFullYear()}, {` `}Rob Quin</a> <a href="https://www.danielballoch.com">Terms & Conditions/Privacy Policy</a></Copyright>  
        </div>
  
    )
}
export default blog