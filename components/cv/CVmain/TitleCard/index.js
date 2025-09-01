import styled from "styled-components";

export default function TitleCard() {
    return (
        <StyledTitleCard>
            <h2>Full-Stack Developer mit Hardware-Expertise</h2>
            <p>
                <strong>Quereinsteiger mit einzigartiger Kombination:</strong> 20+ Jahre praktische Systemerfahrung aus der Technik trifft
                moderne Web-Entwicklung. Spezialisiert auf Full-Stack Development mit besonderem Fokus auf Hardware-Integration, IoT-Systeme
                und Server-Infrastruktur. Starke Problemlösungskompetenz und analytisches Denken aus der Praxis, angewandt auf innovative
                Softwarelösungen.
            </p>
        </StyledTitleCard>
    );
}

const StyledTitleCard = styled.div`
    margin-bottom: 25px;
    padding: 20px;
    background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
    border-radius: 8px;
    border-left: 4px solid #667eea;

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #667eea;
    }

    p {
        font-size: 13px;
        line-height: 1.5;
        color: #4a5568;
    }
`;
