import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {
  currentRoute: string = 'first';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Extract the last part of the URL to determine the current step
      const urlParts = event.url.split('/');
      this.currentRoute = urlParts[urlParts.length - 1];
    });
  }
  
  ngOnInit() {
    // Check current URL on component initialization
    const urlParts = this.router.url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    
    // If we're at the calculator root, mark first step as active
    if (lastPart === 'calculator') {
      this.currentRoute = 'first';
    } else {
      this.currentRoute = lastPart;
    }
  }

  isRouteActive(route: string): boolean {
    // Special case for the calculator root
    if (this.router.url.endsWith('/calculator') && route === 'first') {
      return true;
    }
    return this.currentRoute === route;
  }
}
