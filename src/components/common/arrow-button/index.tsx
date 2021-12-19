import * as Styled from "./styles";
import { useRouter } from "next/router";

export const ArrowButton: React.FC = () => {
  const router = useRouter();
  return (
    <Styled.Wrapper onClick={router.back}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g data-name="91-Arrow Left" fill="currentColor">
          <path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z" />
          <path d="m18.29 24.71-8-8a1 1 0 0 1 0-1.41l8-8 1.41 1.41L12.41 16l7.29 7.29z" />
        </g>
      </svg>
    </Styled.Wrapper>
  );
};
