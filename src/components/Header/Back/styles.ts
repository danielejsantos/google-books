import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #EFFAFF;
  position: relative;
`;

export const BackButtonWrapper = styled.div`
  position: absolute;
  left: 16px;
`;

export const BackButton = styled.div`
  background: none;
  outline: 0;
  cursor: pointer;
`;

export const SearchResult = styled.p`
  color: #86878B;
  font-size: 17px;
  line-height: 29px;
  font-weight: 600;

  @media (min-width: 760px) {
    font-size: 20px;
  }
`;