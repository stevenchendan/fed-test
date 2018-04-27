import {Component, OnInit} from '@angular/core';
import { CardService } from './card.service';
import {Card} from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'App';
  cardInfo: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }


  getCards(): void {
    this.cardService.getCards().subscribe((cards) => {
      for (const key in cards['items']) {
        if (cards['items'].hasOwnProperty(key)) {
          this.cardInfo.push(cards['items'][key]);
        }
      }
    });
  }

}
