import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { KpiCard } from '../kpi-card/kpi-card';
import { BaseChartDirective } from 'ng2-charts';

import {
  Chart,
  ChartConfiguration,
  ChartData,
  registerables
} from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,Sidebar,KpiCard,BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Line chart: revenue over the year
  revenueData: ChartData<'line'> = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Revenue',
        data: [18000, 22000, 19500, 26000, 24000, 32000,
               28500, 36000, 30000, 34000, 39000, 43000],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.10)',
        fill: true,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 6
      }
    ]
  };

  revenueOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#eef2f7' },
        ticks: {
          callback: (value) => '$' + Number(value).toLocaleString()
        }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  // Bar chart: orders received each month
  ordersData: ChartData<'bar'> = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Orders',
        data: [120, 160, 145, 190, 175, 220,
               205, 250, 215, 270, 290, 320],
        backgroundColor: '#60a5fa',
        hoverBackgroundColor: '#2563eb',
        borderRadius: 6,
        maxBarThickness: 24
      }
    ]
  };

  ordersOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#eef2f7' }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  recentOrders = [
    {
      id: 'ORD-1001',
      customer: 'Jane Wanjiku',
      product: 'Laptop',
      date: '12 Oct 2026',
      amount: 85000,
      status: 'Completed'
    },
    {
      id: 'ORD-1002',
      customer: 'Brian Otieno',
      product: 'Monitor',
      date: '11 Oct 2026',
      amount: 24000,
      status: 'Pending'
    },
    {
      id: 'ORD-1003',
      customer: 'Mary Achieng',
      product: 'Keyboard',
      date: '10 Oct 2026',
      amount: 4500,
      status: 'Processing'
    },
    {
      id: 'ORD-1004',
      customer: 'Kevin Kiptoo',
      product: 'Mouse',
      date: '09 Oct 2026',
      amount: 1800,
      status: 'Completed'
    },
    {
      id: 'ORD-1005',
      customer: 'Faith Njeri',
      product: 'Headphones',
      date: '08 Oct 2026',
      amount: 6500,
      status: 'Cancelled'
    }
  ];
}
