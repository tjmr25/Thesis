import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FirstComponent } from './calculator/first/first.component';
import { SecondComponent } from './calculator/second/second.component';
import { ThirdComponent } from './calculator/third/third.component';
import { FourthComponent } from './calculator/fourth/fourth.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { 
    path: 'calculator', 
    component: CalculatorComponent,
    children: [
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: 'third', component: ThirdComponent },
      { path: 'fourth', component: FourthComponent }
    ]
  }
];
