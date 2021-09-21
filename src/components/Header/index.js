import React, { Component } from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="RMDBLogo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
    </Content>
  </Wrapper>
);

export default Header;
