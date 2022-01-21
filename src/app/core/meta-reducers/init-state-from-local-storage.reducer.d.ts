import { ActionReducer } from '@ngrx/store';
import { AppState } from '../core.state';
export declare function initStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState>;
