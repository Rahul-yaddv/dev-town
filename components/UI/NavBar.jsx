import styled from "styled-components";

export const Header = styled.h1`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-top: 12px;
  color: ${(props) => props.theme.text};
`;

export const Button = styled.button`
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.softBackground};
  }
`;
