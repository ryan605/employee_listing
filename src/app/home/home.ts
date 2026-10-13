import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';


interface Employee {
  'Display ID': string;
  Name: string;
  Email: string;
  Department: string;
  Status: 'Active' | 'Inactive' | 'On Leave';
}


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, Sidebar, Topbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchTerm = '';
  selectedDepartment = '';
  selectedStatus = '';

  employees: Employee[] = [
    {
      'Display ID': 'EMP001',
      Name: 'John Kamau',
      Email: 'john.kamau@example.com',
      Department: 'Software Engineering',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP002',
      Name: 'Grace Wanjiku',
      Email: 'grace.wanjiku@example.com',
      Department: 'Human Resources',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP003',
      Name: 'Brian Otieno',
      Email: 'brian.otieno@example.com',
      Department: 'Finance',
      Status: 'Inactive'
    },
    {
      'Display ID': 'EMP004',
      Name: 'Faith Njeri',
      Email: 'faith.njeri@example.com',
      Department: 'IT Support',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP005',
      Name: 'Kevin Mwangi',
      Email: 'kevin.mwangi@example.com',
      Department: 'Software Engineering',
      Status: 'On Leave'
    },
    {
      'Display ID': 'EMP006',
      Name: 'Mercy Achieng',
      Email: 'mercy.achieng@example.com',
      Department: 'Marketing',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP007',
      Name: 'David Kiptoo',
      Email: 'david.kiptoo@example.com',
      Department: 'Cybersecurity',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP008',
      Name: 'Esther Muthoni',
      Email: 'esther.muthoni@example.com',
      Department: 'Customer Service',
      Status: 'Inactive'
    },
    {
      'Display ID': 'EMP009',
      Name: 'Samuel Ochieng',
      Email: 'samuel.ochieng@example.com',
      Department: 'Data Analytics',
      Status: 'Active'
    },
    {
      'Display ID': 'EMP010',
      Name: 'Lydia Chebet',
      Email: 'lydia.chebet@example.com',
      Department: 'Operations',
      Status: 'On Leave'
    }
  ];

  get departments(): string[] {
    return [...new Set(
      this.employees.map(employee => employee.Department)
    )].sort();
  }

  get filteredEmployees(): Employee[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.employees.filter(employee => {
      const matchesSearch =
        employee.Name.toLowerCase().includes(term) ||
        employee['Display ID'].toLowerCase().includes(term) ||
        employee.Email.toLowerCase().includes(term);

      const matchesDepartment =
        !this.selectedDepartment ||
        employee.Department === this.selectedDepartment;

      const matchesStatus =
        !this.selectedStatus ||
        employee.Status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }

  get activeCount(): number {
    return this.employees.filter(e => e.Status === 'Active').length;
  }

  get inactiveCount(): number {
    return this.employees.filter(e => e.Status === 'Inactive').length;
  }

  get onLeaveCount(): number {
    return this.employees.filter(e => e.Status === 'On Leave').length;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = '';
    this.selectedStatus = '';
  }
}
