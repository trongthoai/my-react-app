import {
  People,
  List,
  Person,
  Security,
  Settings,
} from '@mui/icons-material';

export type MenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    id: 'users',
    label: 'Users',
    icon: <People />,
    children: [
      {
        id: 'user-list',
        label: 'User List',
        icon: <List />,
        path: '/users',
      },
      {
        id: 'user-detail',
        label: 'User Detail',
        icon: <Person />,
        children: [
          {
            id: 'user-security',
            label: 'Security',
            icon: <Security />,
            path: '/users/security',
          },
        ],
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    path: '/settings',
  },
];