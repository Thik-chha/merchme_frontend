import { Box, Heading, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import Head from "next/head";
import { CreatorCard } from "../../components/CreatorCard";
import { CREATORS } from "../../data";
import { MainLayout } from "../../layouts/Mainlayout";

const CreatorsListPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Creators | Fanpasal</title>
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
              merchs={creator.merchs}
              slug={creator.slug}
            />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
export default CreatorsListPage;
