import { createGlobalStyle } from "styled-components";

export const Theme = createGlobalStyle`
 html, body {
    font-family: 'Times New Roman', Times, serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    font-family: 'Bangers', cursive;
    font-size: 140px;
  text-shadow: 0.05em 0.05em #000;

  }

  h2 {
    font-family: 'Bangers', cursive;
    font-size: 40px;
  }

 p {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
 }


`;
