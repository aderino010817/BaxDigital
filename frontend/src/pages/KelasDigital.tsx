import { Box, Button, Center, Divider, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { CheckIcon } from "@chakra-ui/icons";

export default function KelasDigital() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box p={'3em'}>
        <Box mt={'15px'} mb={'3em'}>
          <Center>
            <Flex flexDirection={'column'}>
              <Center fontStyle={'oblique'} textAlign={'center'}>
                <Heading fontSize={{
                  base: '2xl',
                  lg: '4xl'
                }}> Kelas Digital: Facebook Branding-Marketing-Selling </Heading>
              </Center>
              <Box maxW={"60em"} mt={'1.3em'} textAlign={'center'}
                fontSize={{
                  base: '14px',
                  lg: '20px'
                }}>
                <Text>
                  Pelajari seni branding, pemasaran, dan penjualan melalui platform Meta, khususnya Facebook. Dapatkan pengetahuan mendalam tentang cara membangun merek yang kuat, strategi pemasaran yang efektif, dan teknik penjualan yang memukau untuk pertumbuhan bisnis Anda.
                </Text>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box>
          <Flex
            mt="10px"
            mb="15px"
            width="100%"
            justifyContent="center"
          >
            <Center gap={{
              base: '1em',
              lg: '2em',
              md: '1em'
            }} display={{ base: 'grid', lg: 'flex' }} textAlign={'center'} alignContent={'center'} alignSelf={'center'} alignItems={'center'}>
              <Box flex="1">
                <Link to='/'>
                  <Button textAlign="center" bgColor={'#319795'} color={'white'}
                    _hover={{
                      bgColor: '#319795',
                      color: 'white',
                      border: '1px solid gray',
                      boxShadow: '1px 1px 5px 1px gray'
                    }}
                    fontSize={{
                      base: '14px',
                      lg: '16px'
                    }}>
                    Facebook Expertise
                  </Button>
                </Link>
              </Box>
              <Box flex="1">
                <Link to='/'>
                  <Button textAlign="center" bgColor={'#319795'} color={'white'}
                    _hover={{
                      bgColor: '#319795',
                      color: 'white',
                      border: '1px solid gray',
                      boxShadow: '1px 1px 5px 1px gray'
                    }}
                    fontSize={{
                      base: '14px',
                      lg: '16px'
                    }}>
                    Meta Platform Insights
                  </Button>
                </Link>
              </Box>
            </Center>
          </Flex>
        </Box>
        <Divider />
        <Box mt={'7em'} mb={'3em'}>
          <Center>
            <Flex flexDirection={'column'}>
              <Center fontStyle={'oblique'}>
                <Heading> COURSE OUTLINE </Heading>
              </Center>
            </Flex>
          </Center>
        </Box>
        <Center>
          <Flex width={'100%'} textAlign={'center'} justifyContent={'space-around'} gap={'4'} flexWrap={'wrap'} display={{ base: 'grid', lg: 'flex' }}>
            <Box flex={'30%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
              _hover={{
                border: '1px solid gray',
                borderRadius: '13px',
                boxShadow: '3px 3px 10px 3px gray'
              }}>
              <Box>
                <Text fontSize={{
                  base: '19px',
                  lg: '24px'
                }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Modul 1 :<br/> Membangun Brand di Facebook</Text>
              </Box>
              <Divider />
              <List spacing={{
                base: '1',
                lg: '2'
              }} pl={{
                base: '1',
                lg: '4'
              }} mt={{
                base: '2',
                lg: '3'
              }} mb={{
                base: '1',
                lg: '3'
              }}>
                <ListItem>
                  <CheckIcon color="green.500" /> Strategi Branding yang Efektif
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Desain Grafis yang Menarik
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Membangun Jaringan Pengikut (Followers)
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Interaksi yang Meningkatkan Keterlibatan
                </ListItem>
              </List>
            </Box>
            <Box flex={'30%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
              _hover={{
                border: '1px solid gray',
                borderRadius: '13px',
                boxShadow: '3px 3px 10px 3px gray'
              }}>
              <Box>
                <Text fontSize={{
                  base: '19px',
                  lg: '24px'
                }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Modul 2 :<br/> Pemasaran Efektif di Facebook</Text>
              </Box>
              <Divider />
              <List spacing={{
                base: '1',
                lg: '2'
              }} pl={{
                base: '1',
                lg: '4'
              }} mt={{
                base: '2',
                lg: '3'
              }} mb={{
                base: '1',
                lg: '3'
              }}>
                <ListItem>
                  <CheckIcon color="green.500" /> Strategi Iklan yang Meningkatkan Penjualan
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Analisis Target Audience (Pemirsa)
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Kampanye Iklan yang Sukses
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Pengukuran Kinerja Iklan
                </ListItem>
              </List>
            </Box>
            <Box flex={'30%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
              _hover={{
                border: '1px solid gray',
                borderRadius: '13px',
                boxShadow: '3px 3px 10px 3px gray'
              }}>
              <Box>
                <Text fontSize={{
                  base: '19px',
                  lg: '24px'
                }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Modul 3 :<br/> Teknik Penjualan Unggul</Text>
              </Box>
              <Divider />
              <List spacing={{
                base: '1',
                lg: '2'
              }} pl={{
                base: '1',
                lg: '4'
              }} mt={{
                base: '2',
                lg: '3'
              }} mb={{
                base: '1',
                lg: '3'
              }}>
                <ListItem>
                  <CheckIcon color="green.500" /> Membangun Kesadaran Produk yang Kuat
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Teknik Penjualan yang Persuasif
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Mengatasi Penolakan dan Menangani Objeksi Pelanggan
                </ListItem>
                <ListItem>
                  <CheckIcon color="green.500" /> Membangun Hubungan Jangka Panjang dengan Pelanggan
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Center>
      </Box>
      <Center>
        <Link to='/'>
          <Button textAlign="center" bgColor={'#319795'} color={'white'}
            _hover={{
              bgColor: '#319795',
              color: 'white',
              border: '1px solid gray',
              boxShadow: '1px 1px 5px 1px gray'
            }}>
            Daftar Sekarang
          </Button>
        </Link>
      </Center>
      <Box m={20} p={{
        base: '2',
        lg: '15'
      }} border={'1px solid gray'}>
        <Box>
          <Flex flexDirection={'column'}>
            <Box fontStyle={'oblique'}>
              <Heading ml={{
                base: '2',
                lg: '10'
              }} fontSize={{
                base: '18px',
                lg: '24px'
              }}> CATATAN : </Heading>
            </Box>
          </Flex>
          <List spacing={2} pl={{
            base: '1',
            lg: '4'
          }} mt={3} mb={3} fontSize={{
            base: '12px',
            lg: '16px'
          }}>
            <ListItem>
              <CheckIcon color="green.500" /> Harga: Rp 499.000,-/peserta
            </ListItem>
            <ListItem>
              <CheckIcon color="green.500" /> Durasi: 3 Minggu (6 Pertemuan)
            </ListItem>
            <ListItem>
              <CheckIcon color="green.500" /> Materi akan disesuaikan dengan perkembangan terbaru di platform Meta
            </ListItem>
            <ListItem>
              <CheckIcon color="green.500" /> Pertanyaan lebih lanjut, hubungi kami melalui formulir "Hubungi Kami"
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box mt="100px">
        <Footer />
      </Box>
    </>
  );
}
