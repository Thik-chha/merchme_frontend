import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade, Keyboard, A11y } from "swiper";
import ISwiper from "swiper";
import { Dispatch, FC, SetStateAction } from "react";
import { Box, Skeleton, Text } from "@chakra-ui/react";
import { IProduct } from "../interfaces";
import { ProductCard } from "./ProductCard";

type productCarouselPropsType = {
  products?: IProduct[];
  setSwiper: Dispatch<SetStateAction<ISwiper | undefined>>;
  isLoading: boolean;
  isError: boolean;
};

export const PopularCourseCarousal: FC<productCarouselPropsType> = ({
  products,
  setSwiper,
  isLoading,
  isError,
}) => {
  if (!isLoading && products) {
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        className="swiper_container"
        modules={[Pagination, Keyboard, Autoplay, A11y, EffectFade]}
        a11y={{ enabled: true }}
        onInit={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide className="news" key={index}>
              {isLoading ? (
                <Skeleton width={`100%`} height={"250px"} />
              ) : (
                <Box padding={`0.5rem`}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    numReviews={product.numReviews}
                    isNew={product.isNew}
                    imageURL={product.imageURL}
                    rating={product.rating}
                  />
                </Box>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } else if (isError) {
    return <Text>An error occurred</Text>;
  } else if (isLoading) {
    return <Skeleton borderRadius={"8px"} width={`100%`} height={"250px"} />;
  }
  return <Text>News will be added soon</Text>;
};
