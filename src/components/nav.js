import React, {useState} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';

//Nav

const styles = ({menuOpen}) => css`
    display: block;
    padding: 15px;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}
.hamburger-inner {
        display: block;
        top: 50%;
        margin-top: 8px;
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;

        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);    
}
.hamburger-inner:before {
        transition: top 0.075s 0.12s ease,
        opacity 0.075s ease;
        left: 0;
        top: -10px;
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        content: "";
}

.hamburger-inner:after {
        transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        content: "";
        left: 0;
        bottom: -10px;
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
}

@media (min-width: 1025px) {
    display:none;
}
${menuOpen === true &&`
.hamburger-inner-active {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    .hamburger-inner-active::before {
        content: "";
        top: 0;
        opacity: 0;
        transition: top 0.075s ease,
        opacity 0.075s 0.12s ease;
    }
    
    .hamburger-inner-active::after {
        content: "";
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }


`}
`

const sidebarStyles = ({menuOpen}) => css`
position: fixed;
top: 0;
right:0;
z-index: 100;
height: 100%;
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
transform: translateX(100%);
background-color: white;
button:hover {
    cursor: pointer;
}
transition: .3s;
.backdrop{
    position: fixed;
    z-index: 50;
    top: 110px;
    left: 0;
    transition: .2s;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: .5;
}
@media (min-width: 1025px) {
    display:none;
}
${menuOpen === true &&`
background-color: white;
transform: translateX(0%);
`}
`
const backdropStyle = ({menuOpen}) => css`
    
@media (min-width: 1025px) {
    display:none;
}
${menuOpen === true &&`
    position: fixed;
    z-index: 50;
    top: 110px;
    left: 0;
    transition: .2s;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: .5;
`}
`


const Navbar = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
margin: auto;
justify-content: center;
width: 100%;
z-index: 1000;
background-color: white; 
/* inset */
/* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;  */
/* min github */
box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`
const NavContent = styled.div`
max-width: 960px;
z-index: 1000;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100px;
width: 100%;
a{
    font-size: 1.1em;
    font-weight: 100;
    margin: 0 10px;
    transition: .3s;
    text-decoration: none;
}
@media (max-width: 1024px){
    margin-top: 10px;

}
`
const Links = styled.div`
@media (max-width: 1024px){
    display: none;
}
`
const NavLink = styled.a`
color: black;
border-bottom: white 2px solid;
:hover{
        border-bottom: black 2px solid;
        cursor: pointer;
    }
`

const DrawerLink = styled.button`
font-family: 'Open Sans';
color: black;
background: none;
border: none;
padding: 10px 20px;
font-size: 1.5em;
:hover{
        cursor: pointer;
    }
`

const DrawerLinkA = styled.a`
font-family: 'Open Sans';
color: black;
text-align: center;
text-decoration: none;
background: none;
border: none;
padding: 10px 20px;
font-size: 1.5em;
:hover{
        cursor: pointer;
    }
`


const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* margin:  0 auto 0 100px; */
h1 {
    font-weight: 500;
    font-size: 50px;
    font-family: "Halant";
    margin:  0 0 -18px 0;
    letter-spacing: 2px;
}
p {
    margin: 0;
    color: #707070;
    margin-left: 20px;
}
`
const LogoLink = styled(Link)`
margin: 0 !important;
p {
    font-size: 16px;
}

h1 {
    color: black;
}
`



export default function Nav({pageLocation}){
    const [menuOpen, setMenuOpen] = useState(false);
    console.log('navbar props', pageLocation)
    let NavigationLinks = <Links> 
        <NavLink href="/#homeM" >
            Services
        </NavLink>
            
        <NavLink href="/#aboutM" >
            About
        </NavLink>
        
        <NavLink href="/#contactM" >
            Contact
        </NavLink>
    </Links>
    if (pageLocation === "/"){
        NavigationLinks = (
            <Links> 
                <NavLink onClick={() => scrollTo("#homeSection","center")}>
                    Services
                </NavLink>
                    
                <NavLink onClick={() => scrollTo("#aboutSection","center")}>
                    About
                </NavLink>
                
                <NavLink onClick={() => scrollTo("#contactSection","center")}>
                    Contact
                </NavLink>
            </Links>
        )
    } 
    let DrawerLinks = (
        <div css={sidebarStyles({ menuOpen })}>
            <DrawerLinkA href="/#homeM">
                Services
            </DrawerLinkA>
            <DrawerLinkA href="/#aboutM">
                About
            </DrawerLinkA>
            <DrawerLinkA href="/#contactM">
                Contact
            </DrawerLinkA>
        </div> 
    )
    if (pageLocation === "/"){
        DrawerLinks = (
            <div css={sidebarStyles({ menuOpen })}>
            <DrawerLink onClick={() => {scrollTo("#homeM","start"); setMenuOpen(!menuOpen)}}>
                Services
            </DrawerLink>
            <DrawerLink onClick={() => {scrollTo("#aboutM","start"); setMenuOpen(!menuOpen)}}>
                About
            </DrawerLink>
            <DrawerLink onClick={() => {scrollTo("#contactM","start"); setMenuOpen(!menuOpen)}}>
                Contact
            </DrawerLink>
        </div> 
        )
    }

    return (
    <div>    
        <Navbar>
            <NavContent>
                <LogoLink to="/">
                    <Logo>
                        <h1>Rob Quin</h1><p>Barrister LLB(Hons)</p>
                    </Logo>
                </LogoLink>
                {NavigationLinks}
                <button css={styles({ menuOpen })} onClick={() => setMenuOpen(!menuOpen)} aria-label="Navigation menu toggle">
                    <span className="hamburger-box">
                        <span className={menuOpen? "hamburger-inner hamburger-inner-active" : "hamburger-inner"}></span>
                    </span>
                </button>
            </NavContent>
        </Navbar>
    {DrawerLinks}
    <div css={backdropStyle({ menuOpen })} onClick={() => setMenuOpen(!menuOpen)}/>
    </div>
    )
}