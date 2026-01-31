import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch
} from "@mui/material";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";

interface TopAppBarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  onToggleSidebar: () => void;
}

const TopAppBar: React.FC<TopAppBarProps> = ({
  mode,
  setMode,
  onToggleSidebar
}) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* 🔥 TOGGLE SIDEBAR – LUÔN HIỆN */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2, ml: 0 }}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React MUI TS App
        </Typography>

        <Brightness7 />
        <Switch
          checked={mode === "dark"}
          onChange={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <Brightness4 />
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
