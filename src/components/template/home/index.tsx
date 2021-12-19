import * as Styled from "./styles";
import { PortfolioSlider, PortfolioSliderData } from "../../portfolio-slider";
import BlogSlider, { BlogSliderData } from "../../blog-slider";
import { TestimonialData, TestimonialSlider } from "../../testimonials-slider";
import { HomeHero } from "../../hero/home-hero";

export type HomeProps = {
  portfolioArray: PortfolioSliderData[] | [];
  blogPosts: BlogSliderData[] | [];
  testimonials: TestimonialData[] | [];
};

export const HomeTemplate: React.FC<HomeProps> = ({
  portfolioArray,
  blogPosts,
  testimonials,
}) => {
  return (
    <Styled.Wrapper>
      <HomeHero />
      <PortfolioSlider
        title="Me conheça"
        description="Quer maneira melhor de me conhecer do que vendo meu portfólio?"
        portfolioArray={portfolioArray}
        variant="dark"
        arrowColor="secondary"
        itemsSpace={50}
      />
      <TestimonialSlider
        title="O que as pessoas acham de mim"
        testimonials={testimonials}
        arrowColor="secondary"
      />
      <BlogSlider
        title="Aproveita que tá aqui e olha meu blog :)"
        blogPosts={blogPosts}
        itemsSpace={120}
      />
    </Styled.Wrapper>
  );
};
