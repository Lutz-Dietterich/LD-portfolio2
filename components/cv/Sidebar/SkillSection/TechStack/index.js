import styled from "styled-components";

export default function TechStack({ data }) {
    return (
        <>
            {data.map((category) => (
                <StyledSkillCard key={category.id}>
                    <StyledSkillCardTitle>{category.title}</StyledSkillCardTitle>
                    <StyledSkillTagSection>
                        {category.skills.map((skill, index) => (
                            <StyledSkillTag key={index}>{skill}</StyledSkillTag>
                        ))}
                    </StyledSkillTagSection>
                </StyledSkillCard>
            ))}
        </>
    );
}

const StyledSkillCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
`;

const StyledSkillCardTitle = styled.h4`
    font-size: 12px;
    margin: 0 0 8px 0;
    opacity: 0.9;
`;

const StyledSkillTagSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

const StyledSkillTag = styled.div`
    background: rgba(255, 255, 255, 0.2);
    padding: 3px 6px;
    border-radius: 10px;
    font-size: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
`;
