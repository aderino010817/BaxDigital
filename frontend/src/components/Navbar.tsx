"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure } from "@chakra-ui/react";
import { LiaCaretSquareDownSolid } from "react-icons/lia";
import logobax from "../assets/Image/BaxDigital.png";
import NavLink from "../assets/NavLink";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#8487F6" px={4} w={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"lg"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} variant={"ghost"} color={"white"} colorScheme="#8487F6" aria-label={"Open Menu"} display={{ lg: "none" }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={13} alignItems={"center"}>
            <Center>
              <Box ml={3} px={2} py={1} mr={5}>
                <Image
                  src={logobax}
                  bgColor={"white"}
                  maxWidth={{
                    base: "110px",
                    lg: "100px",
                  }}
                  borderRadius={{
                    base: "10px",
                    lg: "12px",
                  }}
                />
              </Box>
            </Center>
          </HStack>
          <HStack
            as={"nav"}
            spacing={{
              base: "2",
              lg: "4",
            }}
            display={{ base: "none", lg: "flex" }}
          >
            <NavLink />
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                _hover={{
                  border: "#8487F6",
                  borderRadius: "10px",
                  BoxShadow: "1px 1px 5px 1px #8487F6",
                }}
              >
                <Button
                  variant={"outline"}
                  size={"sm"}
                  _hover={{
                    border: "#8487F6",
                    borderRadius: "10px",
                    BoxShadow: "1px 1px 5px 1px #8487F6",
                  }}
                  leftIcon={<LiaCaretSquareDownSolid />}
                  color={"white"}
                  borderWidth={2}
                >
                  AKSES
                </Button>
              </MenuButton>
              <MenuList border={"1px solid gray.500"} boxShadow={"1px 1px 3px 1px gray"}>
                <Link to={"/Member"}>
                  <MenuItem
                    _hover={{
                      color: "white",
                      bg: "gray",
                    }}
                  >
                    Register
                  </MenuItem>
                </Link>
                <Link to={"/Admin"}>
                  <MenuItem
                    _hover={{
                      color: "white",
                      bg: "gray",
                    }}
                  >
                    Login
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
