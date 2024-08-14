import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { Colors } from "@/constants/colors";

const StyledText=styled.Text`
font-size:37px;
color: ${Colors.light.white};
text-align:left;
text-align:Lato-Bold;
`;

import { TextProps } from "./types";

const BigText:FunctionComponent<TextProps>=(props)=>{
    return <StyledText style={props.textStyle}>
        {props.children}
    </StyledText>
}

export default BigText;