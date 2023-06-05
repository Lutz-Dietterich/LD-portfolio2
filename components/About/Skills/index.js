import styled from "styled-components";

import SkillList from "../SkillList";

export default function Skills() {
  return (
    <StyledSkills id="skills">
      <h2>Skills</h2>
      <h3>Using Now</h3>
      <SkillList status="now" />
      <h3>Learning</h3>
      <SkillList status="learning" />
      <h3>Other Skills</h3>
      <SkillList status="other" />
    </StyledSkills>
  );
}

const StyledSkills = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: var(--color-secondary);

  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    align-self: flex-start;
    margin: 0 0 1rem 1rem;
    padding-left: 1rem;
`;
