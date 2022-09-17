import * as S from "./styles.js";

export const Button = ({ children, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Container {...rest}>{children}</S.Container>
    </S.Wrapper>
  );
};
