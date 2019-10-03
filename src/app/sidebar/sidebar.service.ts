import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'general',
      type: 'header'
    },
    {
      title: 'Listados',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      // badge: {
      //   text: 'New ',
      //   class: 'badge-warning'
      // },
      submenus: [
        {
          title: 'Auditoria',
          // badge: {
          //   text: 'Pro ',
          //   class: 'badge-success'
          // }
        },
        {
          title: 'Plan de Mejora'
        },
        {
          title: 'Hoja de Mejora'
        },
        {
          title: 'Mejoras'
        }
      ]
    },
    {
      title: 'Mis Grupos',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'simple',
      // badge: {
      //   text: '3',
      //   class: 'badge-danger'
      // },
      // submenus: [
      //   {
      //     title: 'Products',
      //   },
      //   {
      //     title: 'Orders'
      //   },
      //   {
      //     title: 'Credit cart'
      //   }
      // ]
    },
    {
      title: 'Exportacion',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Plan de Mejora',
        }
      ]
    },
    {
      title: 'Configuracion',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Edicion de Celulas',
        },
        {
          title: 'Edicion de Tipos de No Conformidades'
        },
        {
          title: 'Edicion de Sectores'
        },
        {
          title: 'Edicion de Temas'
        },
        {
          title: 'Edicion de Estados por Documento',
        },
        {
          title: 'Edicion de Propiedades por Documento'
        },
        {
          title: 'Sabores'
        },
        {
          title: 'Empaques'
        },
        {
          title: 'Mejoras'
        },
        {
          title: 'Edicion de Tipos de Mejoras'
        }
      ]
    },
    {
      title: 'Ayuda',
      icon: 'fa fa-globe',
      active: false,
      type: 'simple',
    },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Examples',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
    // }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
