import { Component, Input, ViewChild } from '@angular/core';
import { MatTooltip, TooltipPosition, TooltipTouchGestures } from '@angular/material/tooltip';

@Component({
  selector: 'syncron-sdk-components-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() disabled!: boolean;
  @Input() hideDelay!: number;
  @Input() position: TooltipPosition = 'below';
  @Input() showDelay!: number;
  @Input() tooltipClass = '';
  @Input() touchGestures!: TooltipTouchGestures;
  @Input() message = '';
  @ViewChild('tooltip') tooltip!: MatTooltip;
}
