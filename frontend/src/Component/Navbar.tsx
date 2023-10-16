'use client'

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { LiaCaretSquareDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import logobax from '../assets/Image/BaxDigital.png'


export function NavLink() {
    return (
      <Center textAlign={'center'}>
        <Flex mt={1} flexDirection={{ base: 'column', lg: 'row' }}>
          <Box
            mr={3}
            px={2}
            py={1}
            _hover={{ borderRadius: '13px',  borderRight: '1px solid black', borderLeft: '1px solid black', boxShadow: '1px 1px 1px 1px' }}
          >
            <Link to={'/'}>
              <Text>Home</Text>
            </Link>
          </Box>
          <Box
            mr={3}
            px={2}
            py={1}
            _hover={{ borderRadius: '13px',  borderRight: '1px solid black', borderLeft: '1px solid black', boxShadow: '1px 1px 1px 1px' }}
          >
            <Link to={'/WebServices'}>
              <Text>Jasa Web</Text>
            </Link>
          </Box>
          <Box
            mr={3}
            px={2}
            py={1}
            _hover={{ borderRadius: '13px',  borderRight: '1px solid black', borderLeft: '1px solid black', boxShadow: '1px 1px 1px 1px' }}
          >
            <Link to={'/KelasDigital'}>
              <Text>Kelas Digital</Text>
            </Link>
          </Box>
          <Box
            mr={3}
            px={2}
            py={1}
            _hover={{ borderRadius: '13px',  borderRight: '1px solid black', borderLeft: '1px solid black', boxShadow: '1px 1px 1px 1px' }}
          >
            <Link to={'/AboutUs'}>
              <Text>About Us</Text>
            </Link>
          </Box>
          <Box
            mr={3}
            px={2}
            py={1}
            _hover={{ borderRadius: '13px',  borderRight: '1px solid black', borderLeft: '1px solid black', boxShadow: '1px 1px 1px 1px' }}
          >
            <Link to={'/ContactUs'}>
              <Text>Contact Us</Text>
            </Link>
          </Box>
        </Flex>
      </Center>
    );
  }  


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg="gray.400" px={4} w={'100%'} boxShadow={'2px 2px 5px 4px gray'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mt={1}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={13} alignItems={'center'}>
            <Center>
                <Box ml={3} px={2} py={1} mr={5}>
                <Image src={logobax} bgColor={'white'} maxWidth={{
                  base: '110px',
                  lg: '150px'
                }} borderRadius={{
                  base: '10px',
                  lg: '12px'
                }} />
                </Box>
            </Center>
            <HStack as={'nav'} spacing={{
              base: '2',
              lg: '4'
            }} display={{ base: 'none', lg: 'flex' }}>
              <NavLink />
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                _hover={{
                  border: 'gray',
                  borderRadius: '10px',
                  BoxShadow: '1px 1px 5px 1px gray'
                }}
                >
                <Button
                
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              _hover={{
                border: 'gray',
                borderRadius: '10px',
                BoxShadow: '1px 1px 5px 1px gray'
              }}
              leftIcon={<LiaCaretSquareDownSolid />}
              
              >
              AKSES
            </Button>
              </MenuButton>
              <MenuList border={'1px solid gray.500'} boxShadow={'1px 1px 3px 1px gray'}>
                <MenuItem
                _hover={{
                    color: 'white',
                    bg: 'gray'
                }}>Register</MenuItem>
                <MenuItem
                _hover={{
                    color: 'white',
                    bg: 'gray'
                }}>Login</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NavLink />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}