import { AuthUser, User } from '@shared/models/user.model';
export interface SysParamsState {
    userTokenAccessEnabled: boolean;
    allowedDashboardIds: string[];
    edgesSupportEnabled: boolean;
    whiteLabelingAllowed: boolean;
    customerWhiteLabelingAllowed: boolean;
    hasRepository: boolean;
}
export interface AuthPayload extends SysParamsState {
    authUser: AuthUser;
    userDetails: User;
    forceFullscreen: boolean;
}
export interface AuthState extends AuthPayload {
    isAuthenticated: boolean;
    isUserLoaded: boolean;
    lastPublicDashboardId: string;
}
