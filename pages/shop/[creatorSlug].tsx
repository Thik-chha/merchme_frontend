import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  VStack,
  SkeletonText,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { CoverPhoto, VerifiedCreator } from "../../components";
import { ProductCard } from "../../components/ProductCard";
import { CREATORS } from "../../data";
import { ICreator } from "../../interfaces";
import { MainLayout } from "../../layouts/Mainlayout";

const CreatorShop = () => {
  const router = useRouter();
  const { creatorSlug } = router.query;
  const creatorDetail = useMemo<ICreator | undefined>(
    () => CREATORS.find((creator) => creator.slug === creatorSlug),
    [creatorSlug]
  );
  return (
    <MainLayout>
      <Head>
        <title>
          {creatorDetail
            ? `${creatorDetail.firstName} ${creatorDetail.lastName} | Shop`
            : "Fanpasal"}
        </title>
      </Head>
      {creatorDetail ? (
        <CoverPhoto creatorDetail={creatorDetail} />
      ) : (
        <Skeleton width={"full"} height={"200px"}></Skeleton>
      )}
      <Box width={"full"} maxW={"7xl"} mx={"auto"} p={"1rem"}>
        <HStack width={"full"} alignItems={"flex-start"}>
          {creatorDetail ? (
            <VerifiedCreator creatorDetail={creatorDetail} />
          ) : (
            <HStack width={"full"}>
              <SkeletonCircle />
              <VStack>
                <SkeletonText h={"20px"} width={"300px"} noOfLines={2} />
              </VStack>
            </HStack>
          )}
          <Button colorScheme={"brand"} rounded={"full"}>
            Follow
          </Button>
        </HStack>
        <Tabs colorScheme={"brand"} mt={"1rem"}>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Shirts</Tab>
            <Tab>Stickers</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                gap={"1rem"}
                rowGap={"2rem"}
                gridTemplateColumns={"repeat(3, 1fr)"}
              >
                {creatorDetail ? (
                  creatorDetail.merchs.map((product) => (
                    <ProductCard
                      imageURL={product.imageURL}
                      name={product.name}
                      isNew={product.isNew}
                      key={product.id}
                      price={product.price}
                      rating={product.rating}
                      numReviews={product.numReviews}
                      creatorSlug={product.creatorSlug}
                    />
                  ))
                ) : (
                  <Skeleton />
                )}
              </SimpleGrid>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MainLayout>
  );
};
export default CreatorShop;
