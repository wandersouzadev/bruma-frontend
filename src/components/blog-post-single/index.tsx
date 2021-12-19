import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";
import { loadImg } from "../../utils/load-img";
import { formatDate } from "../../utils/date";
import { useRouter } from "next/router";
import { BlogPostData } from "../template/blog";
import parse from "html-react-parser";
import { ButtonNoHover } from "../common/button-no-hover";

type BlogPostLatestProps = {
  blogPost: BlogPostData;
  reverse?: boolean;
};

export const BlogPostSingle: React.FC<BlogPostLatestProps> = ({
  reverse = false,
  blogPost,
}) => {
  const router = useRouter();
  return (
    <Styled.BlogPostLatest>
      {blogPost && (
        <Styled.Post reverse={reverse}>
          <Styled.PostImage>
            <Image
              src={loadImg(blogPost.cover.url) || ""}
              alt={blogPost.cover.alternativeText || ""}
              layout="fill"
            />
          </Styled.PostImage>
          <Styled.PostContent>
            <Styled.PostDate>
              {formatDate(blogPost?.created_at)}
            </Styled.PostDate>
            <Styled.PostTitleWrapper>
              <Styled.PostTitle>{blogPost.title}</Styled.PostTitle>
              <Styled.PostSubtitle>{blogPost.description}</Styled.PostSubtitle>
            </Styled.PostTitleWrapper>
            <Styled.PostTextPreview>
              {parse(blogPost.content.slice(0, 50) + "...")}
            </Styled.PostTextPreview>
            <Link href={router.route + "/" + blogPost?.slug} passHref>
              <a>
                <ButtonNoHover variant={"secondary"} alignSelf="center">
                  continuar lendo
                </ButtonNoHover>
              </a>
            </Link>
          </Styled.PostContent>
        </Styled.Post>
      )}
    </Styled.BlogPostLatest>
  );
};
