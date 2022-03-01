import {Action, createReducer, on} from "@ngrx/store";
import { INC, DEC, JUMP, RANDOM } from "./counter.action";
import { ICounterState } from "./counter.model";

const initial_state: ICounterState = {
    counter: 0
}

const _counterReducer = createReducer(
    initial_state,
    on(INC, (state: ICounterState) => {
        return {
            counter: state.counter + 1
        }
    }),
    on(DEC, (state: ICounterState) => {
        return {
            counter: state.counter - 1
        }
    }),
    on(RANDOM, () => {
        return {
            counter: Math.floor(Math.random() * 100)
        }
    }),
    on(JUMP, (state: ICounterState, { numberOfJumps }) => {
        return {
            counter: numberOfJumps
        }
    })
);

function counterReducer(state: ICounterState | undefined, action: Action): ICounterState {
    return _counterReducer(state, action);
}

export { initial_state, counterReducer };