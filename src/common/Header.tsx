import React from "react";
import logo from "../assets/logo-cabonline.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #343434;
  img {
    margin: 0 auto;
    width: 10rem;
    display: block;
  }
`;

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <img src={logo} alt="Cabonline icon" />
    </Container>
  );
};

export default Header;
