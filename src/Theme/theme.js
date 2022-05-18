import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
    },

    fonts: {
        body: "Roboto, sans-serif",
    },

    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
            },
        },
    },
});
