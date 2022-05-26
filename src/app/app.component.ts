import { Component, OnInit } from '@angular/core';
import { CardserviceService } from './services/cardservice.service';
import { MatSelectionListChange } from '@angular/material/list';
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
  title = 'card-app';

  ngOnInit() {
    this.initilizeCardList();
  }

  initilizeCardList() {
    this.service.getCardList()
      .subscribe(response => {
        this.cardList = [];
        this.cardList = response;
      });
  }
  onListSelectionChange(event: MatSelectionListChange, card: any) {

    card.selected.forEach(function (item: any) {
      console.log(item.value);
    });
    // if (event.source.selectedOptions) {
    //   console.log('You selected: ' , card);
    //   this.selectedList.push(card);
    // }
    // else{
    //   const index: number = this.selectedList.indexOf(card);
    //   if (index !== -1) {
    //       this.selectedList.splice(index, 1);
    //   }
    // }
    // console.log(this.selectedList)
  }
  PerformSort(selectedCards: any) {
    console.log('perform sort clicked');
    this.selectedList=[]
    selectedCards.forEach((item :any) => {
      console.log(item);
      this.selectedList.push(item.value)
  });
    
    this.service.performSort(this.selectedList)
      .subscribe(response => {
        this.sortedList = response as string[];
        console.log('after response');
        console.log(this.sortedList);
      });
  }
}
