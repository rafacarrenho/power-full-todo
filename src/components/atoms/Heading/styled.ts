import styled, { css } from "styled-components/native";
import { HeadingColors, HeadingSize } from ".";

export const Container = styled.View``;

type TextProps = {
  color: HeadingColors;
  size: number;
};

export const Text = styled.Text<TextProps>`
  ${({ color, size }) => css`
    color: ${color};
    font-size: ${size}px;
  `}
`;
