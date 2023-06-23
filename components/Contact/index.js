import styled from "styled-components";

import NodemailerForm from "../NodemailerForm";
import EmailTemplate from "../EmailTemplate";

export default function ContactForm() {
  return (
    <StyledContact id="contact">
      <StyledOverlay>
        <h2>Kontakt</h2>

        <NodemailerForm />
        {/* <EmailTemplate /> */}

        <StyledAuthor>
          Foto von{" "}
          <a href="https://unsplash.com/@mathyaskurmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Mathyas Kurmann
          </a>{" "}
          auf{" "}
          <a href="https://unsplash.com/de/fotos/fb7yNPbT0l8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </StyledAuthor>
      </StyledOverlay>
    </StyledContact>
  );
}

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  background-image: url("https://res.cloudinary.com/dnojoo4vt/image/upload/v1687513877/mathyas-kurmann-fb7yNPbT0l8-unsplash_nqbgqg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;



  h2 {
    margin: var(--h2-margin);
    text-transform: uppercase;
    color: #f5f5f5;

    @media (max-width: 768px) {
      margin: var(--h2margin-mobile);
    }
`;

const StyledOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); // Anpassen der Transparenz
  z-index: 1; // Stelle sicher, dass das Overlay über dem Container liegt
  padding: var(--main-section-padding);
`;

const StyledAuthor = styled.p`
  align-self: flex-end;
  margin: 50px 20px -50px 0;
  padding: 0;
  font-size: 0.8rem;
  color: #f5f5f5;
  text-align: center;
  text-shadow: 1px 1px 1px #000;

  a {
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #000;
    cursor: pointer;
  }
`;
