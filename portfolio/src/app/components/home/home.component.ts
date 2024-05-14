import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setupHoverAnimation();
  }

  private setupHoverAnimation(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll(
      '#cabeza, #ojos, #lentes, #cara, #boca'
    ); // Use querySelectorAll

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('mouseenter', () => {
        this.gagdOnHover(element);
      });

      element.addEventListener('mouseleave', () => {
        this.resetgagOnHover(element);
      });
    });
  }

  private gagdOnHover(element: HTMLElement): void {
    anime({
      targets: element,
      opacity: 0,
      duration: 1000,
      easing: 'easeInOutQuad',
      loop: false,
    });
  }

  private resetgagOnHover(element: HTMLElement): void {
    anime({
      targets: element,
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 10000,
    });
  }
}
