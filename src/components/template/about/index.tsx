import * as Styled from "./styles";
import {
  ProfessionalExperienceData,
  ProfessionalExperienceSlider,
} from "../../professional-experience-slider";
import { Skills } from "../../skills";
import { Customers } from "../../customers";
import { PortfolioSingle } from "../../portfolio-single";
import { PortfolioSliderData } from "../../portfolio-slider";
import BlogSlider, { BlogSliderData } from "../../blog-slider";
import { AboutHero } from "../../hero/about-hero";

export type AboutTemplateProps = {
  professionalExperiences: ProfessionalExperienceData[];
  portfolio: PortfolioSliderData[];
  blogPosts: BlogSliderData[];
};

export const AboutTemplate: React.FC<AboutTemplateProps> = ({
  professionalExperiences,
  portfolio,
  blogPosts,
}) => {
  return (
    <Styled.HomeTemplateWrapper>
      <AboutHero />
      {professionalExperiences[0] && (
        <ProfessionalExperienceSlider
          title="Minhas experiências"
          professionalExperiences={professionalExperiences}
          arrowColor="secondary"
        />
      )}
      <Skills />
      <Customers />
      {portfolio[0] && <PortfolioSingle portfolio={portfolio} />}
      {blogPosts[0] && (
        <BlogSlider
          title="Olha, meu blog :)"
          blogPosts={blogPosts}
          itemsSpace={120}
        />
      )}
    </Styled.HomeTemplateWrapper>
  );
};
