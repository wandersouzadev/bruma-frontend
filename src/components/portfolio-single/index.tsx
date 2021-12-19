import * as Styled from "./styles";
import * as PortfolioStyles from "./portfolio-styles";
import Image from "next/image";
import Link from "next/link";
import { CommonButton } from "../common/button";
import { loadImg } from "../../utils";
import { PortfolioSliderData } from "../portfolio-slider";

type PortfolioSingleProps = {
  portfolio: PortfolioSliderData[];
};

export const PortfolioSingle: React.FC<PortfolioSingleProps> = ({
  portfolio,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>Quer ver tudo isso?</Styled.Title>
        <Styled.Description> Então você precisa conferir</Styled.Description>
        <Link href="portfolio" passHref>
          <a>
            <CommonButton
              variant="secondary"
              alignSelf="start"
              fontSize={6}
              padding={4}
            >
              {"meu portfólio ;)"}
            </CommonButton>
          </a>
        </Link>
      </Styled.TitleWrapper>
      <Link href={"portfolio/" + portfolio[0].slug} passHref>
        <a>
          <PortfolioStyles.Card>
            <PortfolioStyles.Top>
              <PortfolioStyles.ImageWrapper>
                <Image
                  src={loadImg(portfolio[0].cover?.url)}
                  alt={portfolio[0].cover?.alternativeText || ""}
                  layout="fill"
                />
              </PortfolioStyles.ImageWrapper>
              <PortfolioStyles.AnimatedBG>Ler+</PortfolioStyles.AnimatedBG>
            </PortfolioStyles.Top>
            <PortfolioStyles.Bottom>
              {portfolio[0].title}
            </PortfolioStyles.Bottom>
          </PortfolioStyles.Card>
        </a>
      </Link>
    </Styled.Wrapper>
  );
};
