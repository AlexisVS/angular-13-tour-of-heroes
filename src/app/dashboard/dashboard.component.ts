import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero/hero";
import {HeroService} from "../hero/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
