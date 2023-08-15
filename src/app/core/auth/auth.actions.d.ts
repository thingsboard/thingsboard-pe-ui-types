import { Action } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { AuthPayload } from '@core/auth/auth.models';
import { UserSettings } from '@shared/models/user-settings.models';
export declare enum AuthActionTypes {
    AUTHENTICATED = "[Auth] Authenticated",
    UNAUTHENTICATED = "[Auth] Unauthenticated",
    LOAD_USER = "[Auth] Load User",
    UPDATE_USER_DETAILS = "[Auth] Update User Details",
    UPDATE_LAST_PUBLIC_DASHBOARD_ID = "[Auth] Update Last Public Dashboard Id",
    UPDATE_HAS_REPOSITORY = "[Auth] Change Has Repository",
    UPDATE_OPENED_MENU_SECTION = "[Preferences] Update Opened Menu Section",
    PUT_USER_SETTINGS = "[Preferences] Put user settings",
    DELETE_USER_SETTINGS = "[Preferences] Delete user settings"
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
export declare class ActionAuthUpdateHasRepository implements Action {
    readonly payload: {
        hasRepository: boolean;
    };
    readonly type = AuthActionTypes.UPDATE_HAS_REPOSITORY;
    constructor(payload: {
        hasRepository: boolean;
    });
}
export declare class ActionPreferencesUpdateOpenedMenuSection implements Action {
    readonly payload: {
        path: string;
        opened: boolean;
    };
    readonly type = AuthActionTypes.UPDATE_OPENED_MENU_SECTION;
    constructor(payload: {
        path: string;
        opened: boolean;
    });
}
export declare class ActionPreferencesPutUserSettings implements Action {
    readonly payload: Partial<UserSettings>;
    readonly type = AuthActionTypes.PUT_USER_SETTINGS;
    constructor(payload: Partial<UserSettings>);
}
export declare class ActionPreferencesDeleteUserSettings implements Action {
    readonly payload: Array<NestedKeyOf<UserSettings>>;
    readonly type = AuthActionTypes.DELETE_USER_SETTINGS;
    constructor(payload: Array<NestedKeyOf<UserSettings>>);
}
export type AuthActions = ActionAuthAuthenticated | ActionAuthUnauthenticated | ActionAuthLoadUser | ActionAuthUpdateUserDetails | ActionAuthUpdateLastPublicDashboardId | ActionAuthUpdateHasRepository | ActionPreferencesUpdateOpenedMenuSection | ActionPreferencesPutUserSettings | ActionPreferencesDeleteUserSettings;
