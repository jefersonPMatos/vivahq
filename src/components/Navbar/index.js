import * as S from "./styles";

const navData = [
  {
    id: "1",
    name: "Início",
    link: "#",
  },
  {
    id: "2",
    name: "Sobre nós",
    link: "#",
  },
  {
    id: "3",
    name: "Inscrições",
    link: "#",
  },
  {
    id: "4",
    name: "Programação",
    link: "#",
  },
  {
    id: "5",
    name: "Contato",
    link: "#",
  },
];

export function Navbar() {
  return (
    <S.Container>
      <S.Nav>
        <S.List>
          {navData.map((link) => (
            <S.ListItem key={link.id}>
              <S.Link href={link.link}>{link.name}</S.Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </S.Container>
  );
}
