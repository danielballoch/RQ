import React, {Component, useState} from "react"
import styled from '@emotion/styled';
import {css} from '@emotion/react';

//Nav

const styles = ({menuOpen}) => css`
background-color: red;

sidebar {
    position: fixed;
    width: 50%; 
    background-color: rgba(0,0,0,.5);
}
${menuOpen === true &&`
background-color: green;

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
        <div className={menuOpen ? "sidebar" : "sidebar"}></div>
    </Navbar>
    )
}