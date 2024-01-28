import React from "react";
import styled from "styled-components";
import HotItemCard from "./HotItemCard";

const HotAccessories = ({ music, musicCover }) => {
  return (
    <HotAccessoriesWrap>
      <div className="hot-music">
        <img src={musicCover} alt="cover" />
      </div>
      <div className="item-card">
        {music.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
      
    </HotAccessoriesWrap>
  );
};

const HotAccessoriesWrap = styled.section`
  display: flex;
  margin: auto;
  width: 90vw;

  .hot-music img {
    cursor: pointer;
    width: 22vw;
    transition: all 0.5s;
  }
  .hot-music img:hover {
    box-shadow: 6px 6px 15px gray;
    transform: translateY(-4px);
  }
  .item-card {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default HotAccessories;
