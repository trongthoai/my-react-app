import type { ReactNode } from "react";


export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: SidebarMenuItem[];
  path?: string;
}
