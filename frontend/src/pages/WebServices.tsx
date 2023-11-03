import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import computer from "../assets/Image/computer.png";
import collaboration from "../assets/Image/image1.png";
import Layout from "../layouts/Layout";

export default function WebServices() {
  return (
    <Layout>
      <Stack m={["5px", "15px", "30px"]}>
        <Flex flexDir={["column-reverse", "column-reverse", "row"]} alignItems={"center"} my="10">
          <Box w={"50%"} ps={["0px", "0px", "100px"]}>
            <Heading fontSize={["xl", "2xl", "4xl"]} textAlign={["center", "center", "left"]}>
              Jasa Pembuatan Website Terbaik
            </Heading>
            <Text my={3} fontSize={["sm", "md", "md"]} textAlign={["center", "center", "left"]}>
              Bax Digital adalah mitra terpercaya Anda dalam menghadirkan keindahan dan efisiensi bagi bisnis Anda melalui dunia digital. Sebagai tim Web Developer Professional, kami siap membantu Anda menghadirkan website yang tidak hanya
              menarik, tetapi juga efisien dan ramah pengguna.
            </Text>
            <Stack flexDir={["column", "row", "row"]} spacing={["2", "4", "4"]}>
              <Link to={"/#"}>
                <Button colorScheme="yellow" size={["xs", "sm", "md", "md"]} fontSize={["sm", "sm", "md"]}>
                  FullStack Web-Development
                </Button>
              </Link>
              <Link to={"/#"}>
                <Button colorScheme="yellow" size={["xs", "sm", "md", "md"]} fontSize={["sm", "sm", "md"]}>
                  Wordpress Web-Builder
                </Button>
              </Link>
            </Stack>
          </Box>
          <Flex w={["100%", "100%", "50%"]} alignContent={"center"} justify={"center"}>
            <Image src={collaboration} w={["70%", "80%", "80%"]} />
          </Flex>
        </Flex>
        <Box m={[5, 10]}>
          <Flex flexWrap={["wrap", "wrap", "nowrap"]} alignItems={["center", "center", "center"]}>
            <Box w={["100%", "100%", "50%"]} textAlign={["center", "center", "center"]}>
              <Heading fontSize={["xl", "2xl", "4xl"]}>PRICE LIST</Heading>
              <Image src={computer} w={["100%", "100%", "100%"]} />
              <Link to="/ContactUs">
                <Button colorScheme="yellow" w={["80%", "60vh"]}>
                  Contact-us
                </Button>
              </Link>
            </Box>
            <Box w={["100%", "100%", "50%"]}>
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Plan 1 <br /> Web-Wordpress
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />5 Halaman
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />5 Hari Pengerjaan
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Gratis Revisi 4 Hari (Minor)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      +5 Akun Email
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      GRATIS! SSL
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      GRATIS! DOMAIN .COM/CO.ID
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Mobile Friendly
                    </ListItem>
                  </List>
                  <Text fontSize={["sm", "md", "md"]} fontWeight="bold" p={2}>
                    Rp 1.499.000,-/tahun
                  </Text>
                </CardBody>
              </Card>
              <br />
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Plan 2 <br /> Toko Online Wordpress
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />8 Hari Pengerjaan
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Gratis Revisi 1Minggu (Minor)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      +10 Akun Email
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      GRATIS! SSL
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      GRATIS! DOMAIN .COM/CO.ID
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Mobile Friendly
                    </ListItem>
                  </List>
                  <Text fontSize={["sm", "md", "md"]} fontWeight="bold" p={2}>
                    Rp 2.499.000,-/tahun
                  </Text>
                </CardBody>
              </Card>
              <br />
              <Card _hover={{ boxShadow: "0 0 5px #8487F6" }}>
                <CardHeader>
                  <Heading fontSize={["2xl", "2xl", "3xl"]}>
                    Plan 3 <br /> Full Web-Development
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Front-end: React.js, Vue.js, Angular
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Back-end: Node.js, Express.js
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Databases: MySQL, PostgreSql, MongoDB
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Full-Stack: Remix.js, Next.js
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Language: JavaScript, TypeScript, Golang
                    </ListItem>
                  </List>
                  <Text fontSize={["sm", "md", "md"]} fontWeight="bold" p={2}>
                    Negotiable
                  </Text>
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
                    Menambah Halaman dikenakan Biaya Rp 99.000,-/halaman
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Biaya diatas merupakan biaya tahun pertama (Sudah termasuk Hosting, Domain, dan Maintenance)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Waktu pengerjaan dihitung setelah diskusi Materi, Teks, Gambar, Content, CopyWriting, dll disepakati.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Akun Email memiliki kapasitas tidak terbatas (Hanya untuk Mailing Activity)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Pertanyaan, Saran, dan Kritik silahkan ajukan melalui Form yang telah disediakan pada bagian "Contact-us"
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
