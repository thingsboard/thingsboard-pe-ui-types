import { AuthUser, User } from '@shared/models/user.model';
import { UserSettings } from '@shared/models/user-settings.models';
import { TrendzSettings } from '@shared/models/trendz-settings.models';
export interface SysParamsState {
    userTokenAccessEnabled: boolean;
    allowedDashboardIds: string[];
    edgesSupportEnabled: boolean;
    whiteLabelingAllowed: boolean;
    customerWhiteLabelingAllowed: boolean;
    hasRepository: boolean;
    tbelEnabled: boolean;
    persistDeviceStateToTelemetry: boolean;
    mobileQrEnabled: boolean;
    userSettings: UserSettings;
    maxResourceSize: number;
    maxDebugModeDurationMinutes: number;
    maxDataPointsPerRollingArg: number;
    maxArgumentsPerCF: number;
    ruleChainDebugPerTenantLimitsConfiguration?: string;
    calculatedFieldDebugPerTenantLimitsConfiguration?: string;
    integrationDebugPerTenantLimitsConfiguration?: string;
    converterDebugPerTenantLimitsConfiguration?: string;
    availableLocales: string[];
    trendzSettings: TrendzSettings;
}
export interface SysParams extends SysParamsState {
    maxDatapointsLimit: number;
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
