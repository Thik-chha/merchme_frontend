import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper";
import Image from "next/image";

const SLIDER_DATA = [
  {
    imageUrl: "/assets/luga.jpg",
  },
  {
    imageUrl: "/assets/luga.jpg",
  },
  {
    imageUrl: "/assets/luga.jpg",
  },
  {
    imageUrl: "/assets/luga.jpg",
  },
  {
    imageUrl: "/assets/luga.jpg",
  },
];

const Carousal = () => {
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      spaceBetween={30}
      autoplay={true}
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {SLIDER_DATA.map((data, index) => (
        <SwiperSlide key={index}>
          <Box
            overflow={"hidden"}
            sx={{
              img: {
                borderRadius: "8px",
              },
            }}
          >
            <Image
              src={data.imageUrl}
              fill={true}
              alt={"dummy"}
              objectFit={"cover"}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const HeroSection = () => {
  return (
    <Box maxW={"7xl"} p={4} mx={'auto'}>
      <Flex
        align={"center"}
        flexDir={{ base: "column", sm: "column", md: "row" }}
        width={"full"}
        gap={"2rem"}
      >
        <Stack width={"full"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight={"110%"}
          >
            Merchandising has never been{" "}
            <Text as={"span"} color={"brand.400"}>
              so easy
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack pt={'0.5rem'} spacing={6} direction={"row"}>
            <Button rounded={"full"} px={6} colorScheme={"brand"}>
              See creators
            </Button>
            <Button rounded={"full"} px={6}>
              Browse catelogue
            </Button>
          </Stack>
        </Stack>
        <Flex
          w={"full"}
          overflow={"hidden"}
          position={"relative"}
          height={"300px"}
        >
          <Carousal />
        </Flex>
      </Flex>
    </Box>
  );
};
