import styled from "styled-components";

export default function SkillTag({ text }) {
    return (
        <div>
            <StyledSkillTag>{text}</StyledSkillTag>
        </div>
    );
}

const StyledSkillTag = styled.div`
    background: rgba(255, 255, 255, 0.2);
    padding: 3px 6px;
    border-radius: 10px;
    font-size: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
`;
