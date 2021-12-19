import * as Styled from "./styles";
import { PostHero } from "../../hero/post-hero";
import { BlogPostData } from "../blog";
import parse from "html-react-parser";

export type BlogPostTemplateProps = {
  post: BlogPostData;
};

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ post }) => {
  return (
    <Styled.BlogPostWrapper>
      <PostHero
        title={post.title}
        description={post.description}
        cover={post.cover}
        created_at={post.created_at}
      />
      <Styled.Content className="ck-content">
        {parse(
          post.content.replace(
            /\/uploads/g,
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads`
          )
        )}
      </Styled.Content>
    </Styled.BlogPostWrapper>
  );
};
