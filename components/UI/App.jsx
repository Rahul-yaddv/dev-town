import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
`;

export const Container = styled.div`
  background: ${(props) => props.theme.background};
`;

export const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}`;

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  border: "#FFF",
  background: "white",
  softBackground: "#d5e3f7",
};
export const darkTheme = {
  body: "#363537",
  text: "white",
  Border: "white",
  background: "black",
  softBackground: "#d5e3f7",
};
