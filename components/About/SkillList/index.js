import styled from "styled-components";
import { CldImage } from "next-cloudinary";

import { skillsData } from "../../../utils/data/skillsData";

export default function SkillList({ status }) {
  const Skills = skillsData.filter((skill) => skill.status === status);

  return (
    <StyledSkills>
      {Skills.map((skill) => (
        <StyledSkill key={skill.id}>
          <StyledCldImage
            width={skill.imgWidth * 0.8}
            height={skill.imgHeight * 0.8}
            src={skill.img}
            alt={skill.name}
          />
          <StyledSkillName>{skill.name}</StyledSkillName>
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
  margin: 2rem 0 2rem 0;
  width: 80%;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSkill = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    & > h4 {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const StyledCldImage = styled(CldImage)`
  width: auto;
  heigth: 100%;
  transition: transform 5s ease-in-out 0.3s;

  &:hover {
    transform: scale(0.5) rotate(360deg);
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledSkillName = styled.h4`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
`;
