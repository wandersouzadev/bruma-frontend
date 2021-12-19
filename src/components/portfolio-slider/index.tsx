import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import { CustomSwiper } from "../common/custom-swiper";
import { loadImg } from "../../utils";
import { SwiperSlide } from "swiper/react";
import { CommonButton } from "../common/button";

export type PortfolioSliderData = {
  slug: string;
  title: string;
  cover: {
    url: string;
    alternativeText: string;
  };
  created_at: string;
};

type PortfolioSliderProps = {
  title?: string;
  description?: string;
  portfolioArray: PortfolioSliderData[] | [];
  arrowColor?: "primary" | "secondary" | "white";
  variant?: "primary" | "secondary" | "light" | "dark";
  itemsSpace?: number;
  showButton?: boolean;
};

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  title = "",
  description = "",
  portfolioArray,
  arrowColor,
  variant = "primary",
  itemsSpace,
  showButton = false,
}: PortfolioSliderProps) => {
  return (
    <Styled.Wrapper variant={variant}>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.TitleWrapper>
      <CustomSwiper
        itemsPerPage={portfolioArray.length}
        space={itemsSpace}
        arrowColor={arrowColor}
      >
        {portfolioArray.map((portfolio) => (
          <SwiperSlide key={portfolio.slug} style={{ display: "flex" }}>
            <Link href={"portfolio/" + portfolio.slug} passHref>
              <Styled.Card>
                <Styled.ImageWrapper>
                  <Image
                    src={loadImg(portfolio.cover?.url)}
                    alt={portfolio.cover?.alternativeText || ""}
                    layout="fill"
                  />
                  <Styled.AnimatedBG>Ler+</Styled.AnimatedBG>
                </Styled.ImageWrapper>
                <Styled.Bottom>{portfolio.title}</Styled.Bottom>
              </Styled.Card>
            </Link>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      {showButton && (
        <CommonButton variant="primary" mx="auto" fontSize={5} padding={4}>
          Ver + em portfólio
        </CommonButton>
      )}
    </Styled.Wrapper>
  );
};
