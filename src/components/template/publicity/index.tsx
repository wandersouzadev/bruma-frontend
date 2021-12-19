import * as Styled from "./styles";
import { CommonButton } from "../../common/button";
import { JournalisticPublicityHero } from "../../hero/journalistic-publicity-hero";
import { PortfolioSlider, PortfolioSliderData } from "../../portfolio-slider";
import parse from "html-react-parser";

export type PublicityTemplateProps = {
  portfolioArray: PortfolioSliderData[];
  publicityText?: string;
};

export const PublicityTemplate: React.FC<PublicityTemplateProps> = ({
  portfolioArray,
  publicityText,
}) => {
  return (
    <Styled.Wrapper>
      <JournalisticPublicityHero title="Texto Publicitário" />
      {publicityText && (
        <Styled.Content className="ck-content">
          {parse(
            publicityText.replace(
              /"\/uploads"/g,
              process.env.NEXT_PUBLIC_STRAPI_URL + "/uploads"
            )
          )}
        </Styled.Content>
      )}

      <PortfolioSlider
        title="Portfólio:"
        portfolioArray={portfolioArray}
        showButton
        variant="light"
        itemsSpace={50}
      />
    </Styled.Wrapper>
  );
};
