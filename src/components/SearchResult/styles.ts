import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  column-gap: 16px;
  row-gap: 16px;
  margin: 20px 16px;

  @media (min-width:560px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width:660px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width:760px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const PageButton = styled.button`
  background-color: #47B7ED;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  outline: 0;
  cursor: pointer;

  :first-child {
    margin-right: 5px;
  }
`;