import { Box, Flex, Heading, List, ListItem, Text, Badge } from "@chakra-ui/react";
import Footer from "../components/Footer";
import MemberSidebar from "../components/SidebarMember";
import { FaTrophy, FaStar, FaUsers } from "react-icons/fa";

const MemberDashboard = () => {
  const downlineMembers = [
    { id: 1, name: "Sarah Smith", level: 1, totalSales: "$5000" },
    { id: 2, name: "Michael Johnson", level: 2, totalSales: "$3000" },
    // Add more downline members as needed
  ];

  return (
    <Flex>
      <Box w={"14%"}>
        <MemberSidebar />
      </Box>
      <Box w="80%" mt={"20px"} p={"3"}>
        <Heading mb="4">Welcome to Your Member Dashboard</Heading>
        <Text fontSize="lg" mb="4">
          Your Downline Members:
        </Text>
        <List spacing={3}>
          {downlineMembers.map((member) => (
            <ListItem key={member.id} p={3} borderRadius={8} bg="white" boxShadow="md">
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="lg">{member.name}</Text>
                  <Text>Level: {member.level}</Text>
                  <Text>Total Sales: {member.totalSales}</Text>
                </Box>
                {member.level === 1 && (
                  <Badge colorScheme="green" fontSize="sm" py={1} px={2} borderRadius="md" marginRight="2">
                    <FaTrophy style={{ marginRight: "0.2em" }} /> Top Performer
                  </Badge>
                )}
                {member.level === 2 && (
                  <Badge colorScheme="blue" fontSize="sm" py={1} px={2} borderRadius="md" marginRight="2">
                    <FaStar style={{ marginRight: "0.2em" }} /> Silver Member
                  </Badge>
                )}
                {member.level > 2 && (
                  <Badge colorScheme="gray" fontSize="sm" py={1} px={2} borderRadius="md" marginRight="2">
                    <FaUsers style={{ marginRight: "0.2em" }} /> Member
                  </Badge>
                )}
              </Flex>
            </ListItem>
          ))}
        </List>
        <Box mt="100px">
          <Footer />
        </Box>
      </Box>
    </Flex>
  );
};

export default MemberDashboard;
