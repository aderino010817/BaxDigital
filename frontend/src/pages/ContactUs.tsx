import { Box, Button, Center, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box
        p={{
          base: "1",
          lg: "1em",
        }}
      >
        <Box mt={"15px"} mb={"3em"}>
          <Center>
            <Box
              textAlign={"center"}
              p={{
                base: "1.2em",
                lg: "2em",
              }}
            >
              <Heading
                fontSize={{
                  base: "2xl",
                  lg: "4xl",
                }}
              >
                {" "}
                Hubungi Kami{" "}
              </Heading>
              <Text
                mt={3}
                fontSize={{
                  base: "md",
                  lg: "lg",
                }}
              >
                Kami siap membantu Anda! Silakan hubungi kami melalui formulir di bawah ini.
              </Text>
            </Box>
          </Center>
        </Box>
        <Center>
          <Box width="80%" p="4" boxShadow={"2px 2px 6px 2px gray"} borderRadius="md" bg="white">
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Masukkan Alamat Email
              </Text>
              <Input
                placeholder="Email"
                boxShadow={"1px 1px 3px 1px gray"}
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Masukkan Nama
              </Text>
              <Input
                placeholder="Nama"
                boxShadow={"1px 1px 3px 1px gray"}
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Masukkan Nomor Telepon
              </Text>
              <Input
                boxShadow={"1px 1px 3px 1px gray"}
                placeholder="No.Telp"
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Masukkan Subjek
              </Text>
              <Input
                boxShadow={"1px 1px 3px 1px gray"}
                placeholder="Subject"
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Tulis Pesan Anda
              </Text>
              <Textarea
                boxShadow={"1px 1px 3px 1px gray"}
                placeholder="Isian Keterangan"
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Box mb={3}>
              <Text
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                Pilih Lampiran (opsional)
              </Text>
              <Input
                boxShadow={"1px 1px 3px 1px gray"}
                type="file"
                accept=".pdf,.jpg,.png,.docx,.csv,.xlsx"
                size={{
                  base: "md",
                  lg: "lg",
                }}
              />
            </Box>
            <Center>
              <Button
                bgColor={"#319795"}
                color={"white"}
                size={{
                  base: "md",
                  lg: "lg",
                }}
                _hover={{
                  bgColor: "#319795",
                  color: "white",
                  border: "1px solid gray",
                  boxShadow: "1px 1px 5px 1px gray",
                }}
              >
                Kirim Pesan
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
      <Box mt="100px">
        <Footer />
      </Box>
    </>
  );
}
