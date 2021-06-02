import * as React from "react"
import Layout from "../components/layout"
import styled from '@emotion/styled';

const pageStyles = {
    marginTop: "100px",
    color: "#232129",
    fontFamily: "Open Sans",
  }

  const Content = styled.div`
    margin: auto;
    h1{
        
        font-weight: normal;
    }
    p {margin-top: 30px}
    /* padding: 20px 20px 160px 20px; */
    padding: 40px 20px 100px 20px;
    max-width: 650px;
    background-color: white;
`

const PrivacyPolicy = ({location}) => {
    console.log(location.pathname)
    return (
      <Layout pageLocation={location.pathname}>
          <main style={pageStyles}>
          <title>Home Page</title>
          <Content>
          <h1>Privacy Policy</h1>
          <p>We collect personal information from you, including information about your:</p>
          <ol>
              <li>Contact information</li>
              <li>Interactions with us (cookies and other google analytics identifyers)</li>
          </ol>

          <p>We collect your personal information in order to:</p>
          <ol>
              <li>Follow up on your requests of our services.</li>
              <li>Refine our marketing and technology to best serve our customers.</li>
          </ol>
          <p>All information is optional. If you choose not to enter your name or contact information, we will be unable to provide legal services. Interactions (including all google analytics data) can be opted out of by using the browser add-on <a href="https://tools.google.com/dlpage/gaoptout">here</a>. If you choose to do this, we will not be able to use your information to better our services.</p>

          <p>More on google analytics and how this information is used <a href="https://policies.google.com/technologies/partner-sites?hl=en-GB&gl=uk">here</a></p>.
          

          <p>If you do give permission of the aformentioned use of personal information and web interaction monitoring via google analytics, we would like to note that all information is held securely and in confidence.</p>

          <p>No information will be disclosed to any other person except to the extent necessary or desirable to enable us to carry out our services.</p>

          <p>You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you would like to ask for a copy of your information, or to have it corrected, please contact us at rob@robquin.co.nz, or 021 216 2841, or PO Box 20109 Te Rapa Hamilton 3241.</p>
          </Content>
          </main>
      </Layout>
    )
  }
  
  export default PrivacyPolicy