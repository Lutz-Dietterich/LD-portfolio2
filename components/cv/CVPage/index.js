import styled from "styled-components";

export default function Page({ children }) {
    return (
        <StyledPage>
            <StyledContainer>{children}</StyledContainer>
        </StyledPage>
    );
}

const StyledPage = styled.section`
    width: 210mm;
    height: 297mm;
    margin: 50px auto 20px;
    background: white;
    display: flex;
    page-break-after: always;
    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.06);

    @media print {
        width: 210mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        box-shadow: none;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 240px 1fr;
    height: 100%;
`;
