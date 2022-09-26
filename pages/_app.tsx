import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/outfit";

const theme = extendTheme({
	colors: {
		transparent: "transparent",
		primary: "#8C2DFF",
		secondary: "#2C2E3D",
		darkbg: "#1F1D2C",
	},
	fonts: {
		heading: `'Outfit', sans-serif;`,
		body: `'Outfit', sans-serif`,
	},
	styles: {
		global: {
			body: {
				bg: "darkbg",
				color: "gray.100",
			},
			"&::-webkit-scrollbar": {
				width: "4px",
			},
			"&::-webkit-scrollbar-track": {
				width: "6px",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "gray.600",
				borderRadius: "24px",
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
