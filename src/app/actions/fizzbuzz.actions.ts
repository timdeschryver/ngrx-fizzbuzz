import { Action } from '@ngrx/store';

export enum FizzBuzzActionTypes {
  Next = '[AppComponent] Next',
}

export class Next implements Action {
  readonly type = FizzBuzzActionTypes.Next;
}

export type FizzBuzzActions = Next;
