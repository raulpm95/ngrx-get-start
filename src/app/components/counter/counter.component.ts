import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs"
import { DEC, INC, JUMP, RANDOM, ICounterState, getCounter } from "../../reducer";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    count$: Observable<ICounterState>;
    counter$: Observable<number>;

    constructor(private store: Store<{ count : ICounterState }>) {
        this.count$ = this.store.pipe(select('count'));
        this.counter$ = this.store.pipe(select(getCounter));
    }

    ngOnInit(): void {
        
    }

    increment(): void {
        this.store.dispatch(INC());
    }

    decrement(): void {
        this.store.dispatch(DEC());
    }

    random(): void {
        this.store.dispatch(RANDOM());
    }

    jump(numberOfJumps: number): void {
        this.store.dispatch(JUMP({numberOfJumps}));
    }
}
