import { Box, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import KelasFacebookExpertise from "../assets/Image/FacebookAds.png";
import JasaPembuatanWebsiteFullstackdanWordpress from "../assets/Image/jasaWeb.jpeg";
import Layout from "../layouts/Layout";

export default function AboutUs() {
  return (
    <>
      <Layout>
        <Stack m="50px">
          <Flex bgColor={"#8487F6"} justifyContent={"space-between"} alignItems={"center"} p={["20px", "50px", "100px", "100px"]} color={"white"} borderRadius={5} m={"25px"} flexDir={["column", "column", "row"]}>
            <Box w={["100%", "100%", "50%"]} textAlign={["center", "center", "left"]} mb={["20px", "20px", "0"]}>
              <Heading fontSize={["xl", "2xl", "3xl"]}>BAX Digital</Heading>
            </Box>
            <Box w={["100%", "100%", "50%"]} textAlign={["center", "center", "justify"]}>
              <Text>
                Di BAX Digital, kami adalah pelopor inovasi digital. Setiap proyek adalah kesempatan untuk menciptakan keajaiban. Sebagai seniman dan insinyur, kami membawa visi Anda menjadi kenyataan melalui kombinasi unik antara
                kreativitas dan teknologi. Pengalaman digital kami tidak hanya memikat mata, tetapi juga meningkatkan bisnis Anda ke level berikutnya.
              </Text>
            </Box>
          </Flex>
          <Flex alignContent={"center"} alignItems={"center"} justifyContent={["center", "center", "space-evenly"]} m={"25px"} flexDir={["column", "column", "row"]}>
            <Box w={["100%", "100%", "40%"]} display={"flex"} flexDirection={"column"} _hover={{ backgroundColor: "#8487F6", boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", color: "white" }} p={"20px"} borderRadius={5} mb={["20px", "20px", "0"]}>
              <Image src={KelasFacebookExpertise} w={"250px"} alignSelf="center" />
              <Heading textAlign={["center", "center", "start"]} fontSize={["xl", "2xl", "3xl"]}>
                Kelas Facebook Expertise
              </Heading>
              <Text textAlign={["center", "center", "justify"]} fontSize={["md", "lg", "xl"]}>
                Optimalkan bisnis Anda di Facebook dengan Facebook Expertise! Dari pemula hingga mahir, kami membimbing Anda: dari personal ads hingga pengelolaan Business Manager, kreasi konten memukau, riset produk, dan menguasai alat
                serta otomasi. Meraih kesuksesan digital dengan kami! 🚀
              </Text>
            </Box>
            <Box w={["100%", "100%", "40%"]} display={"flex"} flexDirection={"column"} _hover={{ backgroundColor: "#8487F6", boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", color: "white" }} p={"20px"} borderRadius={5} mb={["20px", "20px", "0"]}>
              <Image src={JasaPembuatanWebsiteFullstackdanWordpress} w={"250px"} alignSelf="center" />
              <Heading textAlign={["center", "center", "start"]} fontSize={["xl", "2xl", "3xl"]}>
                Jasa Pembuatan Website <br /> Fullstack dan Wordpress
              </Heading>
              <Text textAlign={["center", "center", "justify"]} fontSize={["md", "lg", "xl"]}>
                Pengembangan website fullstack dan WordPress. Kami menyediakan layanan desain responsif, pengembangan kustom, optimisasi SEO, dan dukungan pemeliharaan. Dengan harga terjangkau, kami membantu Anda mencapai tujuan online Anda
              </Text>
            </Box>
          </Flex>
          <Stack m={"25px"}>
            <Center>
              <Box p={"40px"} textAlign={"center"} width={["100%", "80%", "60%"]}>
                <Heading color={"#8487F6"} fontSize={["xl", "2xl", "3xl"]}>
                  Keahlian Kami
                </Heading>
                <Text mt={2} fontSize={["md", "lg", "xl"]}>
                  Di BAX Digital, kami menciptakan desain yang memukau dan fungsionalitas yang cerdas. Dari pembuatan website yang responsif hingga kampanye digital marketing yang sukses, kami memberdayakan bisnis Anda untuk bersinar di
                  dunia digital. Kelas pembelajaran kami tentang Facebook Ads dan Facebook Automasi bukan hanya kursus biasa, tetapi sebuah petualangan mendalam ke dalam strategi pemasaran yang efektif.
                </Text>
              </Box>
            </Center>
            <Center>
              <Box p={"40px"} textAlign={"center"} width={["100%", "80%", "60%"]}>
                <Heading color={"#8487F6"} fontSize={["xl", "2xl", "3xl"]}>
                  Bergabung bsesama kami
                </Heading>
                <Text mt={2} fontSize={["md", "lg", "xl"]}>
                  Kami mengundang Anda untuk bergabung dalam perjalanan kami menuju keunggulan digital. Bersama-sama, kita akan menjelajahi potensi tak terbatas teknologi dan kreativitas. Apakah Anda mencari solusi web yang inovatif atau
                  ingin menguasai seni pemasaran digital, BAX Digital adalah rumah bagi visi Anda.
                </Text>
              </Box>
            </Center>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}
