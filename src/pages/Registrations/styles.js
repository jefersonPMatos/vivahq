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

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  bottom: 100px;
`;

export const Input = styled.input`
  display: flex;
  background: #fbca1f;
  padding: 0.5em 1em;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  box-shadow: 0.35em 0.35em #000;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus {
    transform: scale(1.1);
    box-shadow: 0.5em 0.5em #000;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  gap: 2px;
`;

export const OptionWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 25px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #fbca1f;
  box-shadow: 0.35em 0.35em #000;
  gap: 10px;

  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 1em 1em #000;
  }
`;
