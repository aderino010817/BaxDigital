import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin, FiSlack, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/Image/BaxDigital.png";
import NavLink from "../assets/NavLink";

const Footer = () => {
  // const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Box py={10} bgColor={"#031447"}>
        <Box display={"flex"} flexDirection={"column"} color={"white"} alignItems={"center"} textAlign={"center"} gap={5}>
          <Image src={logo} bgColor={"white"} w={["40%", "30%", "13%"]} borderRadius={10} /> {/* Responsively set the width */}
          <NavLink />
          <Center flexWrap="wrap" justifyContent="center" gap={5}>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiInstagram />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiLinkedin />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiGithub />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiTwitter />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiSlack />
              </Button>
            </Link>
          </Center>
          <Box textAlign="center">
            <Text>Jl. Madrasah Al Husna Rt04/Rw02, Lebak Bulus, Cilandak, Jakarta Selatan</Text>
            <Text>Email: Admin@baxdigital.com | Phone: +62 881 0112 19626</Text>
          </Box>
        </Box>
      </Box>
      {/* <Box py={10} bgColor={"#031447"}>
        <Flex display={isLargerThan768 ? "colum" : "column"} justifyContent="space-around" alignItems="center" color="white" textAlign="center" gap={5}>
          <Image src={logo} bgColor="white" w={isLargerThan768 ? "13%" : "30%"} borderRadius={10} />
          {isLargerThan768 && <NavLink />}
          <Center textAlign="center" gap={5}>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiInstagram />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiLinkedin />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiGithub />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiTwitter />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiSlack />
              </Button>
            </Link>
          </Center>
          <Box>
            <Text>Jl. Madrasah Al Husna Rt04/Rw02, Lebak Bulus, Cilandak, Jakarta Selatan</Text>
            <Text>Email: Admin@baxdigital.com | Phone: +62 881 0112 19626</Text>
          </Box>
        </Flex>
      </Box> */}
      {/* <Box py={10} bgColor={"#031447"}>
        <Box display={"flex"} flexDirection={"column"} color={"white"} alignItems={"center"} textAlign={"center"} gap={5}>
          <Image src={logo} bgColor={"white"} w={"13%"} borderRadius={10} />
          <NavLink />
          <Center textAlign={"center"} gap={5}>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiInstagram />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiLinkedin />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiGithub />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiTwitter />
              </Button>
            </Link>
            <Link to={"#"}>
              <Button bgColor={"#8487F6"} colorScheme={"#8487F6"}>
                <FiSlack />
              </Button>
            </Link>
          </Center>
          <Box>
            <Text>Jl. Madrasah Al Husna Rt04/Rw02, Lebak Bulus, Cilandak, Jakarta Selatan</Text>
            <Text>Email: Admin@baxdigital.com | Phone: +62 881 0112 19626</Text>
          </Box>
        </Box>
      </Box> */}
    </>
  );
};

export default Footer;
