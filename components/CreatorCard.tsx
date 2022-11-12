import { Box, Image, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import {
  FaBan,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { ICreator } from "../interfaces";

export const CreatorCard: FC<ICreator> = ({
  firstName,
  lastName,
  handles,
  status,
  imageUrl,
}) => {
  return (
    <VStack
      bg={"white"}
      maxW="350px"
      rounded="lg"
      position="relative"
      borderRadius={"8px"}
      overflow={"hidden"}
      transition={'0.2s ease-in-out'}
      _hover={{
        shadow: "md",
      }}
    >
      <Link href={"#"} style={{ width: "100%" }}>
        <Box height={"300px"} width={"full"} position={"relative"}>
          <Image
            h={"100%"}
            borderRadius={"8px"}
            width={"100%"}
            objectFit={"cover"}
            src={imageUrl}
            alt={`Picture of ${firstName}`}
            transition={"0.3s ease-in-out"}
            roundedTop="lg"
          />
        </Box>
      </Link>

      <VStack width={"full"} px={"0.5rem"} p={2} mt={"0 !important"}>
        <Heading
          width={"full"}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          fontSize={"1.3rem"}
        >
          <Link href={"#"}>{firstName + " " + lastName}</Link>
        </Heading>
        <Text mt={"0 !important"} width={"full"}>
          {status}
        </Text>
        <HStack gap={"0.2rem"} w={"full"}>
          {handles.tiktok && (
            <Link href={`https://tiktok.com/@${handles.tiktok}`}>
              <FaTiktok size={20} />
            </Link>
          )}

          {handles.instagram && (
            <Link href={`https://instagram.com/${handles.instagram}`}>
              <FaInstagram size={20} />
            </Link>
          )}
          {handles.youtube && (
            <Link href={`https://youtube.com/${handles.youtube}`}>
              <FaYoutube size={20} />
            </Link>
          )}
          {handles.facebook && (
            <Link href={`https://facebook.com/${handles.facebook}`}>
              <FaFacebook size={20} />
            </Link>
          )}
          {handles.other && (
            <Link href={`${handles.other}`}>
              <FaBars size={20} />
            </Link>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};
