import styled from "styled-components";

import bg from "../../assets/images/background2.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  gap: 30px;
  position: fixed;
  top: 200px;
  left: 330px;

  h1 {
    color: #f32828;
  }
`;
