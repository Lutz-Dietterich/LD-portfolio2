import styled from "styled-components";

import NodemailerForm from "../NodemailerForm";

export default function ContactForm() {
  return (
    <StyledContact id="contact">
      <h2>Kontakt</h2>

      <NodemailerForm />
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
