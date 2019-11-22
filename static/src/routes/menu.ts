export interface MenuProperty {
  id: string;
  title: string;
  type: string;
  icon?: string;
  url?: string;
  badge?: Badge;
  breadcrumbs?: boolean;
}

export interface Badge {
  title: string;
  type: string;
}

export interface MenuChild extends MenuProperty {
  external?: boolean;
  target?: string;
  children?: MenuChild[];
}

export interface MenuParent extends MenuProperty {
  children: MenuChild[];
}

export interface MenuModule extends MenuProperty {
  children: MenuParent[];
}

export type Menu = {
  items: MenuModule[];
};

const menu: Menu = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'collapse',
          icon: 'feather icon-home',
          children: [
            {
              id: 'default',
              title: 'Default',
              type: 'item',
              url: '/dashboard/default',
            },
            {
              id: 'sales',
              title: 'Sales',
              type: 'item',
              url: '/dashboard/sales',
            },
            {
              id: 'crypto',
              title: 'Crypto',
              type: 'item',
              url: '/dashboard/crypto',
            },
            {
              id: 'project',
              title: 'Project',
              type: 'item',
              url: '/dashboard/project',
            },
            {
              id: 'helpDesk',
              title: 'HelpDesk',
              type: 'item',
              url: '/dashboard/helpDesk',
              badge: {
                title: 'NEW',
                type: 'label-danger',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default menu;
