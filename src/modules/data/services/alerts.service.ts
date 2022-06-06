import { Injectable } from '@angular/core';
import { Alert } from '../models';
import { Observable, of } from 'rxjs';

const alerts: Alert[] = [
  {
    id: 1,
    color: 'bg-primary',
    image: 'mail',
    text: `Recordatorio de envío de correo.`,
    details: 'December 29, 2021',
  },
  {
    id: 2,
    color: 'bg-warning',
    image: 'activity',
    text: `This is an alert message. It's nothing serious, but it requires your attention.`,
    details: 'December 29, 2021',
  },
  {
    id: 3,
    color: 'bg-info',
    image: 'bar-chart',
    text: `A new monthly report is ready. Click here to view!`,
    details: 'December 22, 2021',
  },
  {
    id: 4,
    color: 'bg-danger',
    image: 'alert-triangle',
    text: `This is an alert message. It's nothing serious, but it requires your attention.`,
    details: 'December 29, 2021',
  },
  {
    id: 5,
    color: 'bg-success',
    image: 'user-plus',
    text: `New user request. Woody has requested access to the organization.`,
    details: 'December 2, 2021',
  },
  {
    id: 6,
    color: 'bg-secondary',
    image: 'bell',
    text: `This is an alert message. It's nothing serious, but it requires your attention.`,
    details: 'December 29, 2021',
  },
]

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  get alerts$(): Observable<Alert[]> {
    return of(alerts);
  }
}
