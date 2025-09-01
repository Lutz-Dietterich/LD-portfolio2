import styled from "styled-components";

import CVmain from "..";
import TitleCard from "../TitleCard";

export default function ContentPageOne() {
    return (
        <CVmain>
            <TitleCard />
            <StyledH2>Web Development Erfahrung</StyledH2>
        </CVmain>
    );
}

const StyledH2 = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
    position: relative;

    ::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 60%;
            height: 2px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 2px;
    }
`;
