import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ClassDigiatal from "../assets/Image/class.gif";
import people from "../assets/Image/people.gif";
import Layout from "../layouts/Layout";

export default function KelasDigital() {
  return (
    <Layout>
      <Stack m={["5px", "15px", "30px"]}>
        <Flex flexDir={["column-reverse", "column-reverse", "row"]} alignItems={"center"} my="10">
          <Box w={"50%"} ps={["0px", "0px", "100px"]}>
            <Heading fontSize={["xl", "2xl", "3xl"]} textAlign={["center", "center", "left"]}>
              Kelas Digital: Facebook Branding-Marketing-Selling
            </Heading>
            <Text my={3} fontSize={["sm", "md", "md"]} textAlign={["center", "center", "left"]}>
              Pelajari seni branding, pemasaran, dan penjualan melalui platform Meta, khususnya Facebook. Dapatkan pengetahuan mendalam tentang cara membangun merek yang kuat, strategi pemasaran yang efektif, dan teknik penjualan yang
              memukau untuk pertumbuhan bisnis Anda.
            </Text>
            <Stack flexDir={["column", "row", "row"]} spacing={["2", "4", "4"]}>
              <Button colorScheme="yellow" size={["sm", "md", "md"]} fontSize={["sm", "sm", "md"]}>
                Facebook Expertise
              </Button>
              <Button colorScheme="yellow" size={["sm", "md", "md"]} fontSize={["sm", "sm", "md"]}>
                Meta Platform Insights
              </Button>
            </Stack>
          </Box>
          <Flex w={["100%", "100%", "50%"]} alignContent={"center"} justify={"center"}>
            <Image src={ClassDigiatal} w={["70%", "80%", "80%"]} />
          </Flex>
        </Flex>
        <Box m={[5, 10]}>
          <Flex flexWrap={["wrap", "wrap", "nowrap"]} alignItems={["center", "center", "center"]}>
            <Box w={["100%", "100%", "50%"]} textAlign={["center", "center", "center"]}>
              <Heading fontSize={["xl", "2xl", "4xl"]}>Course outline</Heading>
              <Image src={people} w={["100%", "100%", "100%"]} />
              <Link to="/">
                <Button colorScheme="yellow" w={["80%", "60vh"]}>
                  Daftar Sekarang
                </Button>
              </Link>
            </Box>
            <Box w={["100%", "100%", "50%"]}>
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Modul 1 <br /> Membangun Brand di Facebook
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Strategi Branding yang Efektif
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Desain Grafis yang Menarik
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Membangun Jaringan Pengikut (Followers)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Interaksi yang Meningkatkan Keterlibatan
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
              <br />
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Modul 2 <br /> Pemasaran Efektif di Facebook
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Strategi Iklan yang Meningkatkan Penjualan
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Analisis Target Audience (Pemirsa)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Kampanye Iklan yang Sukses
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Pengukuran Kinerja Iklan
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
              <br />
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Modul 3 <br /> Teknik Penjualan Unggul
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Membangun Kesadaran Produk yang Kuat
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Teknik Penjualan yang Persuasif
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Mengatasi Penolakan dan Menangani Objeksi Pelanggan
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Membangun Hubungan Jangka Panjang dengan Pelanggan
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
            </Box>
          </Flex>
          <Box ps={["0", "24"]} mt={["5", "10"]}>
            <Box>
              <Box>
                <Heading fontSize={["2xl", "2xl", "3xl"]}>Catatan:</Heading>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Harga: Rp 499.000,-/peserta
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Durasi: 3 Minggu (6 Pertemuan)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Materi akan disesuaikan dengan perkembangan terbaru di platform Meta
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Pertanyaan lebih lanjut, hubungi kami melalui formulir "Hubungi Kami"
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
}
