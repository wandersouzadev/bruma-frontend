import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import { CustomSwiper } from "../common/custom-swiper";
import { formatDate, loadImg } from "../../utils";
import { SwiperSlide } from "swiper/react";

export type BlogSliderData = {
  slug: string;
  title: string;
  cover: {
    url: string;
    alternativeText: string;
  };
  created_at: string;
};

type BlogSliderProps = {
  title: string;
  blogPosts: BlogSliderData[] | [];
  arrowColor?: "primary" | "secondary" | "white";
  itemsSpace?: number;
};

export default function BlogSlider({
  title,
  blogPosts,
  arrowColor,
  itemsSpace,
}: BlogSliderProps) {
  return (
    <Styled.BlogPostsWrapper>
      <Styled.Title>{title}</Styled.Title>
      <CustomSwiper
        itemsPerPage={blogPosts.length}
        space={itemsSpace}
        arrowColor={arrowColor}
      >
        {blogPosts.map((blogPost) => (
          <SwiperSlide key={blogPost.slug} style={{ display: "flex" }}>
            <Link href={"/blog/" + blogPost.slug} passHref>
              <Styled.Card>
                <Styled.DataWrapper>
                  <Styled.Date>
                    {formatDate(blogPost.created_at).replace(" ", "\n")}
                  </Styled.Date>
                  <Styled.CardTitle>{blogPost.title}</Styled.CardTitle>
                </Styled.DataWrapper>
                <Styled.ImageWrapper>
                  <Image
                    src={loadImg(blogPost.cover.url)}
                    alt={blogPost.cover?.alternativeText || ""}
                    layout="fill"
                  />
                </Styled.ImageWrapper>
              </Styled.Card>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Styled.BlogPostsWrapper>
  );
}
