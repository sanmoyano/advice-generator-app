import { Stack, Text, StackDivider, useColorModeValue, Icon, Box, Button } from "@chakra-ui/react";
import { BsFillDice5Fill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Card = () => {
    const bgColor = useColorModeValue("secondary.100", "secondary.700");
    const diverColor = useColorModeValue("secondary.700", "secondary.100");

    const [textAdvice, setTextAdvice] = useState([]);

    const END_POINT = "	https://api.adviceslip.com/advice";

    const fetchData = async () => {
        const res = await fetch(END_POINT);
        const data = await res.json();

        setTextAdvice(data.slip); //cuando tengo un array de objetos, puedo usar el nombre del objeto para acceder a sus propiedades y pasarlos al state y llamarlas estado.propiedad
    };

    useEffect(() => {
        fetchData();
    }, []);

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
