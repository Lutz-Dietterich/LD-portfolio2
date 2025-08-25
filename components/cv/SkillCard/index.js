import styled from "styled-components";

export default function SkillCard({ title, category }) {
    return (
        <StyledSkillCard>
            <StyledSkillCardTitle>{title}</StyledSkillCardTitle>
        </StyledSkillCard>
    );
}

const StyledSkillCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const StyledSkillCardTitle = styled.h4`
    font-size: 12px;
    margin:0 0 8px 0;
    opacity: 0.9;
`;
