import {
  Table,
  Heading,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
} from "@chakra-ui/react";
import Head from "next/head";
import { AdminLayout } from "../../../layouts/AdminLayout";

type orderType = {
  name: string;
  status: "Pending" | "Ongoing" | "Completed" | "Cancelled";
  price: number;
};

const orders: orderType[] = [
  {
    name: "A shirt",
    status: "Pending",
    price: 2000,
  },
  {
    name: "A shirt",
    status: "Ongoing",
    price: 2000,
  },
  {
    name: "A shirt",
    status: "Completed",
    price: 2000,
  },
];
const OrdersPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Orders | Fanpasal</title>
      </Head>
      <Heading fontSize={"2rem"}>All Orders</Heading>
      <TableContainer
        borderRadius={"8px"}
        mt={"1rem"}
        backgroundColor={"white"}
      >
        <Table variant="simple">
          <TableCaption>Recent orders</TableCaption>
          <Thead>
            <Tr>
              <Th>Merch Name</Th>
              <Th>Order Status</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order, index) => (
              <Tr key={index}>
                <Td>{order.name}</Td>
                <Td>
                  <Tag
                    colorScheme={
                      order.status === "Pending"
                        ? "orange"
                        : order.status === "Ongoing"
                        ? "blue"
                        : order.status === "Completed"
                        ? "green"
                        : "red"
                    }
                  >
                    {order.status}
                  </Tag>
                </Td>
                <Td isNumeric>Rs. {order.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};
export default OrdersPage;
