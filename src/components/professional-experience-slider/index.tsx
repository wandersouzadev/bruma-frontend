import { SwiperSlide } from "swiper/react";
import { CustomPaginatedSwiper } from "../common/custom-paginated-swiper";
import * as Styled from "./styles";
import * as SliderStyles from "./slider-styles";

export type ProfessionalExperienceData = {
  in: string;
  out: string;
  employer: string;
  job: string;
  description: string;
};

export type ProfessionalExperienceSlider = {
  title: string;
  arrowColor?: "primary" | "secondary" | "white";
  professionalExperiences: ProfessionalExperienceData[];
};

export const ProfessionalExperienceSlider: React.FC<ProfessionalExperienceSlider> =
  ({ title, professionalExperiences, arrowColor }) => {
    return (
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <CustomPaginatedSwiper itemsPerPage={1} variant={arrowColor} space={1}>
          {professionalExperiences.map((experience) => (
            <SwiperSlide key={experience.employer}>
              <SliderStyles.Experience>
                <SliderStyles.ExperienceTitleWrapper>
                  <SliderStyles.ExperienceDate>
                    {new Date(experience.in).getFullYear()} -{" "}
                    {new Date(experience.out).getFullYear()}
                  </SliderStyles.ExperienceDate>
                  <SliderStyles.ExperienceTitle>
                    {experience.employer}
                  </SliderStyles.ExperienceTitle>
                </SliderStyles.ExperienceTitleWrapper>
                <SliderStyles.ExperienceRole>
                  {experience.job}
                </SliderStyles.ExperienceRole>
                <SliderStyles.ExperienceContent>
                  {experience.description}
                </SliderStyles.ExperienceContent>
              </SliderStyles.Experience>
            </SwiperSlide>
          ))}
        </CustomPaginatedSwiper>
      </Styled.Wrapper>
    );
  };
