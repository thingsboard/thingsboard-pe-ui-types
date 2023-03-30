import { Action } from '@ngrx/store';
export declare enum LoadActionTypes {
    START_LOAD = "[Load] Start",
    FINISH_LOAD = "[Load] Finish"
}
export declare class ActionLoadStart implements Action {
    readonly type = LoadActionTypes.START_LOAD;
}
export declare class ActionLoadFinish implements Action {
    readonly type = LoadActionTypes.FINISH_LOAD;
}
export type LoadActions = ActionLoadStart | ActionLoadFinish;
