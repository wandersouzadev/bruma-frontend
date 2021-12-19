import { Swiper } from "swiper/react";
import * as Styled from "./styles";

interface Props {
  itemsPerPage: number;
  space?: number;
  arrowColor?: "primary" | "secondary" | "white";
  navigation?: boolean;
}

export const CustomSwiper: React.FC<Props> = ({
  children,
  itemsPerPage,
  arrowColor,
  space,
  navigation = true,
}) => {
  const handleSwiperItems = () => (itemsPerPage > 3 ? 3 : itemsPerPage);
  return (
    <Styled.SwiperWrapper variant={arrowColor}>
      <Swiper
        preventClicks={false}
        preventClicksPropagation={false}
        spaceBetween={(space && space) || 1}
        slidesPerView={handleSwiperItems()}
        navigation={navigation}
        loop
      >
        {children}
      </Swiper>
    </Styled.SwiperWrapper>
  );
};
