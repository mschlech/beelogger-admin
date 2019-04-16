import { Component } from '@angular/core';

@Component({
  selector: 'ngx-humidity-ball-card',
  styleUrls: ['./humidity-ball-card.component.scss'],
  templateUrl: './humidity-ball-card.component.html',
})
export class HumidityBallCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
