import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import { SalesBarchart, SalesChart } from "../../../components/admin";
import { AdminLayout } from "../../../layouts/AdminLayout";
const Dashboard = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Dashboard | Fanpasal</title>
      </Head>

      <Heading fontWeight={"normal"} fontSize={"2.5rem"} mb={"1rem"}>
       Hello Dixita,
      </Heading>
      <StatGroup display={'flex'} gap={'1rem'} mb={'1rem'}>
        <Stat bgColor={'white'} padding={'1rem'} borderRadius={'8px'}>
          <StatLabel>Earnings</StatLabel>
          <StatNumber>Rs. 345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat bgColor={'white'} padding={'1rem'} borderRadius={'8px'}>
          <StatLabel>Sales this week</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <Heading fontWeight={"light"} fontSize={"1.5rem"} mb={"1rem"}>
        Sales on Sticker vs Shirts
      </Heading>
      <Flex gap={2} flexDir={["column", "column", "column", "column", "row"]}>
        <Box
          borderRadius={"8px"}
          width={"100%"}
          height={"400px"}
          backgroundColor={"white"}
          p={4}
        >
          <SalesChart />
        </Box>
        <Box
          borderRadius={"8px"}
          width={"100%"}
          height={"400px"}
          backgroundColor={"white"}
          p={4}
        >
          <SalesBarchart />
        </Box>
      </Flex>
    </AdminLayout>
  );
};
export default Dashboard;
