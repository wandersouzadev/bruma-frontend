import styled from "styled-components";

export const AboutClients = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  padding: var(--global-padding);
  padding-bottom: 0;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
`;

export const ClientsGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Client = styled.div`
  color: #cccaca;
  font-size: 2.5rem;
  font-family: serif;
`;
