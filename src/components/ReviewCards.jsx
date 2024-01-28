import React from "react";
import styled from "styled-components";

const ReviewCards = ({ price, review, image, name, index }) => {
  return (
    <ReviewCardWrap>
      <div className="review-cards">
        <img src={image} alt={`${index} product`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
      </div>
    </ReviewCardWrap>
  );
};

const ReviewCardWrap = styled.div`
  margin: 10px;
  background-color: #f1f1f1;

  h5 {
    margin: 20px 5px 5px 20px;
    color: rgb(94, 94, 94);
  }
  span {
    margin: 0 20px;
    font-size: 1vmax;
    color: rgb(94, 94, 94);
  }

  b {
    color: orangered;
    font-weight: bold;
  }

  .review-cards {
    transition: all 0.5s;
    cursor: pointer;
    padding-bottom: 20px;
  }
  .review-cards:hover {
    box-shadow: 6px 6px 15px gray;
    transform: translateY(-4px);
  }
`;

export default ReviewCards;
