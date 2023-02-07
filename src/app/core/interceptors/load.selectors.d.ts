import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { LoadState } from './load.models';
export declare const selectLoadState: import("@ngrx/store").MemoizedSelector<object, LoadState, import("@ngrx/store").DefaultProjectorFn<LoadState>>;
export declare const selectLoad: import("@ngrx/store").MemoizedSelector<object, LoadState, import("@ngrx/store").DefaultProjectorFn<LoadState>>;
export declare const selectIsLoading: import("@ngrx/store").MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare function getCurrentIsLoading(store: Store<AppState>): boolean;
