import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import type { SidebarMenuItem } from "./types";

interface SidebarItemProps {
  item: SidebarMenuItem;
  collapsed: boolean;
  level: number;
  selected: string;
  setSelected: (id: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  collapsed,
  level,
  selected,
  setSelected
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <>
      <ListItemButton
        selected={selected === item.id}
        onClick={() => {
          setSelected(item.id);
          if (hasChildren) setOpen((prev) => !prev);
        }}
        sx={{
          pl: collapsed ? 1.5 : 2 + level * 2,
          justifyContent: collapsed ? "center" : "flex-start",
          "&.Mui-selected": {
            bgcolor: "primary.main",
            color: "#fff",
            "& .MuiListItemIcon-root": {
              color: "#fff"
            }
          }
        }}
      >
        {item.icon && (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: collapsed ? 0 : 2,
              justifyContent: "center"
            }}
          >
            {item.icon}
          </ListItemIcon>
        )}

        {!collapsed && <ListItemText primary={item.label} />}

        {!collapsed && hasChildren &&
          (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto">
          <List disablePadding>
            {item.children!.map((child) => (
              <SidebarItem
                key={child.id}
                item={child}
                collapsed={collapsed}
                level={level + 1}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
