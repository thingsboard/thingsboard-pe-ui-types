import { SettingsState } from './settings.models';
export declare const selectSettingsState: import("@ngrx/store").MemoizedSelector<object, SettingsState, import("@ngrx/store").DefaultProjectorFn<SettingsState>>;
export declare const selectSettings: import("@ngrx/store").MemoizedSelector<object, SettingsState, (s1: SettingsState) => SettingsState>;
export declare const selectUserLang: import("@ngrx/store").MemoizedSelector<object, string, (s1: SettingsState) => string>;
