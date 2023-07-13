import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  isNavbarFixed = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isNavbarFixed = window.pageYOffset > 200;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
