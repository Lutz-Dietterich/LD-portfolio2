import styled from "styled-components";
import Image from "next/image";
import { skillsData } from "../../../utils/data/skillsData";

export default function SkillList({ status }) {
  const nowSkills = skillsData.filter((skill) => skill.status === status);

  return (
    <StyledSkillListNow>
      {nowSkills.map((skill) => (
        <StyledSkill key={skill.id}>
          <Image src={skill.img} alt={skill.name} width={50} height={50} />
          <h4>{skill.name}</h4>
        </StyledSkill>
      ))}
    </StyledSkillListNow>
  );
}

const StyledSkillListNow = styled.section`
  display: flex;
  flex-direction: row;
  background-color: var(--color-primary);
  width: 80%;
`;

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
