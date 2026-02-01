import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import { getTheme } from "./theme/theme";
import Dashboard from "./pages/Dashboard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
          <Routes>
            <Route
              element={<AppLayout mode={mode} setMode={setMode} />}
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings/profile" element={<div>Profile</div>} />
              <Route
                path="/settings/security/password"
                element={<div>Password</div>}
              />
              <Route
                path="/settings/security/2fa"
                element={<div>Two Factor Auth</div>}
              />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;