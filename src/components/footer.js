import React from "react"
import styled from '@emotion/styled';

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
    padding: 0 8px;
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
                    <a href="https://www.linkedin.com/in/danielpatrickballoch/">Home</a>
                    <a href="https://dribbble.com/danielballoch">About</a>
                    <a href="https://www.instagram.com/thoughtful_hq/">Services</a>
                    <a href="https://github.com/danielballoch">Contact</a>     
                </Links>
                <Links>
                    <a href="https://www.linkedin.com/in/danielpatrickballoch/">Postal:</a>
                    <a href="https://dribbble.com/danielballoch">PO Box 20109</a>
                    <a href="https://www.instagram.com/thoughtful_hq/">Te Rapa</a>
                    <a href="https://github.com/danielballoch">Hamilton 3241</a>     
                </Links>
                <Links>
                    <a href="https://www.linkedin.com/in/danielpatrickballoch/">Office:</a>
                    <a href="https://dribbble.com/danielballoch">71 Anglesea Street</a>
                    <a href="https://www.instagram.com/thoughtful_hq/">Hamilton 3241</a>  
                </Links>
                
            </LinkSection>
            <Copyright><a href="https://www.danielballoch.com">© {new Date().getFullYear()}, {` `}Rob Quin</a> <a href="https://www.danielballoch.com">Terms & Conditions/Privacy Policy</a></Copyright>  
        </div>
  
    )
}
export default blog