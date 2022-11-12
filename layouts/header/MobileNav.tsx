import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Collapse,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { navItem } from "../../interfaces";
import { FC } from "react";
import Link from "next/link";

const MobileNav: FC<{ NAV_ITEMS: navItem[] }> = ({ NAV_ITEMS }) => {
  return (
    <Stack display={{ md: "none" }} mt={"40px"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem: FC<navItem> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <chakra.p
          fontWeight={600}
          color={useColorModeValue("black", "white.200")}
        >
          {label}
        </chakra.p>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child: navItem) => (
              <Box color={`black`} width={`100%`} key={child.label} py={2}>
                <Link href={child.href || "#"}>{child.label}</Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNav;
