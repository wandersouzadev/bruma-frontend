import * as Styled from "./styles";
import { CommonButton } from "../../common/button";
import { JournalisticPublicityHero } from "../../hero/journalistic-publicity-hero";
import { PortfolioSlider, PortfolioSliderData } from "../../portfolio-slider";
import parse from "html-react-parser";

export type JournalisticTemplateProps = {
  portfolioArray: PortfolioSliderData[];
  journalisticText?: string;
};

export const JournalisticTemplate: React.FC<JournalisticTemplateProps> = ({
  portfolioArray,
  journalisticText = "",
}) => {
  return (
    <Styled.Wrapper>
      <JournalisticPublicityHero title="Texto Jornalístico" />
      {journalisticText && (
        <Styled.Content className="ck-content">
          {parse(
            journalisticText.replace(
              /"\/uploads"/g,
              process.env.NEXT_PUBLIC_STRAPI_URL + "/uploads"
            )
          )}
        </Styled.Content>
      )}
      <PortfolioSlider
        title="Portfólio:"
        portfolioArray={portfolioArray}
        variant="light"
        showButton={true}
        itemsSpace={50}
      />
    </Styled.Wrapper>
  );
};
