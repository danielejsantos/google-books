import React from "react";

import Default from "./Default";
import Search from "./Search";
import Back from "./Back";
import useHeader from "./header.hook";

interface HeaderProps {
  search: string;
  onChangeSearch: (value: string) => void;
  getSearchedBooks: () => Promise<void>;
  clearSearchedBooks: () => void;
}

const Header: React.FC<HeaderProps> = ({
  search,
  onChangeSearch,
  getSearchedBooks,
  clearSearchedBooks,
}) => {
  const { status, nextStatus } = useHeader();

  return (
    <>
      {status === "default" && <Default nextStatus={nextStatus} />}
      {status === "search" && (
        <Search
          search={search}
          nextStatus={nextStatus}
          onChangeSearch={onChangeSearch}
          getSearchedBooks={getSearchedBooks}
        />
      )}
      {status === "back" && (
        <Back nextStatus={nextStatus} clearSearchedBooks={clearSearchedBooks} />
      )}
    </>
  );
};

export default Header;
