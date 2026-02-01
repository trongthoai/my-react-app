import {
  Dashboard,
  Settings,
  AccountCircle,
  Security
} from "@mui/icons-material";
import type { SidebarMenuItem } from "./types";
import MovieIcon from '@mui/icons-material/Movie';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const menuConfig: SidebarMenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: "movies",
    label: "Movies",
    icon: <MovieIcon />,
    path: "/movies",
  },
  {
    id: "comics",
    label: "Comics",
    icon: <ImportContactsIcon />,
    path: "/comics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings />,
    children: [
      {
        id: "profile",
        label: "Profile",
        icon: <AccountCircle />,
        path: "/settings/profile",
      },
      {
        id: "security",
        label: "Security",
        icon: <Security />,
        children: [
          { id: "password", label: "Password", path: "/settings/security/password" },
          { id: "2fa", label: "Two Factor Auth", path: "/settings/security/2fa" }
        ]
      }
    ]
  }
];
