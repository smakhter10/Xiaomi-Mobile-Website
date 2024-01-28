import React from 'react'
import styled from 'styled-components'
import Offer from './Offer'

const Offers = ({offer}) => {
  return (
    <OfferSection>
      {offer.map((item, index) => (
        <Offer key={item.image} index={index} src={item.image} link={item.url}  />
      ))}

    </OfferSection>
  )
}

const OfferSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  img{
    margin: 0 25px;
    transition: all 0.5s;
  }
  img:hover {
    transform: scale(115%);
    box-shadow: 6px 6px 15px gray;
  }
`

export default Offers