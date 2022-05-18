import { Stack } from "@chakra-ui/react";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <Stack
            alignItems={"center"}
            h={"100%"}
            justifyContent={"center"}
            margin={"auto"}
            maxW={"600px"}
            spacing={8}
            w={"100%"}
        >
            <Header />
            <Card />
            <Footer />
        </Stack>
    );
};

export default Layout;
