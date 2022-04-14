import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 13rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.26);
  border: 7px solid var(--orangeCard);
  box-shadow: var(--boxShadow);
  border-radius: 20px;
`;

const Image = styled.img`
  transform: scale(0.6);
  margin-top: -1rem;
`;

const Span = styled.span`
  &:nth-child(3) {
    color: var(--gray);
    font-size: 16px;
  }
`;

const DetailButton = styled.button`
  height: 2rem;
  margin-top: 1rem;
  background: #ffffff;
  box-shadow: 0 19px 60px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #5290fd;
`;

const Card = ({ emoji, heading, detail }) => {
  return (
    <Wrapper>
      <Image src={emoji} alt="" />
      <Span>{heading}</Span>
      <Span>{detail}</Span>
      <DetailButton>INFOS</DetailButton>
    </Wrapper>
  );
};

export default Card;
