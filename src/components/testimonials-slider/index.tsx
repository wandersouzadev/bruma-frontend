import * as Styled from "./styles";
import * as SliderStyles from "./slider-styles";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { CustomSwiper } from "../common/custom-swiper";
import { loadImg } from "../../utils";

export type TestimonialData = {
  name: string;
  message: string;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type TestimonialSliderProps = {
  title: string;
  arrowColor?: "primary" | "secondary" | "white";
  testimonials: TestimonialData[] | [];
};

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  title,
  arrowColor,
  testimonials,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>

      <CustomSwiper itemsPerPage={1} arrowColor={arrowColor}>
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.name}
            style={{
              padding: "111px 0",
            }}
          >
            <SliderStyles.ImageWrapper>
              <Image
                src={loadImg(testimonial.image.url)}
                alt={testimonial.image.alternativeText}
                layout="fill"
              />
            </SliderStyles.ImageWrapper>
            <SliderStyles.Content>
              <SliderStyles.Text>{testimonial.message}</SliderStyles.Text>
              <SliderStyles.Author>{testimonial.name}</SliderStyles.Author>
            </SliderStyles.Content>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Styled.Wrapper>
  );
};
