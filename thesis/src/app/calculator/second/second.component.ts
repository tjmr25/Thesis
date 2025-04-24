import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterModule, DecimalPipe],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  
  baseCost: number = 19.90;
  raceCost: number = 5.00;
  ageCost: number = 5.00;
  
  
  get offerAmount(): number {
    return this.baseCost + this.raceCost + this.ageCost;
  }
}
