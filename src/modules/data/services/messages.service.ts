import { Injectable } from '@angular/core';
import { Message } from '../models';
import { Observable, of } from 'rxjs';

const messages: Message[] = [
  {
    id: 1,
    image: '/assets/img/illustrations/profiles/pp.jpg',
    text: `Hola, este es un mensaje recordatorio que tiene para validar las tareas que tiene pendientes. Rebice su página de requerimientos`,
    details: 'Jhonatan Guerrero · 24s',
  },
  {
    id: 2,
    image: '/assets/img/illustrations/profiles/profile-3.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    details: 'Emily Fowler · 58m',
  },
  {
    id: 3,
    image: '/assets/img/illustrations/profiles/profile-6.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    details: 'Diane Chambers · 2d',
  },
];

@Injectable()
export class MessagesService {
  constructor() { }

  get messages$(): Observable<Message[]> {
    return of(messages);
  }
}
