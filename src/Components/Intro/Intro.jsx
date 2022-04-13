import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 77vh;
  margin-top: 6rem;
`;
const Left = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`;
const InfoIntro = styled.div`
  display: flex;
  flex-direction: column;
`;
const Presentation = styled.span`
  color: var(--black);
  font-weight: bold;
  font-size: 3rem;
`;

const Name = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 3rem;
`;
const Desc = styled.span`
  font-weight: 100;
  font-size: 14px;
  color: var(--gray);
  margin-top: 10px;
`;
const Contactbutton = styled.button`
  width: 10rem;
  height: 2rem;
`;

const Right = styled.div`
  flex: 1;
`;

const Intro = () => {
  return (
    <Wrapper>
      <Left>
        <InfoIntro>
          <Presentation>Hello! Je Suis </Presentation>
          <Name> Yvan COMPAORE </Name>
          <Desc>je suis bblalabla de cgzz u gh </Desc>
        </InfoIntro>
        <Contactbutton className="button">Discuter d'un projet</Contactbutton>
      </Left>
      <Right>rigth</Right>
    </Wrapper>
  );
};

export default Intro;
