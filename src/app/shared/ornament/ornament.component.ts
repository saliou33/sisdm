import { Component, Input } from "@angular/core";

@Component({
  selector: 'ornament',
  template: `
    <svg-icon src={{src}} [svgClass]="fill"></svg-icon>
  `
})
export class OrnamentComponent {
  @Input() src:string = '';
  @Input() fill: string = 'fill-neutral1'
}
