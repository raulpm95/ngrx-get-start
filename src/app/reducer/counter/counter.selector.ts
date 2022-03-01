import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ICounterState } from "./counter.model";

const getCounterState = createFeatureSelector<ICounterState>('count');

const getCounter = createSelector(
    getCounterState,
    (state: ICounterState) => state.counter
);

export { getCounter };