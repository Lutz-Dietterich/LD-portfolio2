import styled from "styled-components";

export default function Teaser() {
  return (
    <StyledTeaser>
      <h2>About Me</h2>
      <p>
        Ich bin Technik- und Designbegeistert mit umfangreichen Erfahrungen im
        technischen Handwerk und im Kaufmännischen Bereich. Meine berufliche
        Reise führte mich von der Heizungs- und Kältetechnik zur Leidenschaft
        für Marketing und Webentwicklung. In meiner Freizeit tauche ich als
        Maker in die Welt des 3D-Drucks, der Konstruktionen und der
        Hausautomation ein. Mit meinen umfangreichen Kenntnissen in
        IT-Infrastrukturen stehe ich bereit, um innovative Lösungen zu
        entwickeln. Erfahren Sie mehr über meine vielseitigen Fähigkeiten und
        lassen Sie uns gemeinsam spannende Projekte realisieren.
      </p>
    </StyledTeaser>
  );
}

const StyledTeaser = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem 0;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
