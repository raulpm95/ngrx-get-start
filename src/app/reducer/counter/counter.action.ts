import { createAction, props} from "@ngrx/store";
import { IJumpActionProps } from "./counter.model";

const INC = createAction('INCREMENT');
const DEC = createAction('DECREMENT');
const RANDOM = createAction('RANDOM');
const JUMP = createAction('JUMP',
    props<IJumpActionProps>()
);

export { INC, DEC, RANDOM, JUMP };