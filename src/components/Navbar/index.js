import * as S from "./styles";

const navData = [
  {
    id: "1",
    name: "Início",
    link: "/",
  },
  {
    id: "2",
    name: "Sobre nós",
    link: "/sobre",
  },
  {
    id: "3",
    name: "Inscrições",
    link: "/inscricoes",
  },
  {
    id: "4",
    name: "Programação",
    link: "/programacao",
  },
  {
    id: "5",
    name: "Contato",
    link: "/contato",
  },
];

export function Navbar() {
  return (
    <S.Nav>
      <S.List>
        {navData.map((link) => (
          <S.ListItem key={link.id}>
            <S.Link href={link.link}>{link.name}</S.Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
}
