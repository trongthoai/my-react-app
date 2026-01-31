import { Drawer, Divider, List } from "@mui/material";
import { menuConfig } from "../sidebar/menuConfig";
import SidebarItem from "../sidebar/SidebarItem";

interface SidebarProps {
  collapsed: boolean;
  width: number;
  collapsedWidth: number;
  selected: string;
  setSelected: (id: string) => void;
}

const APP_BAR_HEIGHT = 64;

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  width,
  collapsedWidth,
  selected,
  setSelected
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : width,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : width,
          top: `${APP_BAR_HEIGHT}px`,
          height: `calc(100% - ${APP_BAR_HEIGHT}px)`,
          transition: "width 0.3s",
          overflowX: "hidden"
        }
      }}
    >
      <Divider />
      <List>
        {menuConfig.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={collapsed}
            level={0}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
