import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ratings } from '../../models/ratings';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  
  displayedColumns: string[] = ['name', 'email', 'phoneNo', 'rating'];
  dataSource: any[] = [];
  users: any[] = [];
  ratings: any[] = [];
  tableitem: any;
  userRatings: ratings[] = [];
  error!: string | null;
  constructor(private service: UsersService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getRatings(userId: number) {
    console.log(userId);
    this.service.getUserRatingByUserId(userId).subscribe((res) => {
      console.log(res);
      this.userRatings = res.data;
      // this.userRatings = res.data.filter((rating) => rating.email === email);
      // console.log("---------"+this.userRatings[0].email)
    });
  }

  getUserList() {
    this.service.getAllUsers().subscribe(
      (res) => {
        //console.log(res.data);
        if (!res['error']) {
          this.users = res.data;
          this.users = this.users.map((res) => {
            // this.service
            //   .getUserRatingByEmail(res['email'])
            //   .subscribe((rate) => {
            //     const sum = rate['data'].reduce((accumulator, currentValue) => {
            //       return accumulator + currentValue.rating;
            //     }, 0);
            //     res['rating'] =
            //       sum && sum !== '' ? +sum / rate['data'].length : '';
            //   });
            return res;
          });

          if (this.users.length > 0) this.dataSource = this.users;
          this.error = null;
        } else {
          this.error = 'No Data Found';
        }
      },
      (err) => {
        this.toastr.error(err.error.detail);
      }
    );
  }
  filteredData: any[] = [...this.dataSource];
  searchTerm: string = '';
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
      // If there are fewer pages than maxPageButtons, display all pages.
      return Array(totalPages)
        .fill(0)
        .map((_, i) => i + 1);
    } else if (currentPage <= halfButtons) {
      // If current page is near the beginning, display the first maxPageButtons pages.
      return Array(maxPageButtons)
        .fill(0)
        .map((_, i) => i + 1);
    } else if (currentPage >= totalPages - halfButtons) {
      return Array(maxPageButtons)
        .fill(0)
        .map((_, i) => totalPages - maxPageButtons + i + 1);
    } else {
      const start = currentPage - halfButtons;
      const end = currentPage + halfButtons;
      return Array(maxPageButtons)
        .fill(0)
        .map((_, i) => start + i);
    }
  }

}
