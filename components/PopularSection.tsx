import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ISwiper from "swiper";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IProduct } from "../interfaces";
import { PopularMerchCarousal } from "./PopularMerchCarousal";

const products: IProduct[] = [
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: "/assets/luga.jpg",
    name: "Wayfarer Classic",
    price: 450,
    rating: 4.2,
    numReviews: 34,
  },
];

export const PopularSection = () => {
  const [swiper, setSwiper] = useState<ISwiper>();
  return (
    <Box
      width={"full"}
      height={"auto"}
      py={["1.5rem", "1.7rem", "2rem", "2.5rem"]}
      px={["1rem", "1.5rem"]}
      bgColor={"white"}
    >
      <VStack width={"full"} maxW={"7xl"} mx={"auto"}>
        <HStack width={"full"} justifyContent={"space-between"}>
          <Heading>Popular Merchs</Heading>
          <Button colorScheme={"brand"} href={"/catelogue"} rounded={'full'} as={Link}>
            Browse All
          </Button>
        </HStack>
        <HStack flexWrap={`nowrap`} justifyContent={"flex-end"} width={"full"}>
          <IconButton
            aria-label={"Previous Slide"}
            borderRadius={`15px`}
            overflow={`hidden`}
            padding={`0.5rem`}
            height={`30px`}
            width={`50px`}
            variant={"outline"}
            colorScheme={"brand"}
            onClick={() => swiper?.slidePrev(1000)}
            _active={{
              backgroundColor: "brand.600",
              color: "white",
            }}
            icon={<ArrowBackIcon />}
          />

          <IconButton
            aria-label={"Next Slide"}
            borderRadius={`15px`}
            overflow={`hidden`}
            padding={`0.5rem`}
            height={`30px`}
            width={`50px`}
            variant={"outline"}
            colorScheme={"brand"}
            onClick={() => swiper?.slideNext(1000)}
            _active={{
              backgroundColor: "brand.600",
              color: "white",
            }}
            icon={<ArrowForwardIcon />}
          ></IconButton>
        </HStack>
        <PopularMerchCarousal
          products={products}
          isLoading={false}
          isError={false}
          setSwiper={setSwiper}
        />
      </VStack>
    </Box>
  );
};
