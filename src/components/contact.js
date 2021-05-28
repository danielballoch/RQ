import React, {useEffect, useState} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios";
import {css} from '@emotion/react';

const styles = (formSent) => css`
opacity: 0;
position: absolute;
background-color: white;
transition: height 1s,opacity 1s;

width: 960px;
height: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
    width: 100%;
    
}
${formSent === true &&`
transition: height 0s,opacity 1s;
opacity: 0.9;
height: 500px;
@media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    }
`}
`

const ContactDiv = styled.div`
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
        /* background-color:#828FAD; */
        background-color: #283759;
        border-color: #283759;
        color: white;
        height: 26px;
        transition: .3s; 
        :hover {
            cursor: pointer;
            background-color:#828FAD;
            border-color: #828FAD;
            /* opacity: 90%; */
        }
    }
}

@media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    box-shadow: none;
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



const Contact = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        formSent: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          status: { ok, msg }
        });
        if (ok) {
          setServerState({
              formSent: true
          });
          console.log("form sent: ", serverState.formSent)
          form.reset();
        }
      };

      useEffect(() => {
          if (serverState.formSent === true) {
            setTimeout(() => {
                setServerState({
                    formSent: false
                })
            }, 3000)
          }
      })


      const handleOnSubmit = e => {
        e.preventDefault();
        console.log("press")
        setServerState({
            formSent: !serverState.formSent
        });
        // const form = e.target;
        // setServerState({ submitting: true });
        // axios({
        //   method: "post",
        //   url: "https://getform.io/f/1db4c410-82ad-415d-a3bd-da32a6487bb4",
        //   data: new FormData(form)
        // })
        //   .then(r => {
        //     handleServerResponse(true, "Thanks!", form);
        //   })
        //   .catch(r => {
        //     handleServerResponse(false, r.response.data.error, form);
        //   });
      };
      
      console.log("ServerState:", serverState)
    return(
        <div style={{ display: "grid" }} id="contactSection">


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

        <ContactDiv>
        {/* class={serverState.formSent ? "sent" : ""} */}
            <span css={styles(serverState.formSent)}>
                <h1>Message Sent</h1>
                <p>I'll be in touch shortly. Regards, Rob.</p>
            </span>
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
                <form onSubmit={handleOnSubmit}>
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
        </ContactDiv>
        </div>
        </div>
    )
    
}

export default Contact;