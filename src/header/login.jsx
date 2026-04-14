
import React from "react";


import { BiDonateHeart , BiEditAlt } from "react-icons/bi";
import './login.css';
import PageTransition from '../components/PageTransation'

function Login() {
  return (
     <PageTransition>

      <>
       
            
          
        <section className="login-section">
          <div className="login-container">
            <div className="login-wrapper">

             

              {/* Login */}
              <div className="login-box">
                <h3 className="login-title">
                  <i className="icon" style={{marginRight:"5px"}}>
                    <BiDonateHeart />
                  </i>
                  Login
                </h3>

                <form className="login-form">

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button className="login-btn">
                    Login
                  </button>

                  <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                  </div>

                </form>
              </div>

            
             

              {/* Register */}
              <div className="register-box">

                <h3 className="register-title">
                  <i className="icon" style={{marginRight:"5px"}}>
                    <BiEditAlt />
                  </i>
                  Create Account
                </h3>

                <form className="register-form">

                  <div className="name-row">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="First Name"
                    />

                    <input
                      type="text"
                      className="input-field"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="form-group">
                    <select className="input-field" defaultValue="">
                      <option disabled value="">
                        User Type
                      </option>
                      <option>Employee</option>
                      <option>Admin</option>

                      <option>Buyers</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Create Password"
                    />
                  </div>

                  <div className="terms">
                    <input type="checkbox" />
                    <label>I agree to the terms and conditions</label>
                  </div>

                  <button className="register-btn">
                    Create Account
                  </button>

                </form>
              </div>
              </div>

            </div>
         
        </section>
        
      </>
      </PageTransition>

   
  );
}

export default Login;