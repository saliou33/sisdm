import { Component } from "@angular/core";

@Component({
  selector: 'back',
  template: `
    <button class="absolute top-[20px] left-[20px] btn-back" routerLink="/home">
      <svg-icon src="/assets/images/left-arrow.svg"></svg-icon>
    </button>
  `
})
export class ButtonBackComponent {

}
