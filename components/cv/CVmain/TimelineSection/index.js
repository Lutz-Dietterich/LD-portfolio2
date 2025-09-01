import styled from "styled-components";

export default function TimelineSection({ children }) {
    return <StyledTimelineSection>{children}</StyledTimelineSection>;
}

const StyledTimelineSection = styled.div`
    position: relative;
    padding-left: 20px;

    ::before {
        content: "";
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, #667eea, #764ba2);
    }
`;
