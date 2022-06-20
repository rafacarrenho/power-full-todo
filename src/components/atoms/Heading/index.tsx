import React from "react";
import * as S from "./styled";

export type HeadingColors = "white" | "black" | "blue";
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl";

type HeadingProps = {
  value: string;
  color: HeadingColors;
  size: HeadingSize;
};

const sizes = {
  xs: 12,
  sm: 16,
  md: 18,
  lg: 24,
  xl: 32,
};

const Heading = ({ value, color, size }: HeadingProps) => {
  return (
    <S.Container>
      <S.Text color={color} size={sizes[size]}>
        {value}
      </S.Text>
    </S.Container>
  );
};

export default Heading;
