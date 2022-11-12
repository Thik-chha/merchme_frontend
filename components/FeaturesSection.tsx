import { ReactElement } from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcInTransit } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"white"}
      boxShadow={"xs"}
      p={"1rem"}
      borderRadius={"6px"}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const FeaturesSection = () => {
  return (
    <Box p={4} maxW={"7xl"} mx={"auto"} my={"2rem"}>
      <chakra.h3
        fontWeight={"bold"}
        fontSize={20}
        color={"purple.400"}
        textAlign={"center"}
      >
        Receive your fans love
      </chakra.h3>
      <chakra.h1
        textAlign={"center"}
        fontWeight={"bold"}
        color={"gray.700"}
        pb={"0.5rem"}
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
      >
        In a tangible way!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={"1rem"}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"24hr Customer Support"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Your design"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FaDollarSign} color={"brand.500"} w={10} h={10} />}
          title={"Your profit"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
};
