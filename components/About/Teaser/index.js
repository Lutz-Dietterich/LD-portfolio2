import styled from "styled-components";

export default function Teaser() {
  return (
    <StyledTeaser id="about">
      <h2>Über Mich</h2>
      <p>
        Als Technik-Enthusiast habe ich eine große Leidenschaft für die
        Webentwicklung und das Erschaffen von optisch ansprechenden und
        funktionalen Lösungen. Ursprünglich im Bereich Heizungs- und
        Kältetechnik tätig, habe ich meine berufliche Reise auf das Gebiet der
        Webentwicklung ausgedehnt.
        <br />
        <br />
        In meiner Freizeit tauche ich als Maker in die faszinierende Welt des
        3D-Drucks, der Konstruktionen und der Hausautomation ein. Mit meinen
        fundierten Kenntnissen in IT-Infrastrukturen stehe ich bereit, um
        innovative Lösungen zu entwickeln und spannende Projekte umzusetzen.
        <br />
        <br />
        Ich bin bereit, meine vielseitigen Fähigkeiten einzusetzen, um gemeinsam
        mit Ihnen ansprechende und funktionale Projekte zu realisieren. Lassen
        Sie uns zusammenarbeiten und aufregende Projekte verwirklichen.
      </p>
    </StyledTeaser>
  );
}

const StyledTeaser = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  hyphens: auto;
  width: 50%;
  padding: 3rem;
  margin: 2rem 0;

  letter-spacing: 0.1354em;
  text-align: center;

  word-spacing: 0.16em;

  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
