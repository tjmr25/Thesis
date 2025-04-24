import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  selectedPlan: string = '';
  
  // New health questions
  hasSymptoms: string = '';
  hadTreatment: string = '';
  isFromAbroad: string = '';
}
