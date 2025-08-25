import styled from "styled-components";
import Link from "next/link";

export default function CVcontact() {
    return (
        <StyledCVcontact>
            <StyledContactItem>
                Glüsinger Weg 2<br />
                21481 Lauenburg
            </StyledContactItem>
            <StyledContactItem>0157 80992549</StyledContactItem>
            <StyledContactItem>job@lutz-dietterich.de</StyledContactItem>
            <StyledContactItem>
                <StyledLink href={"https://linkedin.com/in/lutz-d-83b1221b9"} target="_blank">
                    linkedin
                </StyledLink>
            </StyledContactItem>
            <StyledContactItem>
                <StyledLink href={"https:/lutz-dietterich.de"} target="_blank">
                    lutz-dietterich.de
                </StyledLink>
            </StyledContactItem>
        </StyledCVcontact>
    );
}

const StyledCVcontact = styled.article`
    margin-bottom: 25px;
`;

const StyledContactItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.3;

    ::before {
        content: "•";
        margin-right: 8px;
        font-size: 14px;
        margin-top: 1px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        transform: scale(1.1);
    }
`;
