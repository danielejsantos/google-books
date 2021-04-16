import React from "react";

import { Book, Books } from "../../types";

import BookCard from "../BookCard";

import * as S from "./styles";

interface SearchResultProps {
  searchedBooks: Books | any;
  isPreviousDisabled: boolean;
  pagination: (value: string) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchedBooks,
  isPreviousDisabled,
  pagination,
}) => {
  if (!searchedBooks) {
    return <div />;
  }

  return (
    <S.Container>
      <S.BooksWrapper>
        {searchedBooks?.map((book: Book) => {
          const hasThumbnail = !!book?.volumeInfo?.imageLinks?.thumbnail;

          return (
            <BookCard
              id={book.id}
              thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
              hasThumbnail={hasThumbnail}
              title={book.volumeInfo.title}
            />
          );
        })}
      </S.BooksWrapper>
      <S.PageButtonWrapper>
        <S.PageButton
          onClick={() => pagination("decrease")}
          disabled={isPreviousDisabled}
        >
          {"< Anterior"}
        </S.PageButton>
        <S.PageButton onClick={() => pagination("increase")}>
          {"Próxima >"}
        </S.PageButton>
      </S.PageButtonWrapper>
    </S.Container>
  );
};

export default SearchResult;
