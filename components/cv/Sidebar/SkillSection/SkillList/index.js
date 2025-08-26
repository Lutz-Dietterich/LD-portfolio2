import styled from "styled-components";

export default function SkillList({ data }) {
    return (
        <StyledSkillList style={{ listStyle: "none", padding: 0 }}>
            {data.map((skill, index) => (
                <StyledSkillListItem style={{ paddingLeft: "1em", textIndent: "-0.8em" }} key={index}>
                    {skill.flag} {skill.text}
                </StyledSkillListItem>
            ))}
        </StyledSkillList>
    );
}

const StyledSkillList = styled.ol`
    margin: 0 0 6px 0;
    font-size: 12px;
`;

const StyledSkillListItem = styled.li`
    margin-top: 5px;
`;
