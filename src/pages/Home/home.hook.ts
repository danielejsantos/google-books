import axios from 'axios';
import { useEffect, useState } from 'react';

import { Book, BookResponse, Books } from '../../types';

interface UseHome {
  books: Books | undefined;
  search: string;
  searchedBooks: Book[] | undefined;
  hasSearchedBooks: boolean;
  isPreviousDisabled: boolean;
  onChangeSearch: (value: string) => void;
  getSearchedBooks: () => Promise<void>;
  clearSearchedBooks: () => void;
  pagination: (value: string) => void;
}

function useHome(): UseHome {
  const [books, setBooks] = useState<Books | undefined>();
  const [search, setSearch] = useState('');
  const [searchedBooks, setSearchedBooks] = useState<Book[] | undefined>();
  const [startIndex, setStartIndex] = useState(0);

  const isPreviousDisabled = startIndex === 0;

  const hasSearchedBooks = !!searchedBooks;

  async function getBooks(): Promise<void> {
    const adventureBooks: BookResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Aventura');
    const childishBooks: BookResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Infantil');
    const featuredBooks: BookResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Destaques');
    const actionBooks: BookResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Ação');

    if (adventureBooks && childishBooks && featuredBooks && actionBooks) {
      setBooks({
        adventureBooks: adventureBooks.data.items,
        childishBooks: childishBooks.data.items,
        featuredBooks: featuredBooks.data.items,
        actionBooks: actionBooks.data.items
      })
    }
  }
  
  async function getSearchedBooks(): Promise<void> {
    const searchedBooks: BookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=15`);

    setSearchedBooks(searchedBooks.data.items);
  }

  function onChangeSearch(value: string) {
    setSearch(value);
  }

  function clearSearchedBooks() {
    setSearchedBooks(undefined);
  }

  function pagination(value: string) {
    if (value === 'increase') {
      setStartIndex(startIndex + 15);
      getSearchedBooks();
    }
    if (value === 'decrease' && startIndex > 0) {
      setStartIndex(startIndex - 15);
      getSearchedBooks();
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return { books, search, searchedBooks, hasSearchedBooks, isPreviousDisabled, getSearchedBooks, onChangeSearch, clearSearchedBooks, pagination };
}

export default useHome;