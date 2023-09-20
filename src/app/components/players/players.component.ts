import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any = []
  playerOne: any ;
  title = "Players"
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  // Inside your component class
  sortedColumn: string = '';
  sortDirection: string = 'asc'; // Initial sort direction
  icon="assets/images/search.png";
  

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.currentPage = 1; // Set initial page to 1
    this.getAllPlayers()
    
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data;
        console.log("x");
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
  goToEdit(id) {
    this.router.navigate(["editPlayer/" + id])
  }

  deletePlayer(id: any) {
    this.playerService.deletePlayerById(id).subscribe(
      () => {
        // Remove the deleted player from the local array
        this.players = this.players.filter((player: any) => player.id !== id);
        console.log('Player deleted successfully');
      },
      (error) => {
        console.error('Error deleting player:', error);
      }
    )

  }
  goToDipslay(id) {
    this.router.navigate(["displayPlayer/" + id])
  }
  applySorting(items: any[]): any[] {
    // Clone the array to avoid modifying the original array
    const sortedItems = items.slice();
  
    if (this.sortedColumn) {
      sortedItems.sort((a, b) => {
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
  
    return sortedItems;
  }  
}
