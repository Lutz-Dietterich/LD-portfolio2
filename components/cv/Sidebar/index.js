import styled from "styled-components";
export default function Sidebar({ children }) {
    return (
        <>
            <StyledSidebar> {children} </StyledSidebar>
        </>
    );
}

const StyledSidebar = styled.aside`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px 20px;
`;
