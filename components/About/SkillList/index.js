import styled from "styled-components";
import { CldImage } from "next-cloudinary";

import { skillsData } from "../../../utils/data/skillsData";

export default function SkillList({ status }) {
  const nowSkills = skillsData.filter((skill) => skill.status === status);

  return (
    <StyledSkillListNow>
      {nowSkills.map((skill) => (
        <StyledSkill key={skill.id}>
          <StyledCldImage
            width={skill.imgWidth}
            height={skill.imgHeight}
            src={skill.img}
            alt={skill.name}
          />
          <h4>{skill.name}</h4>
        </StyledSkill>
      ))}
    </StyledSkillListNow>
  );
}

const StyledSkillListNow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--color-primary);
  width: 80%;
  gap: 2rem;
`;

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCldImage = styled(CldImage)`
  width: 1/2;
  height: 1/2;
`;
