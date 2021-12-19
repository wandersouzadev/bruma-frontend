import styled from "styled-components";

export const BlogPostLatest = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
`;

export const PostDate = styled.span`
  color: var(--secondary);
  font-weight: 700;
  font-size: 3rem;
`;

export const Post = styled.div<{
  reverse?: boolean;
}>`
  display: flex;
  height: 80%;
  width: 100%;
  justify-self: center;
  color: ${(props) => (props.reverse ? `#f3f3f3` : "var(--primary)")};
  background-color: ${(props) =>
    props.reverse ? `var(--primary)` : "#f3f3f3"};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

export const PostImage = styled.div`
  position: relative;
  width: 50%;

  img {
    object-fit: cover;
  }
`;

export const PostTitleWrapper = styled.div`
  text-align: center;
  word-break: break-all;
`;

export const PostTitle = styled.h3`
  font-weight: 800;
  font-size: 1.5rem;
`;

export const PostSubtitle = styled.span`
  font-size: 1.5rem;
`;

export const PostContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 7rem;
`;

export const PostTextPreview = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;
