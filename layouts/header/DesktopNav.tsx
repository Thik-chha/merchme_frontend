import { FC } from "react";
import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Grid,
  chakra,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";
import { navItem } from "../../interfaces";
import Link from "next/link";

const DDesktopSubNav = dynamic(() => import("./DesktopSubNav"));

const DesktopNav: FC<{ NAV_ITEMS: navItem[] }> = ({ NAV_ITEMS }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href || "#"}>
                <Box
                  p={2}
                  fontSize={"md"}
                  fontWeight={"normal"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <chakra.span>{navItem.label}</chakra.span>
                  <chakra.span ml={"2px"} color={"white"} fontWeight={"bold"}>
                    {navItem.children && (
                      <ChevronDownIcon
                        fontWeight={"bold"}
                        fontSize={"1.5rem"}
                      />
                    )}
                  </chakra.span>
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"brand.400"}
                color={"white"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Grid templateColumns={`repeat(2, 1fr)`} gridGap={`0.5rem`}>
                  {navItem.children.map((child) => (
                    <DDesktopSubNav key={child.label} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
