import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00aca8;
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 1px;
  font-size: 30px;
  color: #fff;
  text-shadow: 2px 2px 1px #000;
  width: 350px;
  height: 60px;
  border: none;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 80%);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  transition: all 0.2s ease-in-out;
  filter: drop-shadow(0.35em 0.35em #000);

  &:hover {
    transform: translateY(-6px);
    filter: drop-shadow(0.8em 0.8em #000);
  }
`;
