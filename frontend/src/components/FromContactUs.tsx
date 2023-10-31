import { Center, Input, Textarea, Button, Box, Text } from "@chakra-ui/react";

export default function FromContactUs() {
  return (
    <>
      <Center>
        <Box w={"100%"}>
          <Box mb={3}>
            <Text
              fontSize={{
                base: "14px",
                lg: "16px",
              }}
            >
              Masukkan Alamat Email
            </Text>
            <Input placeholder="Email" />
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
            <Input placeholder="Nama" />
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
            <Input placeholder="No.Telp" />
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
            <Input placeholder="Subject" />
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
            <Textarea placeholder="Isian Keterangan" />
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
            <Input type="file" accept=".pdf,.jpg,.png,.docx,.csv,.xlsx" />
          </Box>
          <Box>
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
          </Box>
        </Box>
      </Center>
    </>
  );
}
