import * as S from "./styles";

import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Whatsapp from "../../assets/icons/whatsapp.png";

export const SocialMedia = () => {
  return (
    <S.Container>
      <S.Link
        href="https://api.whatsapp.com/send?phone=5583996245514&text=Oi%2C%20Lucas%2C%20tudo%20bom%3F%20Gostaria%20de%20falar%20sobre%20o%20VIVAHQ!"
        target="_blank"
      >
        <S.IMG src={Whatsapp} alt="Whatsapp" />
      </S.Link>

      <S.Link href="http://instagram.com/vivahqoficial" target="_blank">
        <S.IMG src={Instagram} alt="Instagram" />
      </S.Link>

      <S.Link href="#" target="_blank">
        <S.IMG src={Facebook} alt="Facebook" />
      </S.Link>
    </S.Container>
  );
};
