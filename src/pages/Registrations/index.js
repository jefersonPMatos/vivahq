import { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";

import { Button } from "../../components/Button";

export const Registrations = () => {
  const [choose, setChoose] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(choose);

  return (
    <S.Container>
      <h1>Inscrição</h1>

      {choose === "adventurer" ? (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>
            Qual seu nome completo?
            <S.Input {...register("fullName")} />
          </S.Label>

          <S.Label>
            Qual sua idade?
            <S.Input {...register("age")} />
          </S.Label>

          <S.Label>
            Onde você estuda/ensina?
            <S.Input {...register("school")} />
          </S.Label>

          <S.Label>
            Qual seu avatar?
            <S.Input placeholder="Ex: Homem de Ferro" {...register("avatar")} />
          </S.Label>

          <Button type="submit">Finalizar</Button>
        </S.Form>
      ) : choose === "avenger" ? (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>
            Nome completo:
            <S.Input {...register("fullName")} />
          </S.Label>

          <S.Label>
            Idade:
            <S.Input {...register("age")} />
          </S.Label>

          <S.Label>
            Instituição de ensino
            <S.Input {...register("school")} />
          </S.Label>

          <S.Label>
            Avatar:
            <S.Input {...register("avatar")} />
          </S.Label>

          <Button type="submit">Finalizar</Button>
        </S.Form>
      ) : (
        <S.OptionWraper>
          <S.Option onClick={() => setChoose("adventurer")}>
            <h2>Sou apenas um aventureiro!</h2>
            <p>Estou aqui só pela diversão!</p>
          </S.Option>

          <S.Option onClick={() => setChoose("avenger")}>
            <h2> Já ouviu falar da iniciativa vingadores?</h2>
            <p>Quero me inscrever como monitor!</p>
          </S.Option>
        </S.OptionWraper>
      )}
    </S.Container>
  );
};
