import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {
 @Input('rating-value') rating = 0;
 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ratingValue){
    this.rating = ratingValue;
  }
}
