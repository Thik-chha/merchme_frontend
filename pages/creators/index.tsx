import { Box, Heading, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import Head from "next/head";
import { CreatorCard } from "../../components/CreatorCard";
import { ICreator } from "../../interfaces";
import { MainLayout } from "../../layouts/Mainlayout";

const CREATORS: ICreator[] = [
  {
    id: 1,
    firstName: "Sajjan Raj",
    lastName: "Vaidya",
    status: "Singer, Musician ",
    imageUrl: "/assets/srv.webp",
    handles: {
      instagram: "sajjanrajvaidya",
      facebook: "sajjanrajvaidya",
      other: 'nice'
    },
  },
  {
    id: 2,
    firstName: "Yabesh",
    lastName: "Thapa",
    status: "Singer, Musician ",
    imageUrl: "/assets/yabesh.jpeg",
    handles: {
      instagram: "yabush69",
      youtube: "yabush69",
    },
  },
  {
    id: 3,
    firstName: "Sajjan Raj",
    lastName: "Vaidya",
    status: "Singer, Musician ",
    imageUrl: "/assets/srv.webp",
    handles: {
      instagram: "sajjanrajvaidya",
    },
  },
  {
    id: 4,
    firstName: "Yabesh",
    lastName: "Thapa",
    status: "Singer, Musician ",
    imageUrl: "/assets/yabesh.jpeg",
    handles: {
      instagram: "yabush69",
    },
  },
];

const CreatorsListPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Creators | MerchBro</title>
      </Head>
      <Box maxW={"7xl"} mx={"auto"}>
        <Tag rounded={"full"} colorScheme={"brand"}>
          Amazing Creators
        </Tag>
        <Heading
          mt={"1rem"}
          textTransform={"uppercase"}
          as={"h1"}
          fontWeight={"thin"}
        >
          Meet our{" "}
          <Text color={"brand.400"} display={"inline"} fontWeight={"semibold"}>
            amazing
          </Text>
          <br />{" "}
          <Text color={"brand.400"} display={"inline"} fontWeight={"semibold"}>
            creative{" "}
          </Text>{" "}
          partners
        </Heading>
        <SimpleGrid rowGap={'2rem'} mt={"1rem"} gap={'1rem'} gridTemplateColumns={"repeat(3, 1fr)"}>
          {CREATORS.map((creator) => (
            <CreatorCard
              key={creator.id}
              firstName={creator.firstName}
              lastName={creator.lastName}
              handles={creator.handles}
              status={creator.status}
              imageUrl={creator.imageUrl}
            />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
export default CreatorsListPage;
