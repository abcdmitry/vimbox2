import {Component, HostListener, Input, OnInit} from "@angular/core";
import {Pair} from "../_entities/pair";

@Component({
    selector: 'pairs-spinner',
    template: `
        <div>
            <div *ngIf="pair" style="border: 1px solid black">
                {{pair.word}} &mdash; {{pair.translation}}
            </div>
        </div>
    `
})
export class PairsSpinner implements OnInit {
    @HostListener('window:keydown.space') onSpacePress() {
        this.showNextPair();
    }

    @Input() pairs: Pair[] = [];

    pairIndex: number = 0; // Current pair index

    pair: Pair; // Current pair

    ngOnInit() {
        if (this.pairs.length) {
            this.pair = this.pairs[0];
        }
    }

    showNextPair() {
        this.pairIndex++;

        if (this.pairIndex >= this.pairs.length) {
            if (confirm("You've seen all pairs. Would you like to start from the beginning?")) {
                this.pairIndex = 0;
            } else {
                return;
            }
        }

        this.pair = this.pairs[this.pairIndex];
    }
}
