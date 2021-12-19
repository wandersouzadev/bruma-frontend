import styled from "styled-components";

export const ContactForm = styled.div`
  min-height: 100vh;
  padding: var(--global-padding);
  background-color: #f3f3f3;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  input,
  textarea {
    font-family: "Open Sans", sans-serif;
    padding: 1rem;
    font-size: 2.1rem;
    border-radius: 8px;
    border: solid 1px #aaa;
    :focus {
      outline: none;
    }
  }
`;
