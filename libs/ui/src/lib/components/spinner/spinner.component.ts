import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'syncron-sdk-components-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() message = 'loading...'
  @Input() value = 100;
  @Input() diameter = 50;
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth = 5;
  @Input() overlay = false;
  @Input() color = 'blue';
  @Input() loading = false;
}
