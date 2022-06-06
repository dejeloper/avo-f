import { Component, OnInit } from '@angular/core';
import { MenuHeader } from '@modules/data/models';
import * as dataServices from '@modules/data/services';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.scss']
})
export class SiderNavComponent implements OnInit {
  menus: MenuHeader[] = [];

  isActive = false;
  collapsed: boolean = true;

  constructor(public menuServices: dataServices.MenusService) { }

  ngOnInit(): void {
    this.menuServices.menus$.subscribe(
      (result) => {
        this.menus = result;
      });

  }

  toogle(collapse: string) {
    const nav = document.getElementById('navLink' + collapse);
    if (nav) {
      nav.classList.toggle("collapsed");

      const children = document.getElementById('#collapse_' + collapse);
      if (children) {
        children.classList.toggle("collapsed");
        children.classList.toggle("d-none");

        const active = document.querySelector("a.nav-link.active");
        if (active) {
          active.classList.remove("active");
        }
        nav.classList.toggle("active");
      }
    }
  }
}  