import { Box, Center, Heading, Stack, Text, Image, Flex } from "@chakra-ui/react";
import FormContactUs from "../components/FromContactUs";
import Layout from "../layouts/Layout";
// import Contact from "../assets/Image/contact us.png";
import Contact2 from "../assets/Image/contactus2.gif";

export default function ContactUs() {
  return (
    <>
      <Layout>
        <Stack mt={"15px"} mb={"3em"} mx={10}>
          <Center display={"flex"} flexDirection={"column"} gap={5}>
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}>Hubungi Kami</Heading>
            <Text fontSize={["md", "lg"]} textAlign="center">
              Kami siap membantu Anda! Silakan hubungi kami melalui formulir di bawah ini.
            </Text>
          </Center>
          <Flex alignItems={["center", "center", "center"]} flexDirection={["column", "column", "row"]} justifyContent={"center"}>
            <Box w={["100%", "100%", "50%"]} display={["flex", "flex", "flex"]} justifyContent={"center"}>
              <Image src={Contact2} h={["300px", "500px", "600px"]} /> {/* Sesuaikan tinggi gambar berdasarkan ukuran layar */}
            </Box>

            <Box w={["100%", "100%", "40%"]}>
              <FormContactUs />
            </Box>
          </Flex>
          {/* <Flex alignItems={"center"} justifyContent={"center"}>
            <Box w={"50%"} display={"flex"} justifyContent={"center"}>
              <Image src={Contact2} h={"600px"} />
            </Box>
            <Box w={"40%"}>
              <FormContactUs />
            </Box>
          </Flex> */}
        </Stack>
      </Layout>
    </>
  );
}
