import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #EFFAFF;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.p`
  color: #86878B;
  font-size: 17px;
  font-weight: 600;
  margin-left: 10px;

  @media (min-width: 760px) {
    font-size: 20px;
  }
`;

export const SearchButton = styled.button`
  background: none;
  outline: 0;
  cursor: pointer;
`;