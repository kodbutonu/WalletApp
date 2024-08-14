import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { Colors } from "@/constants/colors";

const StyledText=styled.Text`
font-size:13px;
color: ${Colors.light.gray};
text-align:left;
`;

import { TextProps } from "./types";

const SmallText:FunctionComponent<TextProps>=(props)=>{
    return <StyledText style={props.textStyle}>
        {props.children}
    </StyledText>
}

export default SmallText;