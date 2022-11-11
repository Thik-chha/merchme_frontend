import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Link, Stack, chakra } from "@chakra-ui/react";
import { navItem } from "../../interfaces";

const DesktopSubNav: React.FC<navItem> = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ backgroundColor: "white" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <chakra.span
            transition={"all .3s ease"}
            _groupHover={{ color: "brand.700" }}
            fontWeight={500}
          >
            {label}
          </chakra.span>
          <chakra.span fontSize={"sm"}>{subLabel}</chakra.span>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"brand.700"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
export default DesktopSubNav;
