import { Action } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { AuthPayload } from '@core/auth/auth.models';
export declare enum AuthActionTypes {
    AUTHENTICATED = "[Auth] Authenticated",
    UNAUTHENTICATED = "[Auth] Unauthenticated",
    LOAD_USER = "[Auth] Load User",
    UPDATE_USER_DETAILS = "[Auth] Update User Details",
    UPDATE_LAST_PUBLIC_DASHBOARD_ID = "[Auth] Update Last Public Dashboard Id"
}
export declare class ActionAuthAuthenticated implements Action {
    readonly payload: AuthPayload;
    readonly type = AuthActionTypes.AUTHENTICATED;
    constructor(payload: AuthPayload);
}
export declare class ActionAuthUnauthenticated implements Action {
    readonly type = AuthActionTypes.UNAUTHENTICATED;
}
export declare class ActionAuthLoadUser implements Action {
    readonly payload: {
        isUserLoaded: boolean;
    };
    readonly type = AuthActionTypes.LOAD_USER;
    constructor(payload: {
        isUserLoaded: boolean;
    });
}
export declare class ActionAuthUpdateUserDetails implements Action {
    readonly payload: {
        userDetails: User;
    };
    readonly type = AuthActionTypes.UPDATE_USER_DETAILS;
    constructor(payload: {
        userDetails: User;
    });
}
export declare class ActionAuthUpdateLastPublicDashboardId implements Action {
    readonly payload: {
        lastPublicDashboardId: string;
    };
    readonly type = AuthActionTypes.UPDATE_LAST_PUBLIC_DASHBOARD_ID;
    constructor(payload: {
        lastPublicDashboardId: string;
    });
}
export declare type AuthActions = ActionAuthAuthenticated | ActionAuthUnauthenticated | ActionAuthLoadUser | ActionAuthUpdateUserDetails | ActionAuthUpdateLastPublicDashboardId;
