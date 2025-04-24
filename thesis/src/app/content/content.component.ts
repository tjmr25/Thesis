import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  testimonials = [
    {
      name: 'Anna Schmidt',
      text: 'Die Pferdeversicherung der LVM hat mir in einer schwierigen Situation sehr geholfen. Der Service war ausgezeichnet!',
      rating: 5
    },
    {
      name: 'Mohammed Al-Rashid',
      text: 'Schnelle Bearbeitung und faire Abwicklung. Kann ich nur empfehlen!',
      rating: 4
    },
    {
      name: 'Lisa Weber',
      text: 'Die beste Versicherung für mein Pferd. Der Kundenservice ist immer erreichbar und sehr hilfsbereit.',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      text: 'Transparente Bedingungen und schnelle Auszahlung. Sehr zufrieden!',
      rating: 5
    },
    {
      name: 'Sophie van der Meer',
      text: 'Die LVM hat mir bei der Behandlung meines Pferdes alle Kosten erstattet. Top Service!',
      rating: 5
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getVisibleTestimonials() {
    const indices = [
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length,
      this.currentIndex,
      (this.currentIndex + 1) % this.testimonials.length
    ];
    return indices.map(i => this.testimonials[i]);
  }
}