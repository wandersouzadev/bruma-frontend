import * as Styled from "./styles";
import Image from "next/image";
import { loadImg } from "../../../utils";
import { ArrowButton } from "../../common/arrow-button";

export type PostHeroProps = {
  title?: string;
  description?: string;
  created_at?: string;
  cover: {
    url: string;
    alternativeText: string;
  };
};

export const PostHero: React.FC<PostHeroProps> = ({
  title = "",
  description = "",
  cover = { url: "", alternativeText: "" },
  created_at,
}) => {
  return (
    <Styled.Wrapper>
      <Image
        src={loadImg(cover.url)}
        alt={cover.alternativeText || ""}
        layout="fill"
      />
      <ArrowButton />
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        {created_at && (
          <Styled.Date>
            {new Date(created_at)
              .toLocaleDateString("pt-br", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
              .replace(".", "")
              .replace(/de/g, "")}
          </Styled.Date>
        )}
      </Styled.TitleWrapper>
    </Styled.Wrapper>
  );
};
