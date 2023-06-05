import styled from "styled-components";
import { CldImage } from "next-cloudinary";

import { skillsData } from "../../../utils/data/skillsData";

export default function SkillList({ status }) {
  const nowSkills = skillsData.filter((skill) => skill.status === status);

  return (
    <StyledSkills>
      {nowSkills.map((skill) => (
        <StyledSkill key={skill.id}>
          <StyledCldImage
            width={skill.imgWidth * 0.8}
            height={skill.imgHeight * 0.8}
            src={skill.img}
            alt={skill.name}
          />
          <h4>{skill.name}</h4>
        </StyledSkill>
      ))}
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  width: 80%;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
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
