import * as Styled from "./styles";
import { PostHero } from "../../hero/post-hero";
import { PortfolioData } from "../portfolio";
import parse from "html-react-parser";
import { CustomerData, CustomerSingle } from "../../customer-single";

export type PortfolioPostTemplateProps = {
  post: PortfolioData;
  customer: CustomerData;
};

export const PortfolioPostTemplate: React.FC<PortfolioPostTemplateProps> = ({
  post,
  customer,
}) => {
  return (
    <Styled.BlogPostWrapper>
      <PostHero cover={post.cover} />
      {customer.name && <CustomerSingle customer={customer} />}
      <Styled.Title>{post.title}</Styled.Title>
      <Styled.Description>{post.description}</Styled.Description>
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
