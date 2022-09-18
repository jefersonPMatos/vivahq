import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const IMG = styled.img`
  display: flex;
  width: 100px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;
