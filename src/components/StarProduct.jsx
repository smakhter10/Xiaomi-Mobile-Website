import React from "react";
import styled from "styled-components";

const StarProduct = ({ starProduct }) => {
  return (
    <Starproducts>
      <div>
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="image" />
        </a>
      </div>

      <div>
        <a href={starProduct[1].url}>
          <img src={starProduct[1].image} alt="image" />
        </a>

        <a href={starProduct[2].url}>
          <img src={starProduct[2].image} alt="image" />
        </a>

        <a href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="image" />
        </a>
      </div>
    </Starproducts>
  );
};

const Starproducts = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px auto;

  div:last-child {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
  }

  img {
    transition: all 0.5s;
  }
  img:hover {
    box-shadow: 6px 6px 15px gray;
  }
`;

export default StarProduct;
