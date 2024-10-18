import React, { useState, lazy, Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

// Lazy load the Chatbox, MyChats, and SideDrawer components
const Chatbox = lazy(() => import("../components/Chatbox"));
const MyChats = lazy(() => import("../components/MyChats"));
const SideDrawer = lazy(() => import("../components/miscellaneous/SideDrawer"));

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <Suspense fallback={<Spinner size="xl" />}>
          <SideDrawer />
        </Suspense>
      )}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <Suspense fallback={<Spinner size="xl" />}>
            <MyChats fetchAgain={fetchAgain} />
          </Suspense>
        )}
        {user && (
          <Suspense fallback={<Spinner size="xl" />}>
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Suspense>
        )}
      </Box>
    </div>
  );
};import React, { useState, lazy, Suspense } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

// Lazy load the Chatbox, MyChats, and SideDrawer components
const Chatbox = lazy(() => import("../components/Chatbox"));
const MyChats = lazy(() => import("../components/MyChats"));
const SideDrawer = lazy(() => import("../components/miscellaneous/SideDrawer"));

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <Suspense fallback={<Spinner size="xl" />}>
          <SideDrawer />
        </Suspense>
      )}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <Suspense fallback={<Spinner size="xl" />}>
            <MyChats fetchAgain={fetchAgain} />
          </Suspense>
        )}
        {user && (
          <Suspense fallback={<Spinner size="xl" />}>
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Suspense>
        )}
      </Box>
    </div>
  );
};

export default Chatpage;


export default Chatpage;


