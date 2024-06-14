import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { AuthState } from './auth.models';
import { AuthUser } from '@shared/models/user.model';
import { UserSettings } from '@shared/models/user-settings.models';
export declare const selectAuthState: import("@ngrx/store").MemoizedSelector<object, AuthState, import("@ngrx/store").DefaultProjectorFn<AuthState>>;
export declare const selectAuth: import("@ngrx/store").MemoizedSelector<object, AuthState, (s1: AuthState) => AuthState>;
export declare const selectIsAuthenticated: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectIsUserLoaded: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectUserReady: import("@ngrx/store").MemoizedSelector<object, {
    isAuthenticated: boolean;
    isUserLoaded: boolean;
}, (s1: boolean, s2: boolean) => {
    isAuthenticated: boolean;
    isUserLoaded: boolean;
}>;
export declare const selectAuthUser: import("@ngrx/store").MemoizedSelector<object, AuthUser, (s1: AuthState) => AuthUser>;
export declare const selectUserDetails: import("@ngrx/store").MemoizedSelector<object, import("@shared/models/user.model").User, (s1: AuthState) => import("@shared/models/user.model").User>;
export declare const selectUserTokenAccessEnabled: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectHasRepository: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectTbelEnabled: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectPersistDeviceStateToTelemetry: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectMobileQrEnabled: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectHomeDashboardParams: import("@ngrx/store").MemoizedSelector<object, {
    persistDeviceStateToTelemetry: boolean;
    mobileQrEnabled: boolean;
}, (s1: boolean, s2: boolean) => {
    persistDeviceStateToTelemetry: boolean;
    mobileQrEnabled: boolean;
}>;
export declare const selectUserSettings: import("@ngrx/store").MemoizedSelector<object, UserSettings, (s1: AuthState) => UserSettings>;
export declare const selectUserSettingsProperty: (path: NestedKeyOf<UserSettings>) => import("@ngrx/store").MemoizedSelector<object, any, (s1: AuthState) => any>;
export declare const selectOpenedMenuSections: import("@ngrx/store").MemoizedSelector<object, string[], (s1: AuthState) => string[]>;
export declare const getCurrentAuthState: (store: Store<AppState>) => AuthState;
export declare const getCurrentAuthUser: (store: Store<AppState>) => AuthUser;
export declare const getCurrentUserSettings: (store: Store<AppState>) => UserSettings;
export declare const getCurrentOpenedMenuSections: (store: Store<AppState>) => string[];
