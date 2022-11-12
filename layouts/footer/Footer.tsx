import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bgColor={"brand.100"} color={"bodyDark"} mt={"2.5rem"}>
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Creators</Link>
              <Tag size={"sm"} colorScheme={"brand"} ml={2}>
                New
              </Tag>
            </Stack>
            <Link href={"#"}>Guides</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Resources</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Connect with Us</ListHeader>
            <VStack
              pb={"1rem"}
              alignItems={"flex-start"}
              gap={"0.5rem"}
              sx={{
                a: {
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  textDecoration: "underline",
                },
              }}
            >
              <a href={"tel:9849663327"}>
                <GiRotaryPhone />
                +977-984-9663327
              </a>
              <a href={"tel:9849663327"}>
                <FaPhoneAlt />
                +977-984-9663327
              </a>
            </VStack>
            <HStack>
              <IconButton
                icon={<FaFacebook />}
                colorScheme={"facebook"}
                aria-label={"Facebook handle"}
              />
              <IconButton
                icon={<AiOutlineInstagram />}
                colorScheme={"teal"}
                aria-label={"Facebook handle"}
              />
              <IconButton
                icon={<FaLinkedin />}
                colorScheme={"linkedin"}
                aria-label={"Facebook handle"}
              />
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Box position={"relative"} height={"80px"} width={"120px"}>
            <Image
              fill={true}
              src={"/assets/logo.png"}
              objectFit={"contain"}
              alt={"logo"}
            />
          </Box>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Merch Me. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};
