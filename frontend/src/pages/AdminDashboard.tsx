import { Badge, Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { FaChartBar, FaTrophy } from "react-icons/fa";
import Footer from "../components/Footer";
import SidebarContent from "../assets/SidebarAdmin";

const AdminDashboard = () => {
  const downlineMembers = [
    { id: 1, name: "Sarah Smith", level: 1, totalSales: "$5000" },
    { id: 2, name: "Michael Johnson", level: 2, totalSales: "$3000" },
    // Add more downline members as needed
  ];

  const topPerformers = [
    { id: 1, name: "Alice Adams", totalSales: "$8000" },
    { id: 2, name: "John Brown", totalSales: "$7000" },
    // Add more top performers as needed
  ];

  return (
    <Flex>
      <Box w={"14%"}>
        <SidebarContent />
      </Box>
      <Box w="80%" mt={"20px"} p={"3"}>
        <Heading mb="4">Welcome to Admin Dashboard</Heading>
        <Box mb="4">
          <Heading fontSize="lg" mb="2">
            Top Performers:
          </Heading>
          <List spacing={3}>
            {topPerformers.map((performer) => (
              <ListItem key={performer.id} p={2} borderRadius={8} bg="white" boxShadow="md">
                <Flex justify="space-between" align="center">
                  <Text>{performer.name}</Text>
                  <Text>Total Sales: {performer.totalSales}</Text>
                  <Badge colorScheme="green" fontSize="sm">
                    <FaTrophy style={{ marginRight: "0.2em" }} /> Top Performer
                  </Badge>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Heading fontSize="lg" mb="2">
            Your Downline Members:
          </Heading>
          <List spacing={3}>
            {downlineMembers.map((member) => (
              <ListItem key={member.id} p={2} borderRadius={8} bg="white" boxShadow="md">
                <Flex justify="space-between" align="center">
                  <Text>{member.name}</Text>
                  <Text>Level: {member.level}</Text>
                  <Text>Total Sales: {member.totalSales}</Text>
                  {member.level === 1 && (
                    <Badge colorScheme="green" fontSize="sm">
                      <FaChartBar style={{ marginRight: "0.2em" }} /> Level 1
                    </Badge>
                  )}
                  {member.level === 2 && (
                    <Badge colorScheme="blue" fontSize="sm">
                      <FaChartBar style={{ marginRight: "0.2em" }} /> Level 2
                    </Badge>
                  )}
                  {member.level > 2 && (
                    <Badge colorScheme="gray" fontSize="sm">
                      <FaChartBar style={{ marginRight: "0.2em" }} /> Level {member.level}
                    </Badge>
                  )}
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box mt="100px">
          <Footer />
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
