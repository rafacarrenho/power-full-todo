import styled from "styled-components/native";

export const Container = styled.View`
  height: 90px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: #1f2395;
  margin-left: 32px;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  position: absolute;
  z-index: 2;
`;

export const Icon = styled.Image``;

export const TextContainer = styled.View`
  padding-left: 56px;
`;

export const DoneContainer = styled.View`
  background-color: white;
  height: 24px;
  width: 24px;
  border-radius: 15px;
  margin-right: 24px;
`;
