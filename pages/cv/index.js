import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Page from "../../components/cv/CVPage";
import Sidebar from "../../components/cv/Sidebar";
import Profile from "../../components/cv/Sidebar/Profile";
import CVcontact from "../../components/cv/Sidebar/CVcontact";
import SkillSection from "../../components/cv/Sidebar/SkillSection";
import TechStack from "../../components/cv/Sidebar/SkillSection/TechStack";

import { cvSkillData } from "../../utils/data/cvSkillData";

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
                        <SkillSection title="Tech Stack">
                            <TechStack data={cvSkillData.techStack.categories} />
                        </SkillSection>

                        {/* Sprachen - Titel statisch, Daten dynamisch */}
                        <SkillSection title="Sprachen">
                            {cvSkillData.languages.categories.map((category) => (
                                <div key={category.id}>{category.skills}</div>
                            ))}
                        </SkillSection>
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
