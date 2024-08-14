import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Colors } from "./colors"; 

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.light.white};
`;


export const ScreenWidth=Dimensions.get("screen").width;
export const ScreenHeight=Dimensions.get("screen").height;