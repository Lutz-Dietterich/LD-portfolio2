import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Page from "../../components/cv/CVPage";
import Sidebar from "../../components/cv/Sidebar";
import Profile from "../../components/cv/Profile";
import CVcontact from "../../components/cv/CVcontact";
import SkillSection from "../../components/cv/SkillSection";
import SkillCard from "../../components/cv/SkillCard";
import SkillTagSection from '../../components/cv/SkillTagSection';

import { skillTagData } from '../../utils/data/skillTagData';

export default function lebenslauf() {
    return (
        <StyledContainer>
            <StyledCVHeaderWrapper>
                <Header />
            </StyledCVHeaderWrapper>
            <StyledMain>
                <h1>Lebenslauf</h1>
                <Page>
                    <Sidebar>
                        <Profile />
                        <CVcontact />
                        <SkillSection title={"techStack"}>
                            {skillTagData[0].techStack.map((category) => (
                                <SkillCard key={category.id} title={category.title}>
                                    <SkillTagSection skills={category.skills} />
                                </SkillCard>
                            ))}
                        </SkillSection>
                        <SkillSection title={"Sprachen"}></SkillSection>
                    </Sidebar>
                </Page>
                <Page>
                    <Sidebar>
                        <SkillSection title={"Technische Expertise"}></SkillSection>
                        <SkillSection title={"Soft Skills"}></SkillSection>
                        <SkillSection title={"Persönliche Interessen"}></SkillSection>
                    </Sidebar>
                </Page>
            </StyledMain>
            <StyledFooterWrapper>
                <Footer />
            </StyledFooterWrapper>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;
const StyledCVHeaderWrapper = styled.div`
    width: 100%;
    height: 150px; /* gleiche Höhe wie auf der Hauptseite */
    background: linear-gradient(135deg, rgba(226, 230, 242, 1) 43%, rgba(102, 126, 234, 1) 56%, rgba(118, 75, 162, 1) 96%);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledMain = styled.main`
    min-height: 1000px;
    flex: 1;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 230, 242, 0) 22.22%, #e2e5f2 93.58%);
`;

const StyledFooterWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
