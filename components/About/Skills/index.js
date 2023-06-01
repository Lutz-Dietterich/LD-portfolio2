import styled from "styled-components";

import SkillListNow from "../SkillListNow";
import SkillListLearning from "../SkillListLearning";
import SkillListOther from "../SkillListOther";

export default function Skills() {
  return (
    <StyledSkills>
      <h2>Skills</h2>
      <h3>Using Now</h3>
      <SkillListNow />
      <h3>Lerning</h3>
      <SkillListLearning />
      <h3>Other Skills</h3>
      <SkillListOther />
    </StyledSkills>
  );
}

const StyledSkills = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    margin-bottom: 0.5rem;
    text-alingn: left;
    padding-left: 1rem;
`;
