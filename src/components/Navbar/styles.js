import styled from "styled-components";

export const Container = styled.div``;

export const Nav = styled.nav`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding: 15px 0;
  margin: 0 100px;
  color: #000;
`;

export const Link = styled.a`
  display: flex;
  background: #fbca1f;
  padding: 0.5em 1em;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  box-shadow: 0.35em 0.35em #000;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0.5em 0.5em #000;
  }
`;

export const Logo = styled.div`
  position: absolute;
  width: 150px;
  left: 300px;
  top: 10px;

  h1 {
    font-size: 40px;
    color: #fbca1f;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 15px;
  &::not(::last-child) {
    margin-right: 15px;
  }
`;
