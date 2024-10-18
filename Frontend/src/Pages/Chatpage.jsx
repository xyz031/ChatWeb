import React, { useState, lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
const Chatbox = lazy(() => import("../components/Chatbox"));
const MyChats = lazy(() => import("../components/MyChats"));
const SideDrawer = lazy(() => import("../components/miscellaneous/SideDrawer"));


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;