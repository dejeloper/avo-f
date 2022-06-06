export interface MenuHeader {
  id: number;
  text: string;
  menus: Menu[];
  isActive: boolean;
}

export interface Menu {
  id: number;
  text: string;
  anyChildren: boolean;
  children: MenuChildren[];
  link: string;
  icon: string;
  isActive: boolean;
}

export interface MenuChildren {
  id: number;
  text: string;
  link: string;
  isActive: boolean;
}