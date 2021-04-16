import React from "react";

import backIcon from "../../../assets/back.svg";

import * as S from "./styles";

interface BackProps {
  nextStatus: () => void;
  clearSearchedBooks: () => void;
}

const Back: React.FC<BackProps> = ({ nextStatus, clearSearchedBooks }) => {
  function onClick() {
    nextStatus();
    clearSearchedBooks();
  }

  return (
    <S.Container>
      <S.BackButtonWrapper>
        <S.BackButton onClick={onClick}>
          <img src={backIcon} alt="Voltar" />
        </S.BackButton>
      </S.BackButtonWrapper>
      <S.SearchResult>Resultado de busca</S.SearchResult>
    </S.Container>
  );
};

export default Back;
