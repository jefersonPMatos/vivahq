import * as S from "./styles";

export const Box = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
