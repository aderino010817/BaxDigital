import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import KelasFacebookExpertise from "../assets/Image/FacebookAds.png";
import JasaPembuatanWebsiteFullstackdanWordpress from "../assets/Image/jasaWeb.jpeg";

export default function AboutUs() {
  return (
    <>
      <Box bgColor={'#f5f5fa'} minHeight="100vh">
        <Navbar />
        <Center py={{
            base: '12',
            lg: '12'
        }} px={{
            base: '10',
            lg: '10'
        }}>
          <Flex flexDirection="column" alignItems="center" maxW="800px" w="100%">
            <Text fontSize="4xl" fontWeight="bold" color="teal.500" mb={4}>
              Selamat Datang di BAX Digital
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8}>
              Di BAX Digital, kami adalah pelopor inovasi digital. Setiap proyek adalah kesempatan untuk menciptakan keajaiban. Sebagai seniman dan insinyur, kami membawa visi Anda menjadi kenyataan melalui kombinasi unik antara kreativitas dan teknologi. Pengalaman digital kami tidak hanya memikat mata, tetapi juga meningkatkan bisnis Anda ke level berikutnya.
            </Text>
            <Box>
                <Box justifyContent="space-between" w="100%" mb={8} border={'1px solid gray'} p='5'
                display={{
                    base: 'grid',
                    lg: 'flex'
                }}>
                    <Box flex="1" textAlign="center">
                        <Image p={{
                            base: 'none',
                            lg: 'none'
                        }} mt={5} src={JasaPembuatanWebsiteFullstackdanWordpress} alt="Anggota Tim BAX Digital 1" mb={4} borderRadius="md" />
                        
                    </Box>
                    <Box flex="1" textAlign="center">
                        <Heading textDecoration={'underline'} fontSize={{
                            base: '28px',
                            lg: '24px'
                        }} mt={{
                            base: '1',
                            lg: '3'
                        }} fontWeight="bold" color="teal.500" mb={2}>
                            Jasa Pembuatan Website <br/> Fullstack dan Wordpress
                        </Heading>
                        <Text fontSize="md" color="gray.500">
                            Desainer Kreatif
                        </Text>
                    </Box>
                </Box>
                <Box justifyContent="space-between" w="100%" mb={8} border={'1px solid gray'} p='5'
    display={{
        base: 'grid',
        lg: 'flex'
    }}>
    <Box flex="1" textAlign="center">
        <Image p={{
            base: 'none',
            lg: 'none'
        }}
        src={KelasFacebookExpertise} alt="Anggota Tim BAX Digital 2" mb={{
            base: 'none',
            lg: '4'
        }} borderRadius="md" mt='-10' />
    </Box>
    <Box flex="1" textAlign="center">
        <Heading textDecorationLine={'underline'} fontSize={{
            base: '28px',
            lg: '24px'
        }} mt={{
            base: '1',
            lg: '3'
        }} fontWeight="bold" color="teal.500" mb={2}>
            Kelas : Facebook Expertise
        </Heading>
        <Text mt={4} fontSize="md" color="gray.700">
            Optimalkan bisnis Anda di Facebook dengan Facebook Expertise! Dari pemula hingga mahir, kami membimbing Anda: dari personal ads hingga pengelolaan Business Manager, kreasi konten memukau, riset produk, dan menguasai alat serta otomasi. Meraih kesuksesan digital dengan kami! 🚀
        </Text>
    </Box>
</Box>
            </Box>
            <Text fontSize="xl" fontWeight="bold" color="teal.500" mb={4}>
              Keahlian Kami
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8}>
              Di BAX Digital, kami menciptakan desain yang memukau dan fungsionalitas yang cerdas. Dari pembuatan website yang responsif hingga kampanye digital marketing yang sukses, kami memberdayakan bisnis Anda untuk bersinar di dunia digital. Kelas pembelajaran kami tentang Facebook Ads dan Facebook Automasi bukan hanya kursus biasa, tetapi sebuah petualangan mendalam ke dalam strategi pemasaran yang efektif.
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="teal.500" mb={4}>
              Bergabunglah Bersama Kami
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8}>
              Kami mengundang Anda untuk bergabung dalam perjalanan kami menuju keunggulan digital. Bersama-sama, kita akan menjelajahi potensi tak terbatas teknologi dan kreativitas. Apakah Anda mencari solusi web yang inovatif atau ingin menguasai seni pemasaran digital, BAX Digital adalah rumah bagi visi Anda.
            </Text>
          </Flex>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
