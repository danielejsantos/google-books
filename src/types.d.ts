export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface BookResponse {
  data: {
    items: Book[];
  }
}

export interface Books {
  adventureBooks: Book[];
  childishBooks: Book[];
  featuredBooks: Book[];
  actionBooks: Book[];
}