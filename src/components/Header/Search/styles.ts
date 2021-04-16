import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0px 7px 5px -2px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  outline: 0;

  ::placeholder {
    color: #B2B4B9;
  }

  @media (min-width: 560px) {
    font-size: 14px;

    ::placeholder {
      font-size: 14px;
    }
  }

  @media (min-width: 760px) {
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

export const SearchButton = styled.button`
  background: none;
  outline: 0;
  cursor: pointer;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  align-self: right;
  padding: 16px;
`;
