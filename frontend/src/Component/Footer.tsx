import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgColor="#f5f5fa"
      borderTop="1px solid gray"
      py={4}
      textAlign="center"
    >
      <Text fontSize="1rem" color="teal">
        © 2023 BAX Digital. All Rights Reserved.
      </Text>
      <Text fontSize="0.8rem" color="gray" mt={2}>
        Jl. Madrasah Al Husna Rt04/Rw02, Lebak Bulus, Cilandak, Jakarta Selatan.
      </Text>
      <Text fontSize="0.8rem" color="gray">
        Email: Admin@baxdigital.com | Phone: +62 881 0112 19626
      </Text>
    </Box>
  );
};

export default Footer;
