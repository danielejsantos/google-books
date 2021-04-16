import React from "react";

import logoImg from "../../../assets/logo.svg";
import searchIcon from "../../../assets/search.svg";

import * as S from "./styles";

interface DefaultProps {
  nextStatus: () => void;
}

const Default: React.FC<DefaultProps> = ({ nextStatus }) => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={logoImg} alt="Logo Google Livros" />
        <S.LogoTitle>Google Livros</S.LogoTitle>
      </S.LogoWrapper>
      <S.SearchButton onClick={nextStatus}>
        <img src={searchIcon} alt="" />
      </S.SearchButton>
    </S.Container>
  );
};

export default Default;
