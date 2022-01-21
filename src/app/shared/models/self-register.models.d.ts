import { GroupPermission } from '@shared/models/group-permission.models';
export interface SignUpSelfRegistrationParams {
    signUpTextMessage?: string;
    captchaSiteKey?: string;
    activate?: boolean;
    showPrivacyPolicy?: boolean;
    showTermsOfUse?: boolean;
}
export interface SelfRegistrationParams extends SignUpSelfRegistrationParams {
    adminSettingsId?: string;
    domainName?: string;
    captchaSecretKey?: string;
    privacyPolicy?: string;
    termsOfUse?: string;
    notificationEmail?: string;
    defaultDashboardId?: string;
    defaultDashboardFullscreen?: boolean;
    permissions?: GroupPermission[];
    pkgName?: string;
    appSecret?: string;
    appScheme?: string;
    appHost?: string;
}
