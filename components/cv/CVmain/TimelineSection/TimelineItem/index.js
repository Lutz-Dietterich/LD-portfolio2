import styled from "styled-components";

export default function TimelineItem({ webdevitem = false, jobTitle, company, date, children }) {
    return (
        <StyledTimelineItem $webdevitem={webdevitem}>
            <StyledJobHeader>
                <div>
                    {jobTitle && <StyledJobTitle $webdevitem={webdevitem}>{jobTitle}</StyledJobTitle>}
                    {company && <StyledCompany>{company}</StyledCompany>}
                </div>
                {date && <StyledDate>{date}</StyledDate>}
            </StyledJobHeader>
            {children}
        </StyledTimelineItem>
    );
}

const StyledTimelineItem = styled.div`
    position: relative;
    margin-bottom: 18px;
    background: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;

    /* Web-dev-focus styling wenn webdevitem aktiv ist */
    ${(props) =>
        props.$webdevitem &&
        `
        background: linear-gradient(135deg, #667eea15, #764ba215);
        border-left: 4px solid #667eea;
    `}

    ::before {
        content: "";
        position: absolute;
        left: -25px;
        top: 15px;
        width: 8px;
        height: 8px;
        background: #667eea;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 0 2px #667eea;
    }
`;

const StyledJobHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
`;

const StyledJobTitle = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 3px;

    /* Job-title styling wenn webdevitem aktiv ist */
    ${(props) =>
        props.$webdevitem &&
        `
        color: #667eea;
    `}
`;

const StyledCompany = styled.div`
    font-size: 12px;
    color: #667eea;
    font-weight: 500;
    line-height: 1.3;
`;

const StyledDate = styled.div`
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    margin-left: 15px;
`;
