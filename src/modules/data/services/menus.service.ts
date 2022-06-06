import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu, MenuHeader, MenuChildren } from '../models';

const menus2: MenuHeader[] = [
  {
    id: 1,
    text: "Core",
    menus: [
      {
        id: 1,
        text: "Menu 1",
        anyChildren: true,
        children: [
          {
            id: 1,
            text: "Children 1",
            link: "children_1",
            isActive: true
          },
          {
            id: 2,
            text: "Children 2",
            link: "children_2",
            isActive: true
          },
          {
            id: 3,
            text: "Children 3",
            link: "children_3",
            isActive: true
          }
        ],
        link: "menu_1",
        icon: "fab fa-airbnb",
        isActive: true
      },
      {
        id: 2,
        text: "Menu 2",
        anyChildren: false,
        children: [],
        link: "menu_2",
        icon: "fab fa-airbnb",
        isActive: true
      },
    ],
    isActive: true
  },
  {
    id: 2,
    text: "Pages",
    menus: [
      {
        id: 3,
        text: "Menu 3",
        anyChildren: true,
        children: [
          {
            id: 4,
            text: "Children 4",
            link: "children_4",
            isActive: true
          },
          {
            id: 5,
            text: "Children 5",
            link: "children_5",
            isActive: true
          },
          {
            id: 6,
            text: "Children 6",
            link: "children_6",
            isActive: true
          },
          {
            id: 7,
            text: "Children 7",
            link: "children_7",
            isActive: true
          },
        ],
        link: "menu_3",
        icon: "fab fa-airbnb",
        isActive: true
      }
    ],
    isActive: true
  }
]

