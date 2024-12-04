import { GroupPermission } from '@shared/models/group-permission.models';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { CustomMenuId } from '@shared/models/id/custom-menu-id';
import { NotificationTargetId } from '@shared/models/id/notification-target-id';
import { DomainId } from '@shared/models/id/domain-id';
export type CaptchaVersion = 'v2' | 'v3' | 'enterprise';
export declare enum SelfRegistrationType {
    WEB = "WEB",
    MOBILE = "MOBILE"
}
export declare enum SignUpFieldId {
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    REPEAT_PASSWORD = "REPEAT_PASSWORD",
    FIRST_NAME = "FIRST_NAME",
    LAST_NAME = "LAST_NAME",
    PHONE = "PHONE",
    COUNTRY = "COUNTRY",
    CITY = "CITY",
    STATE = "STATE",
    ZIP = "ZIP",
    ADDRESS = "ADDRESS",
    ADDRESS2 = "ADDRESS2"
}
export interface SignUpField {
    id: SignUpFieldId;
    label: string;
    required: boolean;
}
export declare const SignUpFieldMap: Map<SignUpFieldId, SignUpField>;
export declare const defaultSignUpFields: SignUpFieldId[];
export declare const alwaysRequiredSignUpFields: SignUpFieldId[];
export interface SignUpSelfRegistrationParams {
    title?: string;
    captcha?: CaptchaParams;
    signUpFields: Array<SignUpField>;
    activate?: boolean;
    showPrivacyPolicy?: boolean;
    showTermsOfUse?: boolean;
}
export interface WebSelfRegistrationParams extends AbstractSelfRegistrationParams {
    domainId?: DomainId;
}
export interface AbstractSelfRegistrationParams {
    enabled: boolean;
    title: string;
    captcha?: CaptchaParams;
    signUpFields: Array<SignUpField>;
    showPrivacyPolicy: boolean;
    showTermsOfUse: boolean;
    privacyPolicy?: string;
    termsOfUse?: string;
    notificationRecipient: NotificationTargetId;
    customerTitlePrefix: string;
    customerGroupId: EntityGroupId;
    permissions: GroupPermission[];
    defaultDashboard: DefaultDashboardParams;
    homeDashboard: HomeDashboardParams;
    customMenuId?: CustomMenuId;
    type: SelfRegistrationType;
}
export interface SignUpField {
    id: SignUpFieldId;
    label: string;
    required: boolean;
}
interface HomeDashboardParams {
    id: string;
    hideToolbar: boolean;
}
export interface CaptchaParams {
    siteKey?: string;
    version: CaptchaVersion;
    logActionName?: string;
    secretKey?: string;
    projectId?: string;
    androidKey?: string;
    iosKey?: string;
    serviceAccountCredentials?: string;
    serviceAccountCredentialsFileName?: string;
}
interface DefaultDashboardParams {
    id: string;
    fullscreen: boolean;
}
export interface MobileSelfRegistrationParams extends AbstractSelfRegistrationParams {
    redirect: MobileRedirectParams;
}
interface MobileRedirectParams {
    scheme: string;
    host: string;
}
export {};
