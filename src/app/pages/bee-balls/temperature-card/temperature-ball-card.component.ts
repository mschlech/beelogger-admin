import { Component } from '@angular/core';

@Component({
  selector: 'ngx-temperature-ball-card',
  styleUrls: ['./temperature-ball-card.component.scss'],
  templateUrl: './temperature-ball-card.component.html',
})
export class TemperatureBallCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
