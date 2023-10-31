import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import laptop from "../assets/Image/laptop.gif";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Flex alignItems={"center"} justifyContent={["center", "space-between"]} flexDirection={["column", "row"]}>
          <Box w={["100%", "55%"]} px={["20px", "60px"]} py={["20px", "60px"]} display={"flex"} flexDirection={"column"} gap={5} textAlign={["center", "left"]}>
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}>Keajaiban Digital Dimulai di Sini!</Heading>
            <Text fontSize={["md", "lg"]} textAlign={["justify", "justify"]}>
              BAX Digital adalah tempat di mana kreativitas bertemu teknologi! Kami adalah pakar Fullstack digital, menciptakan situs web menggunakan CMS Wordpress dan teknologi terdepan seperti Golang, React-Express, dan banyak lagi.{" "}
              <br /> Jangan lewatkan kesempatan belajar di kelas Digital kami. Temui rahasia di balik kesuksesan digital marketing: Ads pintar, Bot Automasi cerdas, dan Pembuatan LandingPage yang memukau dengan Wordpress.
            </Text>
          </Box>
          <Box w={["100%", "45%"]} display={"flex"} justifyContent={"center"}>
            <Image src={laptop} width={"100%"} />
          </Box>
        </Flex>

        <Flex gap={10} flexDirection={["column", "column", "column"]} alignItems={"center"} textAlign="center" mb={"15vh"}>
          <Center>
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}>Pilih Kebutuhan Anda</Heading>
          </Center>

          <Center>
            <Flex gap={10} justifyContent="center" display={{ base: "grid", lg: "flex" }}>
              <Link to={"/WebServices"}>
                <Box boxSize={{ base: "150px", sm: "300px", md: "400px" }} h={{ base: "100px", sm: "100px", md: "150px" }} border={"3px solid #8487F6"} alignItems={"center"} display={"flex"} justifyContent={"center"} borderRadius={"10px"}>
                  <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight={"bold"} color={"#8487F6"}>
                    Jasa Pembuatan Web
                  </Text>
                </Box>
              </Link>
              <Link to={"#"}>
                <Box boxSize={{ base: "150px", sm: "300px", md: "400px" }} h={{ base: "100px", sm: "100px", md: "150px" }} border={"3px solid #8487F6"} alignItems={"center"} display={"flex"} justifyContent={"center"} borderRadius={"10px"}>
                  <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight={"bold"} color={"#8487F6"}>
                    Kelas Full-Stack Digital Selling
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Center>
        </Flex>
      </Layout>
      {/* <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box w={"55%"} px={"60px"} display={"flex"} flexDirection={"column"} gap={5}>
              <Heading>Keajaiban Digital Dimulai di Sini!</Heading>
              <Text fontSize={"lg"} textAlign="justify">
                BAX Digital adalah tempat di mana kreativitas bertemu teknologi! Kami adalah pakar Fullstack digital, menciptakan situs web menggunakan CMS Wordpress dan teknologi terdepan seperti Golang, React-Express, dan banyak lagi.{" "}
                <br />
                Jangan lewatkan kesempatan belajar di kelas Digital kami. Temui rahasia di balik kesuksesan digital marketing: Ads pintar, Bot Automasi cerdas, dan Pembuatan LandingPage yang memukau dengan Wordpress.
              </Text>
            </Box>
            <Box w={"45%"} display={"flex"} justifyContent={"center"}>
              <Image src={laptop} width="100%" />
            </Box>
          </Flex> */}
      {/* <Flex gap={10} flexDirection={"column"} alignItems={"center"}>
            <Center>
              <Heading>Pilih Kebutuhan Anda</Heading>
            </Center>
            <Center>
              <Flex gap={10} justifyContent="center" display={{ base: "grid", lg: "flex" }}>
                <Link to={"/WebServices"}>
                  <Box boxSize={"400px"} h={"150px"} border={"3px solid #8487F6"} alignItems={"center"} display={"flex"} justifyContent={"center"} borderRadius={"10px"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} color={"#8487F6"}>
                      Jasa Pembuatan Web
                    </Text>
                  </Box>
                </Link>
                <Link to={"#"}>
                  <Box boxSize={"400px"} h={"150px"} border={"3px solid #8487F6"} alignItems={"center"} display={"flex"} justifyContent={"center"} borderRadius={"10px"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} color={"#8487F6"}>
                      Kelas Full-Stack Digital Selling
                    </Text>
                  </Box>
                </Link>
              </Flex>
            </Center>
          </Flex> */}
    </>
  );
}
