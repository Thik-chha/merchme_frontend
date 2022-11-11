import { Box, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex width={`100%`} flexWrap={`wrap`} flexDir={`row`}>
        <Box width={"full"}>{children}</Box>
      </Flex>
      <Footer />
    </>
  );
};
