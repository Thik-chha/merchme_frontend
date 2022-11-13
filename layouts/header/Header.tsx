import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useRef, useMemo, FC } from "react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { navItem } from "../../interfaces";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const DMobileNav = dynamic(() => import("./MobileNav"));
const DDesktopNav = dynamic(() => import("./DesktopNav"));
const DSearchModal = dynamic(() => import("./SearchModal"));

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const NAV_ITEMS: navItem[] = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "All Creators",
        href: "/creators",
      },
      {
        label: "Catalogue",
        href: "/catalogue",
      },
    ],
    []
  );

  const {
    isOpen: isSearchModalOpen,
    onOpen: onSearchModalOpen,
    onClose: onSearchModalClose,
  } = useDisclosure();
  return (
    <Box width={`full`}>
      <Flex
        minH={"60px"}
        color={"brand.600"}
        py={["1rem"]}
        zIndex={`5`}
        align={"center"}
        justifyContent={"space-between"}
        maxWidth={`1440px`}
        margin="0 auto"
      >
        <Flex justifyContent={"space-between"} width={"full"}>
          <Box position={"relative"} h={"60px"} w={"120px"}>
            <Link href="/">
              <Image
                fill={true}
                objectFit={"contain"}
                src={"/assets/logo.png"}
                alt={"logo"}
              />
            </Link>
          </Box>
          <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
            <DDesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>
          <Flex
            gap={["0.5rem", "0.5rem", "1rem"]}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <IconButton
              size={["sm", "md"]}
              icon={<SearchIcon />}
              aria-label={"Search Button"}
              mr={{ base: "auto", md: "0" }}
              onClick={onSearchModalOpen}
              variant={"unstyled"}
            />
            <Link href={"/register"}>
              <chakra.span backgroundColor={'brand.500'} p={'0.5rem 1rem'} rounded={'full'} color={'white'}>Sign up</chakra.span>
            </Link>
            <IconButton
              display={{ base: "flex", md: "none" }}
              backgroundColor={`transparent`}
              colorScheme={`none`}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement={"right"} onClose={onToggle}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"brand.50"}>
          <DrawerCloseButton zIndex={10} />
          <DrawerBody>
            <DMobileNav NAV_ITEMS={NAV_ITEMS} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {isSearchModalOpen && (
        <DSearchModal isOpen={isSearchModalOpen} onClose={onSearchModalClose} />
      )}
    </Box>
  );
};

export const Header: FC = () => {
  // showing header on scroll up and hiding on scroll down
  const headerRef = useRef(null);

  return (
    <chakra.header
      ref={headerRef}
      width={`full`}
      position={"relative"}
      zIndex={5}
      transform={"auto"}
      transition={"all .25s ease-in-out"}
      mx={"auto"}
      px={["0.5rem", "1.5rem"]}
    >
      <VStack
        zIndex={5}
        width={`100%`}
        maxWidth={"7xl"}
        position={"sticky"}
        top={"0"}
        mx={"auto"}
      >
        <NavBar />
      </VStack>
    </chakra.header>
  );
};
