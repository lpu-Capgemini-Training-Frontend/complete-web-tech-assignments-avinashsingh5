import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [CommonModule, FormsModule, CustomerDetailsComponent],
})
export class CustomerListComponent {
  customers: Customer[] = [
  {
    id: 1,
    name: 'Ankit Verma',
    address: 'Noida',
    email: 'ankit.verma@example.com',
    phone: '9123456780',
    dateOfBirth: '12-03-1992',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    address: 'Ahmedabad',
    email: 'priya.mehta@example.com',
    phone: '9988776655',
    dateOfBirth: '25-07-1994',
  },
  {
    id: 3,
    name: 'Karan Malhotra',
    address: 'Chandigarh',
    email: 'karan.m@example.com',
    phone: '8899776655',
    dateOfBirth: '10-11-1990',
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    address: 'Delhi',
    email: 'neha.kapoor@example.com',
    phone: '7766554433',
    dateOfBirth: '18-01-1995',
  },
  {
    id: 5,
    name: 'Rohit Patil',
    address: 'Nagpur',
    email: 'rohit.patil@example.com',
    phone: '8877665544',
    dateOfBirth: '09-09-1993',
  },
  {
    id: 6,
    name: 'Sneha Iyer',
    address: 'Bangalore',
    email: 'sneha.iyer@example.com',
    phone: '7788996655',
    dateOfBirth: '30-06-1996',
  },
  {
    id: 7,
    name: 'Arjun Reddy',
    address: 'Hyderabad',
    email: 'arjun.reddy@example.com',
    phone: '9090909090',
    dateOfBirth: '14-02-1991',
  },
  {
    id: 8,
    name: 'Meera Nair',
    address: 'Kochi',
    email: 'meera.nair@example.com',
    phone: '8080808080',
    dateOfBirth: '22-08-1997',
  }
];

  filteredCustomers: Customer[] = [...this.customers];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  searchQuery: string = '';

  get paginatedCustomers(): Customer[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCustomers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
  }

  onSearch(): void {
    this.filteredCustomers = this.customers.filter((customer) =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
    this.currentPage = 1;
  }
}
