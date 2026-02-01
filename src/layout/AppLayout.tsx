import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import TopAppBar from "./TopAppBar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 72;

const AppLayout: React.FC<AppLayoutProps> = ({ mode, setMode }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <TopAppBar
        mode={mode}
        setMode={setMode}
        onToggleSidebar={() => setCollapsed(prev => !prev)}
      />

      <Sidebar
        collapsed={collapsed}
        width={DRAWER_WIDTH}
        collapsedWidth={COLLAPSED_WIDTH}
        selected={selected}
        setSelected={setSelected}
      />

      {/* ✅ FIX TẠI ĐÂY */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme =>
            theme.transitions.create("all", {
              duration: theme.transitions.duration.standard,
            }),
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
