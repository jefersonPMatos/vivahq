import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00aca8;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 28px;
  width: 350px;
  height: 60px;
  border: none;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 80%);
  padding-bottom: 8px;
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
