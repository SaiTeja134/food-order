import { Component } from '@angular/core';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

export interface Item  { name: string, email: string, phone: string, amount: number, status: boolean }

@Component({
  selector: 'app-payments',
  standalone: false,
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  error:string | null = '';
  getPaymentResult: any[] = [];
  getPaymentCount: number = 0;
  searchTerm='';
  constructor(private service:AdminflowserviceService ) {}

  dataSource: any[] = [];
  ngOnInit(): void {
    this.getPaymentData()
  }
  getPaymentData(){
     this.service.getPayment().subscribe((res: { [x: string]: any; })=>{
       if(!res['error']){
        this.getPaymentResult = res['data']
        const data = this.getPaymentResult;
        console.log(data);
        let count = 0
        this.getPaymentResult.forEach((element: { [x: string]: number; }) => {
          count = count+element['totalPrice']
        });
        this.getPaymentCount = count
        this.dataSource = data
        this.error = null
      }else{
        this.error = "No Data Found."
      }

     })
  }

  sortedColumn: string = '';
  sortOrder: string = 'asc';
  maxPageButtons: number = 3;

  sortBy(column: string) {
    if (this.sortedColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortOrder = 'asc';
    }
  }
  currentPage: number = 1;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [5, 10, 20];
  get totalPages(): number {
    return Math.ceil(this.dataSource.length / this.itemsPerPage);
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  setItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }
  get totalPagesArray(): number[] {
    const totalPageCount = this.totalPages;
    const totalPagesArray: number[] = [];

    for (let i = 1; i <= totalPageCount; i++) {
      totalPagesArray.push(i);
    }

    return totalPagesArray;
  }
  getCurrentPageDataSorted(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentPageData = this.dataSource.slice(startIndex, endIndex);

    return currentPageData.sort((a, b) => {
      if (this.sortedColumn) {
        const aValue = a[this.sortedColumn];
        const bValue = b[this.sortedColumn];

        if (this.sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      } else {
        return 0;
      }
    });
  }
  getPageButtons(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPageButtons = this.maxPageButtons;
    const halfButtons = Math.floor(maxPageButtons / 2);

    if (totalPages <= maxPageButtons) {
      return Array(totalPages).fill(0).map((_, i) => i + 1);
    } else if (currentPage <= halfButtons) {
      return Array(maxPageButtons).fill(0).map((_, i) => i + 1);
    } else if (currentPage >= totalPages - halfButtons) {
      return Array(maxPageButtons).fill(0).map((_, i) => totalPages - maxPageButtons + i + 1);
    } else {
      const start = currentPage - halfButtons;
      const end = currentPage + halfButtons;
      return Array(maxPageButtons).fill(0).map((_, i) => start + i);
    }
  }
}
