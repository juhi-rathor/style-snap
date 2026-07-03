  // React
  import React from "react";

  import FooterSection from "./FooterSection";
  import { footerSections } from "../data/footerLinks";

  const Footer = () => {
    return (
      <>
        <div className="container">
          <div className="row py-3">
            {/* <div className="d-flex justify-content-center align-items-start custom-class"> */}
              <div className="col d-flex justify-content-start align-items-start flex-column">
                <h2 className="logo-heading">STYLE SNAP</h2>
                <p className="para-3">Contact: +91 123456789</p>
                <p className="para-3"> Email: stylesnap@gmail.com</p>
                <p className="para-3">Address: 28 Apollo tower, Indore, INDIA</p>
              </div>

              {footerSections.map((section) => (
                <FooterSection key={section.title} title={section.title} links={section.links} />
              ))}

              <div className="col d-flex justify-content-start align-items-start flex-column col-fourth">
                <h3>NEWSLETTER</h3>
                <p>Subscribe to our newsletter and get update notifications.</p>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    />
                    <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
    
          <div className="d-flex justify-content-center align-items-center custombg flex-column ">
              <p className="allrights">All Rights Reserved</p>
              <p>Designed By <a href='https://github.com/juhi-rathor' className="github-account" target="_blank" rel="noreferrer"><span>Juhi</span></a></p>
          </div>        
      </>
    )
  }

  export default Footer
