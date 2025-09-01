import styled from "styled-components";

import CVmain from "..";
import TitleCard from "../TitleCard";
import TimelineSection from "../TimelineSection";
import TimelineItem from "../TimelineSection/TimelineItem";
import { jobData } from "../../../../utils/data/jobData";

export default function ContentPageOne() {
    // Nur die Web-Development Jobs (webdevitem: true)
    const normalJobs = jobData.filter((job) => job.webdevitem === false);

    return (
        <CVmain>
            <StyledH2>Praktische Systemerfahrung</StyledH2>
            <TimelineSection>
                {normalJobs.map((job) => (
                    <TimelineItem key={job.id} webdevitem={job.webdevitem} jobTitle={job.jobTitle} company={job.company} date={job.date}>
                        <StyledJobContent>
                            {job.responsibilities && (
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
