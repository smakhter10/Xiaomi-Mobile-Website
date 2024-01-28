import React from "react";
import styled from "styled-components";

const HotItemCard = ({ index, name, price, image }) => {
  return (
    <Card>
      <div className="cards">
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 31%;
  margin: 0.7vmax;

  img {
    width: 70%;
  }

  p {
    font-weight: bold;
  }
  span {
    color: orangered;
    font-weight: bold;
  }
  .cards {
    cursor: pointer;
    transition: all 0.5s;
  }

  .cards:hover {
    box-shadow: 6px 6px 15px gray;
    transform: translateY(-4px);
  }
`;

export default HotItemCard;
