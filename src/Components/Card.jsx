import { Stack, Text, StackDivider, useColorModeValue, Icon, Box, Button } from "@chakra-ui/react";
import { BsFillDice5Fill } from "react-icons/bs";
import { useContext } from "react";

import { DataContext } from "../Providers/DataProvider";

const Card = () => {
    const bgColor = useColorModeValue("secondary.100", "secondary.700");
    const diverColor = useColorModeValue("secondary.700", "secondary.100");

    const { textAdvice, fetchData } = useContext(DataContext);

    return (
        <Stack
            alignItems="center"
            bgColor={bgColor}
            borderRadius={"xl"}
            boxShadow="md"
            divider={<StackDivider borderColor={diverColor} />}
            p={4}
        >
            <Stack alignItems="center" p={4} spacing={8}>
                <Text as="h1" color={"primary.400"} fontWeight="bold" textAlign={"cente"}>
                    {"advice #"} {textAdvice.id}
                </Text>
                <Text as={"p"} textAlign={"center"}>
                    {textAdvice.advice}
                </Text>
            </Stack>
            <Stack
                alignItems={"center"}
                bgColor={"primary.400"}
                borderRadius={"full"}
                cursor={"pointer"}
                h={"60px"}
                justifyContent={"center"}
                margin={"auto"}
                position={"relative"}
                top={"45px"}
                w={"60px"}
                onClick={fetchData}
            >
                <Icon as={BsFillDice5Fill} color={bgColor} h={8} w={8} />
            </Stack>
        </Stack>
    );
};

export default Card;
