import React from "react";
import styled from "styled-components";
import heartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Wrapper = styled.div`
  display: flex;
  padding: 0 3rem 0 3rem;
  height: 90vh;
  margin-bottom: 8rem;
  margin-top: 0rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;

  &:first-child {
    color: var(--black);
    font-weight: bold;
    font-size: 2.5rem;
  }
  &:nth-child(2) {
    color: var(--orange);
    font-weight: bold;
    font-size: 2.5rem;
  }
  &:nth-child(3) {
    color: var(--gray);
    font-size: 14px;
    margin-top: 1rem;
  }
`;

const Downloadbutton = styled.button`
  width: 10rem;
  height: 2rem;
  margin-top: 1rem;
`;

const BlueBlur = styled.div`
  background-color: rgb(238, 210, 255);
  position: absolute;
  width: 21rem;
  height: 11rem;
  border-radius: 50%;
  background: #abf1ff94;
  filter: blur(72px);
  z-index: -9;
  top: 13rem;
  left: -18rem;
`;

const PurpleBlur = styled.div`
  background-color: rgb(238, 210, 255);
  position: absolute;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: var(--purple);
  filter: blur(72px);
  z-index: -9;
  top: 8rem;
  left: 14rem;
`;

const Awesome = styled.span``;

const Right = styled.div`
  position: relative;
`;

const Cards = styled.div``;

const Services = () => {
  return (
    <Wrapper>
      <Left>
        <Span>Mes merveilleux </Span>
        <Span>Services</Span>
        <Span>
          Aut voluptatem consequatur et omnis incidunt qui placeat omnis sed
          assumenda commodi.
          <br />
          Ea iste quia ea assumenda omnis qui odio deserunt
        </Span>
        <Downloadbutton className="button"> Telecharger CV</Downloadbutton>
        <BlueBlur />
      </Left>
      <Right>
        <div style={{ left: "14rem", position: "absolute" }}>
          <Card
            emoji={heartEmoji}
            heading={"Design"}
            detail={"photoshop,figma"}
          />
        </div>

        <div style={{ top: "8rem", position: "absolute" }}>
          <Card
            emoji={Glasses}
            heading={"Developper"}
            detail={"Javascript,react "}
          />
        </div>

        <div style={{ top: "16rem", left: "12rem", position: "absolute" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet. Qui minima ratione ex "}
          />
        </div>

        <PurpleBlur />
      </Right>
    </Wrapper>
  );
};

export default Services;
