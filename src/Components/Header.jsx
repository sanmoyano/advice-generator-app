import { Button, Icon, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FcIdea } from "react-icons/fc";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const { toggleColorMode } = useColorMode();
    const icons = useColorModeValue(BsFillSunFill, BsFillMoonFill);

    return (
        <Stack direction={"row"} justifyContent={"space-between"} w={"100%"}>
            <Stack alignItems={"center"} direction={"row"} spacing={6}>
                <Icon as={FcIdea} fontSize={"4xl"} />
                <Text as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
                    advice generator
                </Text>
            </Stack>

            <Stack>
                <Button onClick={toggleColorMode}>
                    <Icon as={icons} />
                </Button>
            </Stack>
        </Stack>
    );
};

export default Header;
