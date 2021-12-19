import styled from "styled-components";

export const Header = styled.header`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: var(--header-height);
  min-height: calc(100vh - var(--header-height) * 2);
  min-width: 250px;
  width: 20vw;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.h2`
  color: var(--primary);
  cursor: pointer;
  white-space: pre-wrap;
  font-family: "Eskorte";
  font-size: 3.6rem;
  max-width: min-content;
  margin: 0 auto;
`;

export const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  font-family: "SamsungOne";
  li {
    margin: 3rem 0;
  }
`;

export const Link = styled.a<{ active?: boolean }>`
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: ${(props) => (props.active ? 700 : 400)};
`;

export const MenuSocial = styled.div`
  display: flex;
  a {
    margin: 0 1rem;
  }
`;
