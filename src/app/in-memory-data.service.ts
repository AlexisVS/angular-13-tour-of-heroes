import {Injectable} from '@angular/core';
import {Hero} from "./hero/hero";
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  public createDb() {
    const heroes = [
      {id: 11, name: 'Dr Nice', age: 20},
      {id: 12, name: 'Narco', age: 21},
      {id: 13, name: 'Bombasto', age: 22},
      {id: 14, name: 'Celeritas', age: 23},
      {id: 15, name: 'Magneta', age: 24},
      {id: 16, name: 'RubberMan', age: 25},
      {id: 17, name: 'Dynama', age: 26},
      {id: 18, name: 'Dr IQ', age: 27},
      {id: 19, name: 'Magma', age: 28},
      {id: 20, name: 'Tornado', age: 29}
    ];
    return {heroes};
  }

  public genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() {
  }
}
