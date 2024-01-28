import React from "react";
import styled from "styled-components";
import ReviewCards from "./ReviewCards";

const ProductReview = ({ productReviews }) => {
  return (
    <ProductReviewWrap>
      
        {productReviews.map((item, index) => (
          <ReviewCards
            key={item.image}
            index={index}
            image={item.image}
            review={item.review}
            name={item.name}
            price={item.price}
          />
        ))}
      
    </ProductReviewWrap>
  );
};

const ProductReviewWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 90vw;
`;

export default ProductReview;
