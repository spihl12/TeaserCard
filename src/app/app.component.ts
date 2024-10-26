import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeartComponent } from "./heart/heart.component";
import _config from '../assets/data/config.json'
import _teaserData from '../assets/data/teaserData.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teaser-card-project';
  config = _config;
  teaserData = _teaserData;
  maxRating: number = 6;
  heartOpacityArray: number[] = [];
  headerFontSize!: string;

  constructor() {
    this.headerFontSize = this.config.teaserOptions[0]?.fontSizeOption ?? "22px";

    for (let i = 0; i < this.maxRating; i++) {
      this.heartOpacityArray.push(i < this.teaserData.article.rating.score ? 1 : 0.3);
    }
  }

  changeHeadlineFontSize(fontSize:string) {
    this.headerFontSize = fontSize;
  }
}