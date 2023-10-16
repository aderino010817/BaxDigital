import { Box, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaNewspaper, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <Box p={{
      base: '1',
      md: '2',
      lg: '3'
    }} bg="gray.200" h="100vh"
    w={{
      base: '5em',
      md: '10em',
      lg: '10em'
    }} border={'1px solid gray'} boxShadow={'2px 2px 5px 2px gray'}>
          <Center textAlign={'center'}>
      <VStack spacing="3em" align="start">
        <Link to="/admin/members">
          <Box display="flex" alignItems="center" mt={'5'}>
            <Icon as={FaUser}/>
            <Text display={{
              base: 'none',
              md: 'flex',
              lg: 'flex'
            }}>Members</Text>
          </Box>
        </Link>
        <Link to="/admin/messages">
          <Box display="flex" alignItems="center">
            <Icon as={FaEnvelope} />
            <Text display={{
              base: 'none',
              md: 'flex',
              lg: 'flex'
            }}>Messages</Text>
          </Box>
        </Link>
        <Link to="/admin/posts">
          <Box display="flex" alignItems="center">
            <Icon as={FaNewspaper} />
            <Text display={{
              base: 'none',
              md: 'flex',
              lg: 'flex'
            }}>Posts</Text>
          </Box>
        </Link>
      </VStack>
      </Center>
    </Box>
  );
}
