import { Component, OnInit } from '@angular/core';
import * as dataServices from '@modules/data/services';

@Component({
  selector: 'app-top-nav-alerts',
  templateUrl: './top-nav-alerts.component.html',
  styleUrls: ['./top-nav-alerts.component.scss']
})
export class TopNavAlertsComponent implements OnInit {
  countAlerts: number = 0;

  constructor(public alertsService: dataServices.AlertsService) { }

  ngOnInit(): void {
    this.alertsService.alerts$.subscribe(
      (result) => {
        this.countAlerts = result.length;
      }
    );
  }

}
