import React from "react";

import Header from "../../components/Header";
import Bookshelf from "../../components/Bookshelf";
import SearchResult from "../../components/SearchResult";

import useHome from "./home.hook";
import * as S from "./styles";

const Home: React.FC = () => {
  const {
    books,
    search,
    searchedBooks,
    hasSearchedBooks,
    isPreviousDisabled,
    getSearchedBooks,
    onChangeSearch,
    clearSearchedBooks,
    pagination,
  } = useHome();

  return (
    <S.Container>
      <Header
        search={search}
        onChangeSearch={onChangeSearch}
        getSearchedBooks={getSearchedBooks}
        clearSearchedBooks={clearSearchedBooks}
      />
      {hasSearchedBooks ? (
        <SearchResult
          searchedBooks={searchedBooks}
          isPreviousDisabled={isPreviousDisabled}
          pagination={pagination}
        />
      ) : (
        <Bookshelf books={books} />
      )}
    </S.Container>
  );
};

export default Home;
