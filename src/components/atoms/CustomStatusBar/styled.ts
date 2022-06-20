import { Platform, StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  hidden: boolean;
};

const ContainerModifier = {
  hidden: () => css`
    padding-top: 0;
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ hidden }) => css`
    padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;

    ${hidden && ContainerModifier.hidden()}
  `}
`;
