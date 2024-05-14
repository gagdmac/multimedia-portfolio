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
        this.animateOnHover(element);
      });

      element.addEventListener('mouseleave', () => {
        this.resetAnimation(element);
      });
    });
  }

  private animateOnHover(element: HTMLElement): void {
    anime({
      targets: element,
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad',
      loop: false,
    });
  }

  private resetAnimation(element: HTMLElement): void {
    anime({
      targets: element,
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 300,
    });
  }
}