const menus: MenuHeader[] = [
  {
    id: 0,
    text: "Inicio",
    menus: [
      {
        id: 0,
        text: "Menú Principal",
        anyChildren: false,
        children: [],
        link: "/dashboard/home",
        icon: "fas fa-home",
        isActive: true,
      },
      {
        id: 100,
        text: "Dark",
        anyChildren: false,
        children: [],
        link: "/dashboard/dark",
        icon: "fas fa-home",
        isActive: true,
      },
      {
        id: 101,
        text: "Simple",
        anyChildren: false,
        children: [],
        link: "/dashboard/simple",
        icon: "fas fa-home",
        isActive: true,
      },
    ],
    isActive: true
  },
  {
    id: 1,
    text: "Negocio",
    menus: [
      {
        id: 1,
        text: "Clientes",
        anyChildren: true,
        children: [
          {
            id: 1,
            text: "Crear",
            link: "/customers/new",
            isActive: true,
          },
          {
            id: 2,
            text: "Buscar",
            link: "/customers/search",
            isActive: true,
          },
        ],
        link: "",
        icon: "fas fa-sun",
        isActive: true,
      },
      {
        id: 2,
        text: "Ventas",
        anyChildren: true,
        children: [
          {
            id: 3,
            text: "POS",
            link: "/sales/pos",
            isActive: true,
          },
          {
            id: 4,
            text: "Buscar",
            link: "/sales/search",
            isActive: true,
          },
          {
            id: 5,
            text: "Devoluciones",
            link: "/sales/return",
            isActive: true,
          },
        ],
        link: "",
        icon: "fas fa-shopping-cart",
        isActive: true,
      },
      {
        id: 3,
        text: "Cobranza",
        anyChildren: true,
        children: [
          {
            id: 6,
            text: "General",
            link: "/payments/default",
            isActive: true,
          },
          {
            id: 7,
            text: "Programados",
            link: "/payments/schedule",
            isActive: true,
          },
          {
            id: 8,
            text: "Pendientes",
            link: "/payments/pending",
            isActive: true,
          },
          {
            id: 9,
            text: "Acuerdos",
            link: "/payments/agreement",
            isActive: true,
          },
        ],
        link: "",
        icon: "fas fa-motorcycle",
        isActive: true,
      },
      {
        id: 4,
        text: "Inventario",
        anyChildren: false,
        children: [],
        link: "/inventory/search",
        icon: "fas fa-boxes",
        isActive: true,
      },
    ],
    isActive: true
  },
  {
    id: 2,
    text: "Administrativo",
    menus: [
      {
        id: 5,
        text: "Contabilidad",
        anyChildren: true,
        children: [
          {
            id: 10,
            text: "Activos",
            link: "/accounting/assets",
            isActive: true,
          },
          {
            id: 11,
            text: "Pasivos",
            link: "/accounting/liability",
            isActive: true,
          },
          {
            id: 12,
            text: "Ingresos",
            link: "/accounting/revenue",
            isActive: true,
          },
          {
            id: 13,
            text: "Gastos",
            link: "/accounting/expenses",
            isActive: true,
          },
          {
            id: 14,
            text: "Patrimonio",
            link: "/accounting/equity",
            isActive: true,
          },
          {
            id: 15,
            text: "Calculador",
            link: "/accounting/calculate",
            isActive: true,
          },
        ],
        link: "",
        icon: "fas fa-dollar-sign",
        isActive: true,
      },
      {
        id: 6,
        text: "Nómina",
        anyChildren: true,
        children: [
          {
            id: 16,
            text: "Empleados",
            link: "/payroll/employees",
            isActive: true,
          },
          {
            id: 17,
            text: "Parámetros",
            link: "/payroll/parameters",
            isActive: true,
          },
        ],
        link: "",
        icon: "far fa-credit-card",
        isActive: true,
      },
      {
        id: 7,
        text: "Reportes",
        anyChildren: true,
        children: [
          {
            id: 18,
            text: "Clientes",
            link: "/reports/customers",
            isActive: true,
          },
          {
            id: 19,
            text: "Pagos",
            link: "/reports/pay",
            isActive: true,
          },
          {
            id: 20,
            text: "Cartera",
            link: "/reports/wallet",
            isActive: true,
          },
        ],
        link: "",
        icon: "far fa-file-alt",
        isActive: true,
      },
      {
        id: 8,
        text: "Configuraciones",
        anyChildren: true,
        children: [
          {
            id: 21,
            text: "Tarifas",
            link: "/parameters/rate",
            isActive: true,
          },
          {
            id: 22,
            text: "Vendedores",
            link: "/parameters/sellers",
            isActive: true,
          },
          {
            id: 23,
            text: "Proveedores",
            link: "/parameters/suppliers",
            isActive: true,
          },
          {
            id: 24,
            text: "Documentos",
            link: "/parameters/documents",
            isActive: true,
          },
          {
            id: 25,
            text: "Estados",
            link: "/parameters/states",
            isActive: true,
          },

        ],
        link: "",
        icon: "fas fa-cog",
        isActive: true,
      },
      {
        id: 9,
        text: "Usuarios",
        anyChildren: true,
        children: [
          {
            id: 26,
            text: "Crear",
            link: "/users/new",
            isActive: true,
          },
          {
            id: 27,
            text: "Buscar",
            link: "/users/search",
            isActive: true,
          },
          {
            id: 28,
            text: "Parámetros",
            link: "/users/parameters",
            isActive: true,
          },
          {
            id: 29,
            text: "Roles",
            link: "/users/roles",
            isActive: true,
          },
          {
            id: 30,
            text: "Permisos",
            link: "/users/permits",
            isActive: true,
          },
        ],
        link: "",
        icon: "fas fa-users",
        isActive: true,
      },
    ],
    isActive: true
  },
  {
    id: 3,
    text: "General",
    menus: [
      {
        id: 10,
        text: "Acerca de...",
        anyChildren: false,
        children: [],
        link: "/about",
        icon: "far fa-address-card",
        isActive: true,
      },
      {
        id: 11,
        text: "Contraseña",
        anyChildren: false,
        children: [],
        link: "/password",
        icon: "fas fa-unlock-alt",
        isActive: true,
      },
      {
        id: 12,
        text: "Cerrar Sesión",
        anyChildren: false,
        children: [],
        link: "/out",
        icon: "fas fa-sign-out-alt",
        isActive: true,
      },
    ],
    isActive: true
  }
]

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  get menus$(): Observable<MenuHeader[]> {
    return of(menus);
  }
}

