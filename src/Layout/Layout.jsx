import { Stack } from "@chakra-ui/react";

import DataProvider from "../Providers/DataProvider";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <DataProvider>
            <Stack
                alignItems={"center"}
                h={"100%"}
                justifyContent={"center"}
                left={0}
                margin={"auto"}
                maxW={"600px"}
                p={6}
                position={"absolute"}
                right={0}
                spacing={12}
                w={"100%"}
            >
                <Header />
                <Card />
                <Footer />
            </Stack>
        </DataProvider>
    );
};

export default Layout;
