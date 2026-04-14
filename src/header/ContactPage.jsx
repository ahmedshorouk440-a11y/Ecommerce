
import React from "react";
import FormContact from "./FormContact";
import "./ContactPage.css";
import PageTransition from '../components/PageTransation'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <PageTransition>

      <div className="container py-5">

        <div className="row g-4">

          {/* LEFT - FORM */}
          
          <div  className="col-md-6" >
            <div className="shorouk">
            <h2 className="mb-3">Contact Us</h2>
            <p className="text-muted">We’d love to hear from you 💙</p>
            </div>
            <FormContact />
          </div>


          {/* RIGHT - INFO */}
          <div className="col-md-6">

            <div className="info-box d-flex align-items-center mb-3">
              <FaPhone className="me-3 icon" />
              <div>
                <h6 className="mb-1">Phone</h6>
                <p className="mb-0 text-muted">+20 123 456 789</p>
              </div>
            </div>

            <div className="info-box d-flex align-items-center mb-3">
              <FaEnvelope className="me-3 icon" />
              <div>
                <h6 className="mb-1">Email</h6>
                <p className="mb-0 text-muted">support@shop.com</p>
              </div>
            </div>

            <div className="info-box d-flex align-items-center">
              <FaMapMarkerAlt className="me-3 icon" />
              <div>
                <h6 className="mb-1">Location</h6>
                <p className="mb-0 text-muted">Alexandria, Egypt</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </PageTransition>
  );
};

export default ContactPage;