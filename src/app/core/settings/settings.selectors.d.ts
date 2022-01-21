import { SettingsState } from './settings.models';
import { AppState } from '@app/core/core.state';
export declare const selectSettingsState: import("@ngrx/store").MemoizedSelector<AppState, SettingsState, import("@ngrx/store").DefaultProjectorFn<SettingsState>>;
export declare const selectSettings: import("@ngrx/store").MemoizedSelector<AppState, SettingsState, import("@ngrx/store").DefaultProjectorFn<SettingsState>>;
export declare const selectUserLang: import("@ngrx/store").MemoizedSelector<AppState, string, import("@ngrx/store").DefaultProjectorFn<string>>;
