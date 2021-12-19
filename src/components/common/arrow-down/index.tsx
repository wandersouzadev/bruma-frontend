import * as Styled from "./styles";

export const ArrowDown: React.FC = () => {
  const scrollDown = () => window.scroll({ behavior: "smooth", top: 800 });

  return (
    <Styled.Wrapper onClick={scrollDown}>
      <svg
        data-name="Camada 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 82.67 88.87"
      >
        <g data-name="Grupo 29">
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 1"
            d="M81.94.68 41.33 43.9"
          />
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 2"
            d="m.73.68 40.6 43.22"
          />
        </g>
        <g data-name="Grupo 30">
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 1"
            d="M67.41 35.82 41.47 63.44"
          />
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 2"
            d="m15.52 35.82 25.95 27.62"
          />
        </g>
        <g data-name="Grupo 31">
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 1"
            d="M59.36 68.65 41.3 88.19"
          />
          <path
            fill="none"
            stroke="#45e5c6"
            strokeWidth="2px"
            data-name="Linha 2"
            d="M23.25 68.65 41.3 88.19"
          />
        </g>
      </svg>
    </Styled.Wrapper>
  );
};
