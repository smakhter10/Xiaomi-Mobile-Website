import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {logo} from "../data/data.json"
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar>
        <div className="logo">
            <Link to="/"> 
                <img id="logoImg" src={logo} alt="logo" />
            </Link>
        </div>

        <Link className='NavLinks'  to="/miphones">MI PHONE</Link>
        <Link className='NavLinks' to="/redmiphones">REDMI PHONE</Link>
        <Link className='NavLinks' to="/tv">TV</Link>
        <Link className='NavLinks' to="/laptops">LAPTOP</Link>
        <Link className='NavLinks' to="/lifestyle">LIFESTYLE</Link>
        <Link className='NavLinks' to="/home">HOME</Link>
        <Link className='NavLinks' to="/audio">AUDIO</Link>
        <Link className='NavLinks' to="/accessories">ACCESSORIES</Link>


        <div className="Search">
            <input type="text" name='Search' placeholder='Search Products' />
            <FaSearch className='SearchIcon' />
        </div>
    </Navbar>
  )
}


const Navbar = styled.section `
    z-index: 1000;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    padding: 10px;


    .NavLinks{
        color: black;
        text-decoration: none;
        margin: 0 30px;
        font-weight: 600;
    }
    .NavLinks:hover {
        color: orangered;
    }

    .logo{
        background-color: orangered;
        width: 58px;
        border-radius: 20px;
        overflow: hidden;
        height: 60px;
        position: relative;
        right: 50px;

        #logoImg{
            transform: translateX(-58px);
            transition: all 0.3s;
        }
        #logoImg:hover {
            transform: translateX(0);
        }
    }


    .Search{
        display: flex;
        align-items: center;
        position: relative;
        left: 170px;
        
        input {
            color: gray;
            border: none;
            border-bottom: 1px solid gray;
            width: 200px;
            font-size: 0.9rem;
            outline: none;
        }

        .SearchIcon{
            color: black;
            font-size: 1.2rem;
            cursor: pointer;
        }
    }

`

export default NavBar