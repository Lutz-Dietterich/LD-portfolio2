import styled from "styled-components";

export default function SkillSection({ title, children }) {
    return (
        <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledSkillsGrid>{children}</StyledSkillsGrid>
        </div>
    );
}

const StyledTitle = styled.h1`
    font-size: 15px;
    font-weight: 600;
    margin: 35px 0 15px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const StyledSkillsGrid = styled.section`
    display: grid;
    gap: 12px;
`;
