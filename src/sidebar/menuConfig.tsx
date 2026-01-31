import {
  Dashboard,
  Settings,
  AccountCircle,
  Security
} from "@mui/icons-material";
import type { SidebarMenuItem } from "./types";

export const menuConfig: SidebarMenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Dashboard />
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings />,
    children: [
      {
        id: "profile",
        label: "Profile",
        icon: <AccountCircle />
      },
      {
        id: "security",
        label: "Security",
        icon: <Security />,
        children: [
          { id: "password", label: "Password" },
          { id: "2fa", label: "Two Factor Auth" }
        ]
      }
    ]
  }
];
