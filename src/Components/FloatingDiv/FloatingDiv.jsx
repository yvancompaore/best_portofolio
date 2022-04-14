import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: space-around;
  display: flex;
  background: white;
  box-shadow: var(--boxShadow);
  border-radius: 17px;
  align-items: center;
  padding: 0px 28px 0px 0px;
  height: 4.5rem;
`;
const Image = styled.img`
  transform: scale(0.5);
`;
const Span = styled.span`
  font-family: sans-serif;
  font-size: 16px;
`;

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <Wrapper>
      <Image src={image} alt="" />
      <Span>
        {txt1}
        <br />
        {txt2}
      </Span>
    </Wrapper>
  );
};

export default FloatingDiv;
