import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Environment } from '../models';

const environment: Environment[] = [
  {
    id: 1,
    app: 'avo',
    name: 'Avo',
    version: '1.0',
    author: 'Jhonatan Guerrero',
    years: '2018 - 2022',
    indexName: 'Avo - Inicio'
  }
];

@Injectable()
export class EnvironmentService {

  constructor() { }

  get environment$(): Observable<Environment[]> {
    return of(environment);
  }
}
