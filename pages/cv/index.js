import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Page from "../../components/cv/CVPage";
import Sidebar from "../../components/cv/Sidebar";
import Profile from "../../components/cv/Sidebar/Profile";
import CVcontact from "../../components/cv/Sidebar/CVcontact";
import SkillSection from "../../components/cv/Sidebar/SkillSection";
import TechStack from "../../components/cv/Sidebar/SkillSection/TechStack";
import SkillList from "../../components/cv/Sidebar/SkillSection/SkillList";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import CVmain from "../../components/cv/CVmain";

import { FaPrint, FaDownload } from "react-icons/fa";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import { exportToPDF } from "../../utils/exportToPDF";
import { cvSkillData } from "../../utils/data/cvSkillData";

export default function Lebenslauf() {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const handlePDFDownload = () => exportToPDF(contentRef, "Lebenslauf_Lutz Dietterich");

    return (
        <StyledContainer>
            <StyledCVHeaderWrapper>
                <Header />
            </StyledCVHeaderWrapper>

            <StyledMain>
                <h1>Lebenslauf</h1>

                <StyledPrintArea ref={contentRef}>
                    <StyledButtonContainer data-button-container>
                        <StyledActionButton onClick={handlePDFDownload} title="Als PDF herunterladen">
                            <FaDownload />
                        </StyledActionButton>
                        <StyledActionButton onClick={reactToPrintFn} title="Drucken">
                            <FaPrint />
                        </StyledActionButton>
                    </StyledButtonContainer>

                    <Page>
                        <Sidebar>
                            <Profile />
                            <CVcontact />
                            <SkillSection title="Tech Stack">
                                <TechStack data={cvSkillData.techStack.categories} />
                            </SkillSection>

                            <SkillSection title="Sprachen">
                                <SkillList data={cvSkillData.languages.skills} />
                            </SkillSection>
                        </Sidebar>
                        <CVmain></CVmain>
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
                        <CVmain></CVmain>
                    </Page>
                </StyledPrintArea>
                <ScrollToTopButton />
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
    height: 150px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1000px;
    flex: 1;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 230, 242, 0) 22.22%, #e2e5f2 93.58%);
`;

const StyledPrintArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 210mm;
`;

const StyledButtonContainer = styled.div`
    position: absolute;
    top: -5px;
    right: 0;
    display: flex;
    gap: 10px;
    z-index: 10;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

const StyledActionButton = styled.button`
    font-size: 1.4rem;
    border: none;
    background-color: transparent;
    color: #444;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        color: #0070f3;
        background: rgba(0, 112, 243, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        animation: ${pulse} 0.6s ease;
    }

    &:active {
        transform: scale(0.9);
        box-shadow: none;
    }

    /* Tooltip */
    &::after {
        content: attr(title);
        position: absolute;
        bottom: -36px;
        left: 50%;
        transform: translateX(-50%);
        background: #000;
        color: #fff;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 11px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    &:hover::after {
        opacity: 1;
        transform: translate(-50%, -2px);
    }

    @media print {
        display: none;
    }
`;

const StyledFooterWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
