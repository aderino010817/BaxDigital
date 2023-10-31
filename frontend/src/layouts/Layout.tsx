import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
// import logo from "../assets/Image/LogoBax.png";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

interface LayoutHome {
  children: ReactNode;
}

export default function Layout({ children }: LayoutHome) {
  return (
    <>
      <Box>
        <NavBar />
        {children}
        <Footer />
      </Box>
    </>
  );
}
