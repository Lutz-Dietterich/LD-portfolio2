import styled from "styled-components";

export default function HighlightBox({ boxTitle, children }) {
    return (
        <StyledHighlightBox>
            <StyledBoxTitle>{boxTitle}</StyledBoxTitle>
            {children}
        </StyledHighlightBox>
    );
}

const StyledHighlightBox = styled.div`
    background: linear-gradient(135deg, #4299e120, #667eea20);
    border: 2px solid #667eea;
    border-radius: 8px;
    padding: 15px;
    margin: 12px 0;
`;

const StyledBoxTitle = styled.h3`
    font-weight: 600;
    color: #667eea;
    margin-top: 0;
    margin-bottom: 8px;
    padding: 0;
    font-size: 13px;
`;
