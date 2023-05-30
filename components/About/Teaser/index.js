import styled from "styled-components";

export default function Teaser() {
  return (
    <StyledTeaser>
      <h2>Über Mich</h2>
      <p>
        Ich bin Technik- und Designbegeistert mit umfangreichen Erfahrungen im
        technischen Handwerk und im Kaufmännischen Bereich. Meine berufliche
        Reise führte mich von der Heizungs- und Kältetechnik zur Leidenschaft
        für Marketing und Webentwicklung.
        <br />
        In meiner Freizeit tauche ich als Maker in die Welt des 3D-Drucks, der
        Konstruktionen und der Hausautomation ein. Mit meinen umfangreichen
        Kenntnissen in IT-Infrastrukturen stehe ich bereit, um innovative
        Lösungen zu entwickeln. Erfahren Sie mehr über meine vielseitigen
        Fähigkeiten und lassen Sie uns gemeinsam spannende Projekte realisieren.
      </p>
    </StyledTeaser>
  );
}

const StyledTeaser = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 3rem;
  margin: 2rem 0;

  letter-spacing: 0.1354em;
  text-align: center;

  h2 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
