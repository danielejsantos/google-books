import React from "react";

import * as S from "./styles";

interface BookCardProps {
  id: string;
  thumbnail: string;
  hasThumbnail: boolean;
  title: string;
  isFeatured?: boolean;
  isBookshelf?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  thumbnail,
  hasThumbnail,
  title,
  isFeatured,
  isBookshelf,
}) => {
  return (
    <S.BookCard key={id} isBookshelf={isBookshelf}>
      {hasThumbnail ? (
        <S.BookThumbnail isFeatured={isFeatured} src={thumbnail} />
      ) : (
        <S.DefaultThumbnail isFeatured={isFeatured}>
          <S.DefaultThumbnailTitle>{title}</S.DefaultThumbnailTitle>
        </S.DefaultThumbnail>
      )}
      <S.BookTitle isFeatured={isFeatured}>{title}</S.BookTitle>
    </S.BookCard>
  );
};

export default BookCard;
