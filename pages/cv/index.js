import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function lebenslauf() {
    return (
        <StyledContainer>
            <Header />
            <StyledMain>
                <h1>Lebenslauf</h1>
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
    background-color: blue;
`;

const StyledMain = styled.main`
    margin-top: 150px;
    flex: 1;
`;

const StyledFooterWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
