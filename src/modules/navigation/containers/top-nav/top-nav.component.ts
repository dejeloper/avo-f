import { Component, OnInit } from '@angular/core';
import * as dataServices from '@modules/data/services';
import * as navigationServices from '@modules/navigation/services';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(
    public environmentService: dataServices.EnvironmentService,
    private navigationService: navigationServices.NavigationService
  ) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navigationService.toggleSideNav();
  }

}
