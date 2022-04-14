import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 10vh;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  align-content: center;
  display: flex;
  gap: 2rem;
`;
const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  align-content: center;
  justify-content: center;
  font-weight: 400;
  display: flex;
`;
const MenuList = styled.div`
  flex: 10;
  flex-direction: column;
`;
const MenuName = styled.ul`
  display: flex;
  gap: 2rem;
  margin-right: 4rem;
  list-style-type: none;
`;
const MenuLink = styled.li`
  &:hover {
    cursor: pointer;
    color: var(--orange);
  }
`;
const Contactbutton = styled.button`
  flex: 2;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Left>
        <Name>Yvan</Name>
        <span>toggle</span>
      </Left>
      <Right>
        <MenuList>
          <MenuName>
            <MenuLink>Accueil</MenuLink>
            <MenuLink>Service </MenuLink>
            <MenuLink>Experiences</MenuLink>
            <MenuLink>Cv</MenuLink>
            <MenuLink>Retour client </MenuLink>
          </MenuName>
        </MenuList>
        <Contactbutton className="button">Contact</Contactbutton>
      </Right>
    </Wrapper>
  );
};

export default NavBar;
