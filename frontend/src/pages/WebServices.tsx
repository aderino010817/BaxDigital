import { Box, Button, Center, Divider, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { CheckIcon } from "@chakra-ui/icons";

export default function WebServices() {
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
                        }}> Jasa Pembuatan Website Terbaik </Heading>
                    </Center>
                    <Box maxW={"60em"} mt={'1.3em'} textAlign={'center'}
                    fontSize={{
                        base: '14px',
                        lg: '20px'
                    }}>
                        <Text>
                            Bax Digital adalah mitra terpercaya Anda dalam menghadirkan keindahan dan efisiensi bagi bisnis Anda melalui dunia digital. Sebagai tim Web Developer Professional, kami siap membantu Anda menghadirkan website yang tidak hanya menarik, tetapi juga efisien dan ramah pengguna.
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
                }} display={{ base: 'grid', lg: 'flex'}} textAlign={'center'} alignContent={'center'} alignSelf={'center'} alignItems={'center'}>
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
                                    FullStack Web-Development
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
                                    Wordpress Web-Builder
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
                            <Heading> PRICE LIST </Heading>
                        </Center>
                    </Flex>
                </Center>
            </Box>
            <Center>
                <Flex width={'100%'} textAlign={'center'} justifyContent={'space-around'} gap={'4'} flexWrap={'wrap'} display={{ base: 'grid', lg: 'flex'}}>
                    <Box flex={'20%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
                    _hover={{
                        border: '1px solid gray',
                        borderRadius: '13px',
                        boxShadow: '3px 3px 10px 3px gray'
                    }}>
                        <Box>
                            <Text fontSize={{
                                base: '19px',
                                lg: '24px'
                            }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Plan 1 :<br/> Web-Wordpress</Text>
                        </Box>
                        <Center textAlign={'center'}>
                            <Text fontWeight={'bold'} fontSize={{
                                base: '16px',
                                lg: '20px'}}>Rp 1.499.000,-/</Text>
                            <Text fontWeight={'semibold'} fontStyle={'oblique'} fontSize={'16'}>Tahun</Text>
                        </Center>
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
                            <CheckIcon color="green.500" /> 5 Halaman
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> 5 Hari Pengerjaan
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Gratis Revisi 4 Hari (Minor)
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> +5 Akun Email
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> GRATIS! SSL
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> GRATIS! DOMAIN .COM/CO.ID
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Mobile Friendly
                            </ListItem>
                        </List>
                    </Box>
                    <Box flex={'20%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
                    _hover={{
                        border: '1px solid gray',
                        borderRadius: '13px',
                        boxShadow: '3px 3px 10px 3px gray'
                    }}>
                        <Box>
                        <Text fontSize={{
                                base: '19px',
                                lg: '24px'
                            }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Plan 2 :<br/> Toko Online Wordpress</Text>
                        </Box>
                        <Center textAlign={'center'}>
                        <Text fontWeight={'bold'} fontSize={{
                                base: '16px',
                                lg: '20px'}}>Rp 2.499.000,-/</Text>
                            <Text fontWeight={'semibold'} fontStyle={'oblique'} fontSize={'16'}>Tahun</Text>
                        </Center>
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
                            <CheckIcon color="green.500" /> 8 Hari Pengerjaan
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Gratis Revisi 1Minggu (Minor)
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> +10 Akun Email
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> GRATIS! SSL
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> GRATIS! DOMAIN .COM/CO.ID
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Mobile Friendly
                            </ListItem>
                        </List>
                    </Box>
                    <Box flex={'20%'} border={'1px solid gray'} borderRadius={'13px'} boxShadow={'1px 2px 5px 1px gray'} pb={3} px={10}
                    _hover={{
                        border: '1px solid gray',
                        borderRadius: '13px',
                        boxShadow: '3px 3px 10px 3px gray'
                    }}>
                        <Box>
                        <Text fontSize={{
                                base: '19px',
                                lg: '24px'
                            }} fontStyle={'italic'} fontFamily={'fantasy'} color={'blue'}>Plan 3 :<br /> Full Web-Development</Text>
                        </Box>
                        <Center textAlign={'center'}>
                        <Text fontWeight={'bold'} fontSize={{
                                base: '16px',
                                lg: '20px'}}>Negotiable</Text>
                        </Center>
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
                            <CheckIcon color="green.500" /> React
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Vue
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Node-Express
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Golang
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> MySQL (Database)
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> PostgreSQL (Database)
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> MongoDB (Database)
                            </ListItem>
                            <ListItem>
                            <CheckIcon color="green.500" /> Remix (Fullstack Framework)
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
                Contact-us
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
                        <CheckIcon color="green.500" /> Menambah Halaman dikenakan Biaya Rp 99.000,-/halaman
                    </ListItem>
                    <ListItem>
                        <CheckIcon color="green.500" /> Biaya diatas merupakan biaya tahun pertama (Sudah termasuk Hosting, Domain, dan Maintenance)
                    </ListItem>
                    <ListItem>
                        <CheckIcon color="green.500" /> Waktu pengerjaan dihitung setelah diskusi Materi, Teks, Gambar, Content, CopyWriting, dll disepakati.
                    </ListItem>
                    <ListItem>
                        <CheckIcon color="green.500" /> Akun Email memiliki kapasitas tidak terbatas (Hanya untuk Mailing Activity)
                    </ListItem>
                    <ListItem>
                        <CheckIcon color="green.500" /> Pertanyaan, Saran, dan Kritik silahkan ajukan melalui Form yang telah disediakan pada bagian "Contact-us"
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
