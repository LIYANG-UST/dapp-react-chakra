import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";
import NFTCard from "./NFTCard";
import DegisMonitor from "./DegisMonitor";

const Dashboard = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <NFTCard name={"hello"} count={1} />
          <DegisMonitor />
        </VStack>
      </Grid>
    </Box>
  );
};

export default Dashboard;
