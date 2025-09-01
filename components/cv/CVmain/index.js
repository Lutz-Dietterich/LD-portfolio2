import styled from "styled-components";

import TitleCard from "./TitleCard";

export default function CVmain({children}) {
    return (
        <StyledCVMainContainer>
            {children}
        </StyledCVMainContainer>
    );
}

const StyledCVMainContainer = styled.div`
    padding: 25px 30px;
    overflow: hidden;


`;
