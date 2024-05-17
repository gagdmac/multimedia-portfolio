import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  hideElement: boolean = false;

  constructor() {}
}
