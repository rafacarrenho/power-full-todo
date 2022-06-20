import { StatusBar, StatusBarProps } from "expo-status-bar";
import React from "react";
import * as S from "./styled";

interface CustomStatusBarProps extends StatusBarProps {}

const CustomStatusBar = (props: CustomStatusBarProps) => {
  return (
    <S.Container hidden={!!props.hidden}>
      <StatusBar {...props} />
    </S.Container>
  );
};

export { CustomStatusBar };
