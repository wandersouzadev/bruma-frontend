import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import { formatDate, loadImg } from "../../utils";
import { useRouter } from "next/router";
import { BlogPostData } from "../template/blog";

export type BlogPostsGridProps = {
  blogPosts: BlogPostData[];
};

export const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({ blogPosts }) => {
  const router = useRouter();
  return (
    <Styled.BlogPostsGridWrapper>
      <Styled.Grid>
        {blogPosts.map((post) => (
          <Link key={post.slug} href={router.route + "/" + post.slug} passHref>
            <a>
              <Styled.BlogPost variant="primary">
                <Styled.Content>
                  <Styled.TitleWrapper>
                    <Styled.Date>
                      {formatDate(post?.created_at).replace(" ", "\n")}
                    </Styled.Date>
                    <Styled.Title>{post?.title}</Styled.Title>
                  </Styled.TitleWrapper>
                </Styled.Content>
                <Styled.ImageWrapper>
                  <Image
                    src={loadImg(post?.cover.url)}
                    alt={post?.cover.alternativeText || ""}
                    layout="fill"
                  />
                </Styled.ImageWrapper>
              </Styled.BlogPost>
            </a>
          </Link>
        ))}
      </Styled.Grid>
    </Styled.BlogPostsGridWrapper>
  );
};
