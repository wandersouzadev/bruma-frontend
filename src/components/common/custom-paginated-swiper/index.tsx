import { Swiper } from "swiper/react";
import * as Styled from "./styles";

interface Props {
  itemsPerPage?: number;
  space?: number;
  variant?: "primary" | "secondary" | "white";
}

export const CustomPaginatedSwiper: React.FC<Props> = ({
  children,
  itemsPerPage,
  variant,
  space,
}) => {
  return (
    <Styled.SwiperWrapper variant={variant}>
      <Swiper
        preventClicks={false}
        preventClicksPropagation={false}
        slidesPerView={itemsPerPage || 3}
        spaceBetween={space || 100}
        navigation
        pagination={true}
      >
        {children}
      </Swiper>
    </Styled.SwiperWrapper>
  );
};
