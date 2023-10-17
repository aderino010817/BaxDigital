import React from "react";
import { Box, Heading, List, ListItem, Text, Badge, Flex } from "@chakra-ui/react";

interface JasaWebsite {
  Id: number;
  MemberId: number;
  JenisWeb: string;
  MemberNewId: number;
}

interface KelasDigital {
  Id: number;
  MemberId: number;
  JenisKelasDigital: string;
  MemberNewId: number;
}

interface TotalSales {
  Id: number;
  MemberId: number;
  JasaWebsite: JasaWebsite[];
  KelasDigital: KelasDigital[];
}

interface MyNetworkMember {
  id: number;
  Email: string;
  Name: string;
  NoTelp: string;
  Level: number;
  TotalSales: TotalSales[];
}

interface MyNetworkProps {
  downlineMembers: MyNetworkMember[];
}

const MyNetwork: React.FC<MyNetworkProps> = ({ downlineMembers }) => {
  return (
    <Box mb="4">
      <Heading fontSize="lg" mb="2">My Network:</Heading>
      <List spacing={3}>
        {downlineMembers.map((member) => (
          <ListItem key={member.id} p={2} borderRadius={8} bg="white" boxShadow="md">
            <Flex justify="space-between" align="center">
              <Text>{member.Name}</Text>
              <Text>Email: {member.Email}</Text>
              <Text>No. Telp: {member.NoTelp}</Text>
              <Text>Level: {member.Level}</Text>
              <Badge colorScheme="green" fontSize="sm">
                ID: {member.id}
              </Badge>
              {member.TotalSales.map((sales) => (
                <Box key={sales.Id}>
                  <Text>Total Sales ID: {sales.Id}</Text>
                  {/* Render Jasa Website */}
                  <ul>
                    {sales.JasaWebsite.map((jasa) => (
                      <li key={jasa.Id}>
                        Jenis Website: {jasa.JenisWeb}, MemberNewId: {jasa.MemberNewId}
                      </li>
                    ))}
                  </ul>
                  {/* Render Kelas Digital */}
                  <ul>
                    {sales.KelasDigital.map((kelas) => (
                      <li key={kelas.Id}>
                        Jenis Kelas Digital: {kelas.JenisKelasDigital}, MemberNewId: {kelas.MemberNewId}
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MyNetwork;
