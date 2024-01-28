import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      {/*footer section */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>SUPPORT</h3>
            <p>Service</p>
            <p>Where to Buy</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>About Us</h3>
            <p>Xiaomi</p>
            <p>User Agreement</p>
            <p>Leadership Team</p>
            
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">ph2
            <h3>Call Us</h3>
            <h2>+91 12345678978</h2>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Xiaomi. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITION</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 120px;

  footer {
    padding: 3rem 0 4rem 0;
    background-color: #1f1f1f;

    h3 {
      color: white;
      margin-bottom: 2.4rem;
      font-size: 1.4rem;
    }
    h2 {
      color: white;
      font-size: 1.2rem;
    }

    p {
      color: white;
      font-size: 0.8rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid white;

        .icons {
          color: white;
          font-size: 1.2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 3rem;

      hr {
        margin-bottom: 2rem;
        color: #ffffff;
        height: 0.1px;
      }
    }
  }

  .grid {
    display: grid;
    gap: 9rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }
`;

export default Footer;
