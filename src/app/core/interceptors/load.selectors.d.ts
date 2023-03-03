import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { LoadState } from './load.models';
export declare const selectLoadState: import("@ngrx/store").MemoizedSelector<object, LoadState, import("@ngrx/store").DefaultProjectorFn<LoadState>>;
export declare const selectLoad: import("@ngrx/store").MemoizedSelector<object, LoadState, (s1: LoadState) => LoadState>;
export declare const selectIsLoading: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: LoadState) => boolean>;
export declare function getCurrentIsLoading(store: Store<AppState>): boolean;
