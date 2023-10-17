/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";
import {
  FiAward,
  FiBell,
  FiBookOpen,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiLifeBuoy,
  FiLogOut,
  FiSettings,
  FiUsers
} from "react-icons/fi";
import LogoBax from "../assets/Image/LogoBax.png";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome },
  { name: "My Network", icon: FiUsers },
  { name: "Sales and Commissions", icon: FiDollarSign },
  { name: "Marketing Materials", icon: FiFileText },
  { name: "Courses", icon: FiBookOpen },
  { name: "Profile Setting", icon: FiSettings },
  { name: "Support and Help", icon: FiLifeBuoy },
  { name: "News", icon: FiBell },
  { name: "Achievements", icon: FiAward },
  { name: "Logout", icon: FiLogOut }
];

interface SidebarProps {
  children?: React.ReactNode;
}

const MemberSidebar = ({ children }: SidebarProps) => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "100%", md: 60 }}
      pos="fixed"
      h="full"
      borderRightWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      flexDirection="column"
      boxShadow={'2px 2px 5px 2px gray'}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="center"
        mt="5"
        mb={"5"}
        boxShadow={'1px 1px 2px 1px gray'}
        _hover={{ boxShadow: "2px 2px 6px 2px gray" }}
        borderRadius={'5px'}
      >
        <Box>
          <Image
            src={LogoBax}
            maxW={"40px"}
            mr={{
              base: "1em",
              md: "1em",
              lg: "1em",
            }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
          <Text>BAX DIGITAL</Text>
          <Text>INDONESIA</Text>
        </Box>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Flex>
  );
};

const NavItem = ({ icon, children }: { icon: IconType; children: ReactText }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

export default MemberSidebar;
