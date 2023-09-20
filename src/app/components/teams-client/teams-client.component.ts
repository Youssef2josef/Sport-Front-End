import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-client',
  templateUrl: './teams-client.component.html',
  styleUrls: ['./teams-client.component.css']
})
export class TeamsClientComponent implements OnInit {
  teamsTab:any=[];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  sortedColumn: string = '';
  sortDirection: string = 'asc'; // Initial sort direction
  icon="assets/images/search.png";

  constructor(private router:Router,private teamService:TeamService) { }

  ngOnInit() {
    this.currentPage = 1; // Set initial page to 1
    this.getAllTeams()
  }
    
  goToDipslay(id){
    this.router.navigate(["displayTeam/"+id])
  }

  getAllTeams() {
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teamsTab = data;
        console.log("x");
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }
  //Partie Pagination
  get totalPages(): number {
    return Math.ceil(this.teamsTab.length / this.itemsPerPage);
  }
  get pagedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.teamsTab.length);
    return this.teamsTab.slice(startIndex, endIndex);
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
