import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = 'text-neutral10';
  @Input() bg: string = 'bg-yellow3';
  @Input() link: string = '#';
  @Input() px: string= 'px-4';
  @Input() py: string = 'py-3';
  @Input() shadow: string = 'sm';
  @Input() hover: string = '';
}
