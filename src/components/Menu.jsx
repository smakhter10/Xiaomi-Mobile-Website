import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Menustyle>
      <Link className="menuLink" to="/musicstore">Music Store</Link>
      <Link className="menuLink" to="/smartdevices">Smart Devices</Link>
      <Link className="menuLink" to="/home">Home</Link>
      <Link className="menuLink" to="/lifestyle">Lifestyle</Link>
      <Link className="menuLink" to="/mobileaccessories">Mobile Accessories</Link>
    </Menustyle>
  );
};

const Menustyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .menuLink {
        margin: 10px;
        padding: 8px 0;
        text-decoration: none;
        color: black ;
        
        font-size: 1.2rem;
        font-weight: bold;
    }

    .menuLink:hover {
        color: orangered;
        border-bottom: 2px solid orangered;
    }

`

export default Menu;
