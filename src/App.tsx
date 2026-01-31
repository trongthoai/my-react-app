import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import AppLayout from "./layout/AppLayout";
import { getTheme } from "./theme/theme";

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
};

export default App;
