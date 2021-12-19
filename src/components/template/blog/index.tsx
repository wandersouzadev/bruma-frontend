import { BlogPostSingle } from "../../blog-post-single";
import { BlogPostsGrid } from "../../blog-posts-grid";
import { PortfolioSlider, PortfolioSliderData } from "../../portfolio-slider";
import * as Styled from "./styles";

export type BlogPostData = {
  slug: string;
  title: string;
  description: string;
  cover: {
    url: string;
    alternativeText: string;
  };
  content: string;
  created_at: string;
};

export type BlogTemplateProps = {
  blogPosts: BlogPostData[];
  latestPosts: BlogPostData[];
  firstGrid: BlogPostData[];
  portfolioArray: PortfolioSliderData[];
};

export const BlogTemplate: React.FC<BlogTemplateProps> = ({
  blogPosts,
  firstGrid,
  latestPosts,
  portfolioArray,
}) => {
  return (
    <Styled.Wrapper>
      {latestPosts[0] && <BlogPostSingle blogPost={latestPosts[0]} />}
      {firstGrid && <BlogPostsGrid blogPosts={firstGrid} />}
      {latestPosts[1] && <BlogPostSingle blogPost={latestPosts[1]} reverse />}
      {blogPosts && <BlogPostsGrid blogPosts={blogPosts} />}
      {portfolioArray && (
        <PortfolioSlider
          title="Aproveita, e já confere meu portfólio"
          variant="light"
          portfolioArray={portfolioArray}
          itemsSpace={80}
        />
      )}
    </Styled.Wrapper>
  );
};
