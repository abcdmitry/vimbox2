import {Component} from '@angular/core';
import {Pair} from "./pairs-spinner.component";

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
