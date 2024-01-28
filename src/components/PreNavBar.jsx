import React from "react";
import styled from 'styled-components';
import { FaCartShopping } from 'react-icons/fa6';

const PreNavBar = () => {
  return (
    <PreNav>
      <div>
        <a href="https://www.mi.com/in">MI Bangladesh</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores">RETAIL STORE</a>
      </div>

      <div>
      <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
      <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a><span>|</span>
      <a href="https://store.mi.com/in/site/login"> <FaCartShopping /> CART (0)</a>
      </div>
    </PreNav>
  );
};


const PreNav = styled.section `
    display: grid;
    grid-template-columns: 5fr 2fr;
    background-color: #3a3a3a;
    color: white;
    height: 4vh;
    align-items: center;
    
    div{
        padding: 5px 100px;
    }

    a {
        text-decoration: none;
        color: white;
        margin: 9px;
    }

    a:hover {
        color: orangered;
    }

`

export default PreNavBar;
