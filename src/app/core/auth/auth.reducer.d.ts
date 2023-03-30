import { AuthState } from './auth.models';
import { AuthActions } from './auth.actions';
export declare const initialState: AuthState;
export declare const authReducer: (state: AuthState, action: AuthActions) => AuthState;
