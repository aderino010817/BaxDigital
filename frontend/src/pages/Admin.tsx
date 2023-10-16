import { Box, Flex, Text, Heading, List, ListItem } from "@chakra-ui/react";
import SidebarAdmin from "../assets/SidebarAdmin";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function AdminDashboard() {
  // Dummy data for member list (replace this with actual data)
  const memberList = [
    { id: 1, name: "John Doe", status: "Active", joinedDate: "2023-01-15" },
    { id: 2, name: "Alice Johnson", status: "Active", joinedDate: "2023-03-20" },
    // Add more members as needed
  ];

  // Function to sort members by join date (newest to oldest)
  const sortedMembers = memberList.sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Flex>
        <Box w="20%">
          <SidebarAdmin />
        </Box>
        <Box w="80%" mt={"20px"} p={'3'}>
          <Heading mb="4">Admin Dashboard</Heading>
          <Text fontSize="lg" mb="4">List Member (Newest to Oldest):</Text> 
          <List spacing={3}>
            {sortedMembers.map((member) => (
              <ListItem key={member.id}>
                <Flex justify="space-between" align="center">
                  <Text>{member.name}</Text>
                  <Text>Status: {member.status}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
      <Box mt="100px">
        <Footer />
      </Box>
    </>
  );
}
