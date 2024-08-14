import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Colors } from "@/constants/colors";

import background from "./../assets/bgs/background_v1.png";
import BigText from "@/components/Texts/BigText";

const WelcomeContainer = styled.View`
background-color: ${Colors.light.secondary};
justify-component:space-between;
width:100%;
height:100%;
`;

const TopSection=styled.View`
flex:1;
max-height:55%;
width:100%;
`;

const TopImage=styled.Image`
flex:1;
max-height:55%;
width:100%;
resize-mode:strecth;
`;

const BottomSection=styled.View`
flex:1;
width:100%;
padding:25px;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
            <TopSection>
                <TopImage source={background}/>
            </TopSection>
            <BottomSection>
                <BigText>
                    Best way to track your money
                </BigText>
            </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;