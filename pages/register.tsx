import {
  Flex,
  Box,
  FormControl,
  chakra,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
import Link from "next/link";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { MainLayout } from '../layouts/Mainlayout';
import Head from 'next/head';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout>
      <Head>
        <title>Register | Fanpasal</title>
      </Head>
      <Flex
        align={'center'}
        justify={'center'}
        p={'1rem'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Register your account
            </Heading>
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
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder={'Nishant'} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder={'Shrestha'} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="username" placeholder={'srestnishant011'} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder={'nishant@kchaa.com'} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder={'********'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl  itemProp={'checked'} id="checkbox" display={'flex'} alignItems={'center'} gap={'0.4rem'}>
                <Checkbox/> 
                <FormLabel>
                Sign up as a creator.
                </FormLabel>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'brand.400'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href={'/login'}>
                    <chakra.span
                      color={'brand.400'}
                    >
                      Login
                    </chakra.span>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </MainLayout>
  );
}
