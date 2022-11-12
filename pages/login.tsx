import {
  Flex,
  chakra,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../layouts/Mainlayout";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <Head>
        <title>Login | Fanpasal</title>
      </Head>
      <Flex align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          width={"100%"}
          maxW={"xl"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to continue</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Show{" "}
              <chakra.span display={"inline"} color={"brand.400"}>
                love
              </chakra.span>{" "}
              to your favorite{" "}
              <chakra.span display={"inline"} color={"brand.400"}>
                {" "}
                creator
              </chakra.span>
              .
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={"white"}
            boxShadow={"lg"}
            p={8}
            width={"100%"}
          >
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder={'srestnishant'} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder={'******'} />
              </FormControl>
              <Stack spacing={10}>
                <Button color={"white"} onClick={() => router.push('/admin/dixita-karki/')} colorScheme={"brand"}>
                  Sign in
                </Button>
              </Stack>
              <Text>Don&apos;t have an account?{" "}
                <Link href={'/register'}>
                  <chakra.span display={'inline'} color={"brand.400"} textDecoration={'underline'}>Register</chakra.span>
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </MainLayout>
  );
};
export default LoginPage;
