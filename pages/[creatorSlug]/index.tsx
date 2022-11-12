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
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDeferredValue, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
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
  const allProducts = useMemo(() => {
    if (creatorDetail) {
      return creatorDetail.merchs;
    }
    return [];
  }, [creatorDetail]);

  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredProducts = useMemo(() => {
    if (deferredQuery) {
      return allProducts.filter((product) =>
        product.name.toLowerCase().includes(deferredQuery.toLowerCase())
      );
    }
    return allProducts;
  }, [allProducts, deferredQuery]);

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
        <Box width={"full"} my={"1rem"}>
          <InputGroup maxW={"2xl"} ml={"auto"}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type={"search"}
              placeholder={"Type to search..."}
              variant={"flushed"}
            />
            <InputRightElement>
              <CiSearch />
            </InputRightElement>
          </InputGroup>
        </Box>
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
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
              >
                {creatorDetail ? (
                  allProducts.map((product) => (
                    <ProductCard
                      imageURL={product.imageURL}
                      name={product.name}
                      isNew={product.isNew}
                      key={product.id}
                      price={product.price}
                      rating={product.rating}
                      numReviews={product.numReviews}
                      creatorSlug={product.creatorSlug}
                      slug={product.slug}
                      type={product.type}
                    />
                  ))
                ) : (
                  <Skeleton />
                )}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                gap={"1rem"}
                rowGap={"2rem"}
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    imageURL={product.imageURL}
                    name={product.name}
                    isNew={product.isNew}
                    key={product.id}
                    price={product.price}
                    rating={product.rating}
                    numReviews={product.numReviews}
                    creatorSlug={product.creatorSlug}
                    type={product.type}
                    slug={product.slug}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <Text>No items in this category...</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MainLayout>
  );
};
export default CreatorShop;
