import React, { useEffect, lazy, Suspense } from "react";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Spinner } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

// Lazy load the Login and Signup components
const Login = lazy(() => import("../components/Authentication/Login"));
const Signup = lazy(() => import("../components/Authentication/Signup"));

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Suspense fallback={<Spinner size="xl" />}>
                <Login />
              </Suspense>
            </TabPanel>
            <TabPanel>
              <Suspense fallback={<Spinner size="xl" />}>
                <Signup />
              </Suspense>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
