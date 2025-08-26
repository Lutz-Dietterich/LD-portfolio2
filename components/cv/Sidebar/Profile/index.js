import styled from "styled-components";
import Image from "next/image";

export default function Profile() {
    return (
        <StyledProfile>
            <StyledProfileImage src="/img/hero_portrait.png" alt="Lutz Dietterich" width={786} height={741} />
            <StyledProfileH1>Lutz Dietterich</StyledProfileH1>
            <StyledProfileTitel>Web Developer</StyledProfileTitel>
        </StyledProfile>
    );
}

const StyledProfile = styled.article`
    text-align: center;
    margin-bottom: 25px;
    margin-top: 50px;
`;

const StyledProfileImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(224, 228, 233, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 32px;
    font-weight: bold;
`;

const StyledProfileH1 = styled.h1`
    font-size: 25px;
    margin-bottom:8px;
    font-weight: 600;
`;

const StyledProfileTitel = styled.div`
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 15px;
`;
