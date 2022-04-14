import React from "react";
import styled from "styled-components";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Wrapper = styled.div`
  display: flex;
  height: 69vh;
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

const Icon = styled.div`
  margin-top: 3rem;
  gap: 0rem;
`;

const IconImage = styled.img`
  transform: scale(0.5);
  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
`;

const RightIconImage = styled.img`
  position: absolute;
  z-index: 1;
  transform: scale(0.5);
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    transform: scale(0.69);
    left: -15%;
    top: -9%;
  }
  &:nth-child(2) {
    transform: scale(0.67);
    left: -6rem;
    top: -4.6rem;
  }
  &:nth-child(3) {
    transform: scale(1.4);
    left: 17%;
  }
  &:nth-child(4) {
    transform: scale(0.6);
    top: -19%;
    left: -24%;
    border-radius: -50%;
    padding: 0;
  }
`;

const PinkBlur = styled.div`
  background-color: rgb(238, 210, 255);
  position: absolute;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: #edd0ff;
  filter: blur(72px);
  z-index: -9;
  top: -18%;
  left: 56%;
`;

const BlueBlur = styled.div`
  background-color: rgb(238, 210, 255);
  position: absolute;
  width: 21rem;
  height: 11rem;
  border-radius: 50%;
  background: #c1f5ff;
  filter: blur(72px);
  z-index: -9;
  top: 17rem;
  left: -9rem;
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
        <Icon>
          <a href="">
            <IconImage src={Github} alt="" />
          </a>
          <a href="">
            <IconImage src={LinkedIn} alt="" />
          </a>
          <a href="">
            <IconImage src={Instagram} alt="" />
          </a>
        </Icon>
      </Left>
      <Right>
        <RightIconImage src={Vector1} alt="" />
        <RightIconImage src={Vector2} alt="" />
        <RightIconImage src={Boy} alt="" />
        <RightIconImage src={glassesimoji} alt="" />

        <div
          style={{ position: "absolute", zIndex: 1, top: "-4%", left: "58%" }}
        >
          <FloatingDiv image={Crown} txt1="Ingenieur" txt2="Big Data" />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: "18rem",
            left: "0rem",
          }}
        >
          <FloatingDiv image={thumbup} txt1="Meilleur " txt2="Collaborateur" />
        </div>
        {/* Blurr div*/}
        <PinkBlur />
        <BlueBlur />
      </Right>
    </Wrapper>
  );
};

export default Intro;
