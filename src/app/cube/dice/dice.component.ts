import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from "src/app/cube/services/api.service";
import { delay } from "rxjs/operators";

@Component({
  selector: 'cube-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  dice: number = 0;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKey(event: KeyboardEvent) {

    if (event.code === 'Space') {
      this.getNumber();
    }
  }

  getNumber() {
    this.dice = 0;
    this.api.getNumber()
      .pipe(delay(200))
      .subscribe((result) => {
        this.dice = result[0];
        console.log(result);
      })
  }
}
