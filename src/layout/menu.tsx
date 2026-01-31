import {
  People,
  List,
  Person,
  Security,
  Settings,
} from '@mui/icons-material';

export type MenuItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    key: 'users',
    label: 'Users',
    icon: <People />,
    children: [
      {
        key: 'user-list',
        label: 'User List',
        icon: <List />,
        path: '/users',
      },
      {
        key: 'user-detail',
        label: 'User Detail',
        icon: <Person />,
        children: [
          {
            key: 'user-security',
            label: 'Security',
            icon: <Security />,
            path: '/users/security',
          },
        ],
      },
    ],
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Settings />,
    path: '/settings',
  },
];