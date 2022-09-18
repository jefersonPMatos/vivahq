import * as S from "./styles";

import { SocialMedia } from "../../components/SocialMedia";

export const Contact = () => {
  return (
    <S.Container>
      <h1>Entre em contato</h1>
      <S.Text>
        <SocialMedia />
      </S.Text>
    </S.Container>
  );
};
