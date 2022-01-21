import { Action } from '@ngrx/store';
export declare enum SettingsActionTypes {
    CHANGE_LANGUAGE = "[Settings] Change Language",
    CHANGE_WHITE_LABELING = "[Settings] Change White-labeling"
}
export declare class ActionSettingsChangeLanguage implements Action {
    readonly payload: {
        userLang: string;
    };
    readonly type = SettingsActionTypes.CHANGE_LANGUAGE;
    constructor(payload: {
        userLang: string;
    });
}
export declare class ActionSettingsChangeWhiteLabeling implements Action {
    readonly payload: {};
    readonly type = SettingsActionTypes.CHANGE_WHITE_LABELING;
    constructor(payload: {});
}
export declare type SettingsActions = ActionSettingsChangeLanguage | ActionSettingsChangeWhiteLabeling;
