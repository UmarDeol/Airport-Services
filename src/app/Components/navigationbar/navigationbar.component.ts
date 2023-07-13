import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent {
  isNavbarFixed = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isNavbarFixed = window.pageYOffset > 400;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
