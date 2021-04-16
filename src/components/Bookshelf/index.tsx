import React from "react";

import BookCard from "../../components/BookCard";

import { Book, Books } from "../../types";

import * as S from "./styles";

interface BookShelfProps {
  books: Books | any;
}

const Bookshelf: React.FC<BookShelfProps> = ({ books }) => {
  if (!books) {
    return <div />;
  }

  return (
    <S.Container>
      <S.BookshelfWrapper>
        <S.BookshelfTitle>Aventura</S.BookshelfTitle>
        <S.BooksWrapper>
          {books.adventureBooks.map((book: Book) => {
            const hasThumbnail = !!book?.volumeInfo?.imageLinks?.thumbnail;

            return (
              <BookCard
                id={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                hasThumbnail={hasThumbnail}
                title={book.volumeInfo.title}
                isBookshelf
              />
            );
          })}
        </S.BooksWrapper>
      </S.BookshelfWrapper>

      <S.BookshelfWrapper>
        <S.BookshelfTitle>Infantil</S.BookshelfTitle>
        <S.BooksWrapper>
          {books.childishBooks.map((book: Book) => {
            const hasThumbnail = !!book?.volumeInfo?.imageLinks?.thumbnail;

            return (
              <BookCard
                id={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                hasThumbnail={hasThumbnail}
                title={book.volumeInfo.title}
                isBookshelf
              />
            );
          })}
        </S.BooksWrapper>
      </S.BookshelfWrapper>

      <S.BookshelfWrapper isFeatured>
        <S.BookshelfTitle isFeatured>Destaques</S.BookshelfTitle>
        <S.BooksWrapper>
          {books.featuredBooks.map((book: Book) => {
            const hasThumbnail = !!book?.volumeInfo?.imageLinks?.thumbnail;

            return (
              <BookCard
                id={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                hasThumbnail={hasThumbnail}
                title={book.volumeInfo.title}
                isFeatured
                isBookshelf
              />
            );
          })}
        </S.BooksWrapper>
      </S.BookshelfWrapper>

      <S.BookshelfWrapper>
        <S.BookshelfTitle>Ação</S.BookshelfTitle>
        <S.BooksWrapper>
          {books.actionBooks.map((book: Book) => {
            const hasThumbnail = !!book?.volumeInfo?.imageLinks?.thumbnail;

            return (
              <BookCard
                id={book.id}
                thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                hasThumbnail={hasThumbnail}
                title={book.volumeInfo.title}
                isBookshelf
              />
            );
          })}
        </S.BooksWrapper>
      </S.BookshelfWrapper>
    </S.Container>
  );
};

export default Bookshelf;
