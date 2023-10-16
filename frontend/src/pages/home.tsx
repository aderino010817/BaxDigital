import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../Component/Navbar";
import logoBaxTP from "../assets/Image/BaxDigital.png";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <>
      <Box bgColor={'#f5f5fa'} minHeight="100vh">
        <Box>
          <Navbar />
        </Box>
        <Box bgColor={'gray.300'} boxShadow={'0px 0px 10px 2px gray'} py={8} mb={8} px={10}>
        <Center >
            <Flex flexDirection={'column'} alignItems="center">
              <Box mb={4}>
                <Image src={logoBaxTP} w={{
                  base: '10em',
                  lg: '20em'
                }} h="auto" bgColor={'white'} borderRadius={{
                  base: '10px',
                  lg: '12px'
                }} _hover={{
              border: '1px solid gray',
              boxShadow: '2px 2px 4px 2px gray'
            }}/>
              </Box>
              <Box textAlign={'center'}>
                <Text style={{
                  textShadow: "1px 1px 1px black"}} 
                  fontSize={{
                    base: '2xl',
                    lg: '3xl'
                  }} 
                  fontFamily={'sans-serif'} 
                  fontWeight={'bold'} 
                  color="teal.500"
                  >
                    Keajaiban Digital Dimulai di Sini!
                </Text>
                <Text maxW={'60em'} fontSize={{
                  base: '14px',
                  lg: '18px'
                }} mt={4}>
                BAX Digital adalah tempat di mana kreativitas bertemu teknologi! Kami adalah pakar Fullstack digital, menciptakan situs web menggunakan CMS Wordpress dan teknologi terdepan seperti Golang, React-Express, dan banyak lagi. <br />Jangan lewatkan kesempatan belajar di kelas Digital kami. Temui rahasia di balik kesuksesan digital marketing: Ads pintar, Bot Automasi cerdas, dan Pembuatan LandingPage yang memukau dengan Wordpress.
                </Text>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box textAlign={'center'}>
          <Text fontSize="2xl" color="teal.500" mb={4}>Pilih Kebutuhan Anda</Text>
        </Box>
        <Center>
          <Flex gap={'5'} width="100%" justifyContent="center" display={{base: 'grid', lg: 'flex'}}>
            <Link to={'/WebServices'}>
              <Center flex="1" p={6} bgColor="teal.500" color="white" borderRadius="md" boxShadow="lg" mx={4}
              _hover={{
                border: '1px solid gray',
                boxShadow: '2px 2px 4px 2px gray'
              }}>
                  <Text fontSize="xl">Jasa Pembuatan Website</Text>
              </Center>
            </Link>
            <Link to={'#'}>
              <Center flex="1" p={6} bgColor="teal.500" color="white" borderRadius="md" boxShadow="lg" mx={4}
              _hover={{
                border: '1px solid gray',
                boxShadow: '2px 2px 4px 2px gray'
              }}>
                  <Text fontSize="xl">Kelas Full-Stack Digital Selling</Text>
              </Center>
            </Link>
          </Flex>
        </Center>
      </Box>
      <Box mt={'100px'}>
        <Footer />
      </Box>
  </>);
}
