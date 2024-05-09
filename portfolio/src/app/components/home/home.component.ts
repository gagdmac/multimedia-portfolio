import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  //call function Oninit
  ngOnInit() {
    this.animateSquare();
  }

  //Animejs function
  animateSquare() {
    const square = document.querySelector('.square');
    anime({
      targets: square,
      translateX: '250px',

      rotate: '1turn',
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
}
