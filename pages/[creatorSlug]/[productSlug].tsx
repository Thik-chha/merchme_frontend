import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { MdLocalShipping } from "react-icons/md";
import { products } from "../../data";
import { IProduct } from "../../interfaces";
import { MainLayout } from "../../layouts/Mainlayout";

export default function ProductDetail() {
  const router = useRouter();
  const { creatorSlug, productSlug } = router.query;
  const productDetail = useMemo<IProduct | undefined>(
    () =>
      products.find(
        (product) =>
          product.creatorSlug === creatorSlug && product.slug === productSlug
      ),
    [creatorSlug, productSlug]
  );
  return (
    <MainLayout>
      <title>{productDetail ? `${productDetail.name} | ${productDetail.creator?.firstName}` : "Fanpasal"}</title>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 9, md: 12 }}
        >
          <Flex
            position={"relative"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            borderRadius={"8px"}
          >
            {productDetail ? (
              <Image
                style={{borderRadius: '8px'}}
                src={productDetail.imageURL}
                alt={productDetail.name}
                objectFit={"cover"}
                fill={true}
              />
            ) : (
              <Skeleton borderRadius={"8px"} w={"100%"} height={"100%"} />
            )}
          </Flex>
          {productDetail ? (
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {productDetail.name}
                </Heading>
                <Text color={"gray.900"} fontWeight={300} fontSize={"2xl"}>
                  Rs. {productDetail.price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.200"} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text color={"gray.500"} fontSize={"2xl"} fontWeight={"300"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic,
                    ipsum maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"brand.500"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Available Size:
                      </Text>{" "}
                      M/L/XL
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Color:
                      </Text>{" "}
                      Black
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Type:
                      </Text>{" "}
                      Cotton Shirt
                    </ListItem>
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={"full"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                colorScheme={"brand"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          ) : (
            <VStack width={"full"} height={"full"}>
              <Skeleton width={"100%"} height={"2rem"} />
                <br/>
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
            </VStack>
          )}
        </SimpleGrid>
      </Container>
    </MainLayout>
  );
}
