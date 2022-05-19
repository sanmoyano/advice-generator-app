import { Button, Stack, Text, StackDivider, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Card = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const diverColor = useColorModeValue("gray.700", "gray.100");

    return (
        <Stack
            alignItems="center"
            bgColor={bgColor}
            borderRadius={"xl"}
            divider={<StackDivider borderColor={diverColor} />}
            p={4}
        >
            <Stack alignItems="center" p={4} spacing={8}>
                <Text textAlign={"cente"}>advice #100</Text>
                <Text textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis,
                    unde itaque numquam ducimus distinctio! Magnam perferendis sequi rem minus.
                </Text>
            </Stack>
            <Stack bgColor={"red.500"} margin={"auto"} position={"relative"} top={"35px"}>
                <Button>DADO</Button>
            </Stack>
        </Stack>
    );
};

export default Card;
