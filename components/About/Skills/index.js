import styled from "styled-components";

import SkillList from "../SkillList";

export default function Skills() {
  return (
    <StyledSkills id="skills">
      <h2>Skills</h2>
      <StyledHR />
      <h3>Vorhanden</h3>
      <SkillList status="now" />
      <StyledHR />
      <h3>Lerne ich gerade</h3>
      <SkillList status="learning" />
      <StyledHR />
      <h3>Weitere Skills</h3>
      <SkillList status="other" />
    </StyledSkills>
  );
}

const StyledSkills = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin: var(--h2-margin);
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    align-self: flex-start;
    margin: 1rem 0 1rem 1rem;
    padding-left: 1rem;

    @media (max-width: 768px) {
      align-self: center;
    }
  }
`;

const StyledHR = styled.hr`
  width: 95%;
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-secondary) 50%,
    var(--color-primary) 100%
  );
`;
