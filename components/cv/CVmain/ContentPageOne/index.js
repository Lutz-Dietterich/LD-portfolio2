import styled from "styled-components";

import CVmain from "..";
import TitleCard from "../TitleCard";
import TimelineSection from "../TimelineSection";
import TimelineItem from "../TimelineSection/TimelineItem";
import HighlightBox from "../TimelineSection/HighlightBox";
import { jobData } from "../../../../utils/data/jobData";

export default function ContentPageOne() {
    // Nur die Web-Development Jobs (webdevitem: true)
    const webDevJobs = jobData.filter((job) => job.webdevitem === true);

    return (
        <CVmain>
            <TitleCard />
            <StyledH2>Web Development Erfahrung</StyledH2>
            <TimelineSection>
                {webDevJobs.map((job) => (
                    <TimelineItem key={job.id} webdevitem={job.webdevitem} jobTitle={job.jobTitle} company={job.company} date={job.date}>
                        <StyledJobContent>
                            {/* Hauptprojekt als HighlightBox für ersten Job */}
                            {job.projects?.[0] && (
                                <HighlightBox boxTitle={job.projects[0].title}>
                                    <StyledProjectList>
                                        {job.projects[0].responsibilities.map((resp, index) => (
                                            <StyledProjectItem key={index}>
                                                <StyledArrow>→</StyledArrow>
                                                <div>
                                                    <StyledResponsibilityTitle>{resp.title}</StyledResponsibilityTitle>
                                                    <span>{resp.description}</span>
                                                </div>
                                            </StyledProjectItem>
                                        ))}
                                    </StyledProjectList>
                                    {job.projects[0].repository && (
                                        <StyledRepository>
                                            <StyledArrow>→</StyledArrow>
                                            <strong>Repository: {job.projects[0].repository.replace("Repository: ", "")}</strong>
                                        </StyledRepository>
                                    )}
                                </HighlightBox>
                            )}

                            {/* Zusätzliche Projekte als kleinere Boxen */}
                            {job.additionalProjects?.map((project, index) => (
                                    <StyledAdditionalProject key={index}>
                                        <StyledResponsibilityTitle>{project.title}</StyledResponsibilityTitle>
                                        <span>{project.description}</span>
                                    </StyledAdditionalProject>
                                ))}


                            {/* Bootcamp spezifische Inhalte */}
                            {job.description && (
                                <StyledDescription>
                                    <span>{job.description}</span>
                                </StyledDescription>
                            )}

                            {job.responsibilities && job.description && (
                                <StyledResponsibilitiesList>
                                    {job.responsibilities.map((resp, index) => (
                                        <StyledResponsibilityItem key={index}>
                                            <StyledArrow>→</StyledArrow>
                                            <div>
                                                <StyledResponsibilityTitle>{resp.title}</StyledResponsibilityTitle>
                                                <span>{resp.description}</span>
                                            </div>
                                        </StyledResponsibilityItem>
                                    ))}
                                </StyledResponsibilitiesList>
                            )}

                            {/* Final Project */}
                            {job.finalProject && (
                                <StyledFinalProject>
                                    <StyledArrow>→</StyledArrow>
                                    <div>
                                        <StyledResponsibilityTitle>{job.finalProject.title}</StyledResponsibilityTitle>
                                        <span>{job.finalProject.description}</span>
                                    </div>
                                </StyledFinalProject>
                            )}

                            {/* Technologies */}
                            {job.technologies && (
                                <StyledTechnologies>
                                    {job.technologies.map((tech, index) => (
                                        <StyledTechBadge key={index}>{tech}</StyledTechBadge>
                                    ))}
                                </StyledTechnologies>
                            )}
                        </StyledJobContent>
                    </TimelineItem>
                ))}
            </TimelineSection>
        </CVmain>
    );
}

const StyledH2 = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
    position: relative;

    ::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 60%;
        height: 2px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 2px;
    }
`;

const StyledJobContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 12px;
`;

const StyledProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
`;

const StyledProjectItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.4;
`;

const StyledArrow = styled.span`
    color: #667eea;
    font-weight: 500;
    margin-top: 2px;
    flex-shrink: 0;
`;

const StyledResponsibilityTitle = styled.strong`
    color: #4a5568;
    font-weight: 600;
`;

const StyledRepository = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 12px;
    border-top: 1px solid rgba(102, 126, 234, 0.2);

    strong {
        color: #667eea;
    }
`;

const StyledAdditionalProject = styled.div`
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 6px;
    padding: 12px;
    line-height: 1.4;
`;

const StyledResponsibilitiesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const StyledResponsibilityItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.4;
`;

const StyledDescription = styled.div`


`;

const StyledFinalProject = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.4;
    background: rgba(245, 158, 11, 0.08);
    padding: 12px;
    border-radius: 6px;
    border-left: 3px solid #f59e0b;
`;

const StyledTechnologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
`;

const StyledTechBadge = styled.span`
    background: #e2e8f0;
    color: #4a5568;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
`;
