import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Page from "../../components/cv/CVPage";
import Sidebar from "../../components/cv/Sidebar";
import Profile from "../../components/cv/Sidebar/Profile";
import CVcontact from "../../components/cv/Sidebar/CVcontact";
import SkillSection from "../../components/cv/Sidebar/SkillSection";
import TechStack from "../../components/cv/Sidebar/SkillSection/TechStack";
import SkillList from "../../components/cv/Sidebar/SkillSection/SkillList";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import { cvSkillData } from "../../utils/data/cvSkillData";

export default function Lebenslauf() {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    return (
        <StyledContainer>
            <StyledCVHeaderWrapper>
                <Header />
            </StyledCVHeaderWrapper>

            <StyledMain>
                <h1>Lebenslauf</h1>
                <button onClick={reactToPrintFn}>Print</button>
                <div ref={contentRef}>
                    <Page>
                        <Sidebar>
                            <Profile />
                            <CVcontact />
                            <SkillSection title="Tech Stack">
                                <TechStack data={cvSkillData.techStack.categories} />
                            </SkillSection>

                            {/* Sprachen - Titel statisch, Daten dynamisch */}
                            <SkillSection title="Sprachen">
                                <SkillList data={cvSkillData.languages.skills} />
                            </SkillSection>
                        </Sidebar>
                    </Page>
                    <Page>
                        <Sidebar>
                            <SkillSection title={"Technische Expertise"}>
                                <SkillList data={cvSkillData.expertise.skills} />
                            </SkillSection>
                            <SkillSection title={"Soft Skills"}>
                                <SkillList data={cvSkillData.softSkills.skills} />
                            </SkillSection>
                            <SkillSection title={"Persönliche Interessen"}>
                                <SkillList data={cvSkillData.interests.skills} />
                            </SkillSection>
                        </Sidebar>
                    </Page>
                </div>
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

    @media (max-width: 1200px) {
        background: linear-gradient(135deg, rgba(226, 230, 242, 1) 39%, rgba(102, 126, 234, 1) 50%, rgba(118, 75, 162, 1) 96%);
    }

    @media (max-width: 912px) {
        background: linear-gradient(135deg, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 1) 96%);
    }
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
