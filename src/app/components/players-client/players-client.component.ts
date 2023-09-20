import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-client',
  templateUrl: './players-client.component.html',
  styleUrls: ['./players-client.component.css']
})
export class PlayersClientComponent implements OnInit {
  playersTab:any=[];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  sortedColumn: string = '';
  sortDirection: string = 'asc'; // Initial sort direction
  icon="assets/images/search.png";

  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
    this.currentPage = 1; // Set initial page to 1
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.playerService.getAllPlayers().subscribe((res) => {
      this.playersTab = res;
    })
  }
  //Partie Pagination
  get totalPages(): number {
    return Math.ceil(this.playersTab.length / this.itemsPerPage);
  }
  get pagedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.playersTab.length);
    return this.playersTab.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  // Function to toggle the sort direction
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  // Function to set the sorting column and toggle the direction
  sortTable(column: string) {
    if (this.sortedColumn === column) {
      this.toggleSortDirection();
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc'; // Reset direction if changing column
    }
    // If you want to reset to the first page whenever sorting is changed
    this.currentPage = 1;
  }

  // Function to apply sorting and return sorted items
  applySorting(items: any[]): any[] {
    if (!this.sortedColumn) {
      return items; // No sorting needed
    }

    return items.sort((a, b) => {
      const aValue = a[this.sortedColumn];
      const bValue = b[this.sortedColumn];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        if (this.sortDirection === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      }
    });
  }
}
