import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CardserviceService } from './services/cardservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cardList: any;
  selectedList: string[] = [];
  sortedList: string[] = [];

  constructor(private service: CardserviceService) { }
  title = 'card-sort-app';

  ngOnInit() {
    this.initilizeCardList();
  }

  initilizeCardList() {
    this.service.getCardList()
      .subscribe(response => {
        this.cardList = response;
      });
  }
  onListSelectionChange(card: any) {

    this.sortedList = [];
  }
  PerformSort(selectedCards: any) {
    this.selectedList = []
    selectedCards.forEach((item: any) => {
      this.selectedList.push(item.value)
    });

    this.service.performSort(this.selectedList)
      .subscribe(response => {
        this.sortedList = response as string[];
      });
  }

  ClearAll() {
    this.cardList = [];
    this.sortedList = [];
    this.initilizeCardList();
  }
}