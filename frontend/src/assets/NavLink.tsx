import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavLink() {
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