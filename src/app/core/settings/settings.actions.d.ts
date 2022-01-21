import { Action } from '@ngrx/store';
export declare enum SettingsActionTypes {
    CHANGE_LANGUAGE = "[Settings] Change Language"
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
export declare type SettingsActions = ActionSettingsChangeLanguage;
