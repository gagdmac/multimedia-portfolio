import { Component, ElementRef, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { SharedService } from '../../shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private elementRef: ElementRef,
    public sharedService: SharedService
  ) {}

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
