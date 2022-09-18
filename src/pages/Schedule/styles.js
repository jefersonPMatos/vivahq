import styled from "styled-components";
import bg from "../../assets/images/background3.png";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    position: fixed;
    top: 100px;
    color: #f32828;
  }
`;
