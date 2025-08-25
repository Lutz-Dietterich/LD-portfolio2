import styled from "styled-components";

export default function Page() {
    return <StyledPage></StyledPage>;
}

const StyledPage = styled.section`
    width: 210mm;
    height: 297mm;
    margin: 50px auto;
    margin-bottom: 50px;
    background: white;
    display: flex;
    page-break-after: always;
    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.06);
`;
