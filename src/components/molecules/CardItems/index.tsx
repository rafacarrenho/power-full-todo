import React from "react";
import { icons } from "../../../assets/cardIcons";
import Heading from "../../atoms/Heading";
import * as S from "./styled";

type CardItemsProps = {
  title: string;
  subtitle: string;
  done: boolean;
  icon: keyof typeof icons;
};

const CardItems = ({ title, subtitle, done, icon }: CardItemsProps) => {
  return (
    <S.Container>
      <S.IconContainer>
        <S.Icon source={icons[icon]} />
      </S.IconContainer>
      <S.Card>
        <S.TextContainer>
          <Heading value={title} color={"white"} size={"md"} />
          <Heading value={subtitle} color={"white"} size={"xs"} />
        </S.TextContainer>
        {done && <S.DoneContainer></S.DoneContainer>}
      </S.Card>
    </S.Container>
  );
};

export default CardItems;
