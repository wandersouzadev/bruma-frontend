import * as Styled from "./styles";
import BlogSlider, { BlogSliderData } from "../../blog-slider";
import { PortfolioTopGrid } from "../../portfolio-top-grid";
import { PortfolioGrid } from "../../portfolio-grid";
import { PortfolioHero } from "../../hero/portfolio-hero";

export type PortfolioData = {
  slug: string;
  title: string;
  description: string;
  cover: {
    url: string;
    alternativeText: string;
  };
  category: {
    name: string;
  };
  content: string;
  created_at: string;
};

export type PortfolioTemplateProps = {
  portfolioForTop: PortfolioData;
  portfolioTopForGrid: PortfolioData[];
  portfolios: PortfolioData[];
  blogPosts: BlogSliderData[];
};

export const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
  portfolioForTop,
  portfolioTopForGrid,
  portfolios,
  blogPosts,
}) => {
  return (
    <Styled.Wrapper>
      <PortfolioHero />
      <PortfolioTopGrid
        latest={portfolioForTop}
        portfolios={portfolioTopForGrid}
      />
      <PortfolioGrid portfolios={portfolios} />
      {blogPosts && (
        <BlogSlider
          title="Olha, meu blog :)"
          blogPosts={blogPosts}
          itemsSpace={120}
        />
      )}
    </Styled.Wrapper>
  );
};
