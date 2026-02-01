import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import type { MenuItem } from '../layout/menu';

interface SidebarItemProps {
  item: MenuItem;
  collapsed: boolean;
  level: number;
  pathname: string;
  onNavigate: (path: string) => void;
}

const isActiveRoute = (route?: string, pathname?: string) => {
  if (!route || !pathname) return false;
  return pathname.startsWith(route.replace('/:id', ''));
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  collapsed,
  level,
  pathname,
  onNavigate,
}) => {
  const [open, setOpen] = useState(false);

  const active = isActiveRoute(item.path, pathname);

  const handleClick = () => {
    if (item.children?.length) {
      setOpen((prev) => !prev);
    } else if (item.path) {
      onNavigate(item.path);
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={active}
        sx={{
          pl: collapsed ? 1.5 : 2 + level * 2,
          justifyContent: collapsed ? 'center' : 'flex-start',
          "&.Mui-selected": {
            bgcolor: "primary.main",
            color: "#fff",
            "& .MuiListItemIcon-root": {
              color: "#fff"
            }
          }
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: collapsed ? 0 : 2,
            justifyContent: 'center',
          }}
        >
          {item?.icon}
        </ListItemIcon>

        {!collapsed && <ListItemText primary={item.label} />}

        {!collapsed && item.children && (
          open ? <ExpandLess /> : <ExpandMore />
        )}
      </ListItemButton>

      {item.children && (
        <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
          {item.children.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              collapsed={collapsed}
              level={level + 1}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
