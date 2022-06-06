import { MessagesService } from './messages.service';
import { AlertsService } from './alerts.service';
import { EnvironmentService } from './environment.service';
import { MenusService } from './menus.service';

export const services = [
  MessagesService,
  AlertsService,
  EnvironmentService,
  MenusService,
];

export * from './messages.service';
export * from './alerts.service';
export * from './environment.service';
export * from './menus.service';