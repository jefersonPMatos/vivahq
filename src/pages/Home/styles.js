import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  height: 90vh;
`;

export const Body = styled.body`
  display: flex;
  border: 1px solid #000;
  height: 100vh;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 900px;
  position: absolute;
  top: 250px;
  right: 100px;

  h1 {
    color: #f32828;
  }

  p {
    width: 690px;
    margin: 15px 0px 50px 0px;
  }
`;
