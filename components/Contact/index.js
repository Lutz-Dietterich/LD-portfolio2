import styled from "styled-components";

import NodemailerForm from "../NodemailerForm";
import EmailTemplate from "../EmailTemplate";

export default function ContactForm() {
  return (
    <StyledContact id="contact">
      <h2>Kontakt</h2>

      <NodemailerForm />
      <EmailTemplate />
    </StyledContact>
  );
}

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
`;
