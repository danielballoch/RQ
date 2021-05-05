import React, {Component, useState} from "react"
import styled from '@emotion/styled';
import {css} from '@emotion/react';

//Nav

const styles = ({menuOpen}) => css`
background-color: red;
@media (min-width: 1025px) {
    display:none;
}
${menuOpen === true &&`
background-color: green;

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
a:hover {
    cursor: pointer;
}
background-color: white;
transition: .3s;
@media (min-width: 1025px) {
    display:none;
}
${menuOpen === true &&`
background-color: rgba(0,0,0,0);
transform: translateX(100%);
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

const DrawerLink = styled.a`
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

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen)
    return (
    <Navbar>
        <NavContent>
        <Logo>
            <h1>Rob Quin</h1><p>Barrister LLB(hons)</p>
        </Logo>
            <Links>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    -
                    <NavLink to="/">
                        Services
                    </NavLink>
                    -
                    <NavLink to="/">
                        About
                    </NavLink>
                    -
                    <NavLink to="/">
                        Contact
                    </NavLink>
            </Links>
            <button css={styles({ menuOpen })} onClick={() => setMenuOpen(!menuOpen) }>
                Menu
                <span>
                    <span></span>
                </span>
            </button>
        </NavContent>
        <div css={sidebarStyles({ menuOpen })}>
                    <DrawerLink to="/#" >
                        Home
                    </DrawerLink>
                    <DrawerLink to="/#">
                        Services
                    </DrawerLink>
                    <DrawerLink to="/#">
                        About
                    </DrawerLink>
                    <DrawerLink to="/#">
                        Contact
                    </DrawerLink>
        </div>
    </Navbar>
    )
}