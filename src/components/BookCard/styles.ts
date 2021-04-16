import styled from 'styled-components';

interface FeaturedBooksProps {
  isFeatured?: boolean;
}

interface BookshelfMarginProps {
  isBookshelf?: boolean;
}

export const BookCard = styled.div<BookshelfMarginProps>`
  display: flex;
  flex-direction: column;
  width: 110px;
  margin-right: ${({isBookshelf}) => isBookshelf ? '16px' : ''};

  @media (min-width: 760px) {
    width: 140px;
    margin-right: ${({isBookshelf}) => isBookshelf ? '20px' : ''};
  }
`;

export const BookThumbnail = styled.img<FeaturedBooksProps>`
  width: 110px;
  height: 180px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: ${({isFeatured}) => isFeatured ? '0' : '14px'};
  border-bottom-left-radius: ${({isFeatured}) => isFeatured ? '14px' : '0'};
  margin-bottom: 8px;
  
  @media (min-width: 760px) {
    width: 140px;
    height: 220px;
  }
`;

export const DefaultThumbnail = styled.div<FeaturedBooksProps>`
  width: 110px;
  height: 180px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: ${({isFeatured}) => isFeatured ? '0' : '14px'};
  border-bottom-left-radius: ${({isFeatured}) => isFeatured ? '14px' : '0'};
  margin-bottom: 8px;
  background-color: #EFFAFF;
  display: flex;
  align-items: center;
  padding: 5px;
    
  @media (min-width: 760px) {
    width: 140px;
    height: 220px;
  }
`;

export const BookTitle = styled.p<FeaturedBooksProps>`
  font-size: 12px;
  color: ${({isFeatured}) => isFeatured ? '#fff' : '#595A5C'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
    
  @media (min-width: 760px) {
    font-size: 14px;
  }
`;

export const DefaultThumbnailTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: #86878B;
  white-space: normal;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
      
  @media (min-width: 760px) {
    font-size: 15px;
  }
`;