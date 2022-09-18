import { Button } from "../../components/Button";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <S.Text>
        <h1>Viva HQ! 2023</h1>
        <h2>O evento que reúne cultura GEEK, ensino e artes!</h2>
        <p>
          VIVA HQ! é um evento que une a rica cultura geek ao ensino.
          Professores e alunos do ensino básico, do ensino superior e fãs do
          mundo geek de uma maneira geral em momentos em que o lúdico é um forte
          aliado dos atos de ensinar e aprender.
        </p>
        <a href="/inscricoes">
          <Button> Inscreva-se!</Button>
        </a>
      </S.Text>
    </S.Container>
  );
};
