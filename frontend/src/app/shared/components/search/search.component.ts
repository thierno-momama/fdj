import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/league/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm: string = '';
  @Output() onSearchLeague = new EventEmitter();
  myControl = new FormControl('');
  options: any[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getAllLeagues().subscribe((data: any) => {
      console.log("Data Service: ", data)
      this.options = data;
    });
    
  }

  onSearch(){
    this.onSearchLeague.emit(this.searchTerm)
  }
}
