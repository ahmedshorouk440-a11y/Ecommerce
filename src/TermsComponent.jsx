
import React from "react";
import "./Terms.css"; 
import PageTransition from "./components/PageTransation";

function TermsComponent() {
  return (
     <PageTransition>
   
   <div className="terms-container">
      <h1 className="terms-title">Terms & Conditions</h1>

      
      <section className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to our website. By using our e-commerce platform, you agree
          to comply with the terms and conditions stated on this page. Please
          read these terms carefully before using the website or making any
          purchase, as your continued use of the platform indicates your full
          acceptance of them.
        </p>
      </section>

      
      <section className="terms-section">
        <h2>2. Intellectual Property</h2>
        <p>
          All content on the website — including images, texts, logos, designs,
          and products — is owned by us or by their respective owners and is
          protected under copyright laws. Copying, reusing, or redistributing any
          of this content without prior written permission is strictly prohibited.
        </p>
      </section>

     
      <section className="terms-section">
        <h2>3. User Obligations</h2>
        <ul>
          <li>Provide accurate information when creating an account or placing an order.</li>
          <li>Avoid using the website for any illegal or harmful activities.</li>
          <li>Not attempt to hack or disrupt the platform in any way.</li>
          <li>Keep your login credentials confidential and avoid sharing them with others.</li>
        </ul>
      </section>

     
      <section className="terms-section">
        <h2>4. Limitation of Liability</h2>
        <p>
          We strive to provide accurate and up-to-date product information;
          however, unintended errors may occur. The website is not responsible
          for any losses or damages resulting from misuse of products or
          reliance on information that may not be entirely accurate. The website
          reserves the right to modify or update information at any time without
          prior notice.
        </p>
      </section>
    </div>
    </PageTransition>
  );
}

export default TermsComponent;