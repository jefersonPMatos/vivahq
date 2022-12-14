import styled from "styled-components";
import bg from "../../assets/images/background4.png";

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
    font-size: 80px;
    position: fixed;
    top: 100px;
    right: 350px;
    color: #f32828;
  }
`;

export const Text = styled.div`
  display: flex;
  position: fixed;
  right: 420px;
`;
