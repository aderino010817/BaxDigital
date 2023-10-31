import { Image, Stack } from "@chakra-ui/react";
import laptop from "../assets/Image/laptop.gif";
import Layout from "../layouts/Layout";

export default function Tester() {
  return (
    <>
      <Layout>
        <Stack mt={"8vh"}>
          <Image src={laptop} />
        </Stack>
      </Layout>
    </>
  );
}
