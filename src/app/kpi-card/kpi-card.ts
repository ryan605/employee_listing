import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  imports: [],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCard {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() change = '';
  @Input() description = 'from last month';
  @Input() trend: 'up' | 'down' = 'up';
}
