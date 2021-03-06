import {Component} from '@angular/core';
import {Pair} from "../_entities/pair";

@Component({
  selector: 'app-root',
  template: `
      <div>
          <pairs-spinner [pairs]="pairs"></pairs-spinner>
      </div>
  `
})
export class AppComponent {
  pairs: Pair[] = [
    {word: "apple", translation: "яблоко"},
    {word: "onomatopoeia", translation: "звукоподражание"}
  ];
}
