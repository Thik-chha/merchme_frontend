import {HStack, Box, VStack, chakra, Text} from "@chakra-ui/react";
import Image from 'next/image';
import {MdVerified} from "react-icons/md";
import { FC } from "react";
import { ICreator } from "../interfaces";
export const VerifiedCreator: FC<{ creatorDetail: ICreator }> = ({
  creatorDetail,
}) => {
  return (
    <HStack width={"full"}>
      <Box
        rounded={"full"}
        h={"60px"}
        w={"60px"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Image
          fill={true}
          objectFit={"cover"}
          src={creatorDetail.imageUrl}
          alt={creatorDetail.firstName}
        />
      </Box>
      <VStack justifyContent={"space-between"} alignItems={"flex-start"}>
        <Text
          mt={0}
          fontWeight={"medium"}
          fontSize={"1.2rem"}
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
        >
          {creatorDetail.firstName + " " + creatorDetail.lastName}{" "}
          <chakra.span color={"brand.600"}>
            <MdVerified />
          </chakra.span>
        </Text>
        <Text mt={"0 !important"} color={"gray.600"}>
          {creatorDetail.status}
        </Text>
      </VStack>
    </HStack>
  );
};
