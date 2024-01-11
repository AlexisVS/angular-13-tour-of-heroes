import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero/hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  public powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  public model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted: boolean = false;

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  onSubmit() {
    this.submitted = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
