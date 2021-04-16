import styled from 'styled-components';

interface FeaturedBooksProps {
  isFeatured?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const BookshelfWrapper = styled.div<FeaturedBooksProps>`
  background-color: ${({isFeatured}) => isFeatured ? "#47B7ED" : ''};
  padding-left: 16px;
`;

export const BookshelfTitle = styled.p<FeaturedBooksProps>`
  font-size: 24px;
  font-weight: 600;
  color: ${({isFeatured}) => isFeatured ? "#fff" : '#2D2D2E'};
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const BooksWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1025px) {
    overflow: hidden;
    flex-wrap: wrap;
  }
`;