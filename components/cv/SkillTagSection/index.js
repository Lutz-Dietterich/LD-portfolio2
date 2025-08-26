import styled from "styled-components";
import SkillTag from "../SkillTag";

export default function SkillTagSection({ skills }) {
    return (
        <StyledSkillTagSection>
            {skills.map((skill, index) => (
                <SkillTag key={index} text={skill} />
            ))}
        </StyledSkillTagSection>
    );
}

const StyledSkillTagSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;
