import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero/hero";
import {HeroService} from "../hero/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(id: number): void {
    this.heroes = this.heroes.filter(h => h.id !== id)

    this.heroService
      .deleteHero(id)
      .subscribe();
  }
}
