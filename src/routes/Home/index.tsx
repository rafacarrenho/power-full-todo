import React from "react";
import { ScrollView } from "react-native";
import Heading from "../../components/atoms/Heading";
import CardItems from "../../components/molecules/CardItems";
import * as S from "./styled";

const items = [
  {
    title: "READING BOOKS",
    subtitle: "decidindo ainda",
    done: true,
    icon: "star",
  },
  { title: "PAINTING", subtitle: "decidindo ainda", done: true, icon: "book" },
  { title: "INVESTS", subtitle: "decidindo ainda", done: false, icon: "gift" },
  { title: "STUDIES", subtitle: "decidindo ainda", done: false, icon: "idea" },
  { title: "WORK", subtitle: "decidindo ainda", done: false, icon: "money" },
  { title: "WORK", subtitle: "decidindo ainda", done: false, icon: "pencil" },
];

const Home = () => {
  return (
    <S.Container>
      <Heading value="Bem vindo" color="white" size="xl" />
      <Heading value="Rafael Carrenho" color="white" size="md" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        {items.map((item) => {
          return (
            <CardItems
              title={item.title}
              subtitle={item.subtitle}
              done={item.done}
              icon={item.icon as any}
            />
          );
        })}
      </ScrollView>
    </S.Container>
  );
};

export { Home };
