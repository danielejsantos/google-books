import React from "react";

import searchIcon from "../../../assets/search.svg";

import * as S from "./styles";

interface SearchProps {
  search: string;
  nextStatus: () => void;
  onChangeSearch: (value: string) => void;
  getSearchedBooks: () => Promise<void>;
}

const Search: React.FC<SearchProps> = ({
  search,
  nextStatus,
  onChangeSearch,
  getSearchedBooks,
}) => {
  function onClick() {
    nextStatus();
    getSearchedBooks();
  }

  return (
    <S.Container>
      <S.Input
        onChange={(e) => onChangeSearch(e.target.value)}
        type="text"
        placeholder="Buscar por livros ou autores"
      />
      <S.SearchIconWrapper>
        <S.SearchButton onClick={onClick} disabled={!search}>
          <img src={searchIcon} alt="Buscar" />
        </S.SearchButton>
      </S.SearchIconWrapper>
    </S.Container>
  );
};

export default Search;
