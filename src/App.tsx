import * as React from "react";

import { ChakraProvider, theme } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Dashboard></Dashboard>
  </ChakraProvider>
);
