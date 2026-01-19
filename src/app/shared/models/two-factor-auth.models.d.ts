import { UsersFilter } from '@shared/models/notification.models';
export interface TwoFactorAuthSettings {
    enforceTwoFa: boolean;
    enforcedUsersFilter: UsersFilter;
    maxVerificationFailuresBeforeUserLockout: number;
    providers: Array<TwoFactorAuthProviderConfig>;
    totalAllowedTimeForVerification: number;
    useSystemTwoFactorAuthSettings: boolean;
    verificationCodeCheckRateLimit: string;
    minVerificationCodeSendPeriod: number;
}
export interface TwoFactorAuthSettingsForm extends TwoFactorAuthSettings {
    enforceTwoFa: boolean;
    enforcedUsersFilter: UsersFilterWithFilterByTenant;
    providers: Array<TwoFactorAuthProviderConfigForm>;
    verificationCodeCheckRateLimitEnable: boolean;
    verificationCodeCheckRateLimitNumber: number;
    verificationCodeCheckRateLimitTime: number;
}
export interface UsersFilterWithFilterByTenant extends UsersFilter {
    filterByTenants?: boolean;
}
export type TwoFactorAuthProviderConfig = Partial<TotpTwoFactorAuthProviderConfig | SmsTwoFactorAuthProviderConfig | EmailTwoFactorAuthProviderConfig>;
export type TwoFactorAuthProviderConfigForm = Partial<TotpTwoFactorAuthProviderConfig | SmsTwoFactorAuthProviderConfig | EmailTwoFactorAuthProviderConfig> & TwoFactorAuthProviderFormConfig;
export interface TotpTwoFactorAuthProviderConfig {
    providerType: TwoFactorAuthProviderType;
    issuerName: string;
}
export interface SmsTwoFactorAuthProviderConfig {
    providerType: TwoFactorAuthProviderType;
    smsVerificationMessageTemplate: string;
    verificationCodeLifetime: number;
}
export interface EmailTwoFactorAuthProviderConfig {
    providerType: TwoFactorAuthProviderType;
    verificationCodeLifetime: number;
}
export interface TwoFactorAuthProviderFormConfig {
    enable: boolean;
}
export declare enum TwoFactorAuthProviderType {
    TOTP = "TOTP",
    SMS = "SMS",
    EMAIL = "EMAIL",
    BACKUP_CODE = "BACKUP_CODE"
}
interface GeneralTwoFactorAuthAccountConfig {
    providerType: TwoFactorAuthProviderType;
    useByDefault: boolean;
}
export interface TotpTwoFactorAuthAccountConfig extends GeneralTwoFactorAuthAccountConfig {
    authUrl: string;
}
export interface SmsTwoFactorAuthAccountConfig extends GeneralTwoFactorAuthAccountConfig {
    phoneNumber: string;
}
export interface EmailTwoFactorAuthAccountConfig extends GeneralTwoFactorAuthAccountConfig {
    email: string;
}
export interface BackupCodeTwoFactorAuthAccountConfig extends GeneralTwoFactorAuthAccountConfig {
    codesLeft: number;
    codes?: Array<string>;
}
export type TwoFactorAuthAccountConfig = TotpTwoFactorAuthAccountConfig | SmsTwoFactorAuthAccountConfig | EmailTwoFactorAuthAccountConfig | BackupCodeTwoFactorAuthAccountConfig;
export interface AccountTwoFaSettings {
    configs: AccountTwoFaSettingProviders;
}
export type AccountTwoFaSettingProviders = {
    [key in TwoFactorAuthProviderType]?: TwoFactorAuthAccountConfig;
};
export interface TwoFaProviderInfo {
    type: TwoFactorAuthProviderType;
    default: boolean;
    contact?: string;
    minVerificationCodeSendPeriod?: number;
}
export interface TwoFactorAuthProviderData {
    name: string;
    description: string;
    activatedHint: string;
}
export interface TwoFactorAuthProviderLoginData extends Omit<TwoFactorAuthProviderData, 'activatedHint'> {
    icon: string;
    placeholder: string;
}
export declare const twoFactorAuthProvidersData: Map<TwoFactorAuthProviderType, TwoFactorAuthProviderData>;
export declare const twoFactorAuthProvidersLoginData: Map<TwoFactorAuthProviderType, TwoFactorAuthProviderLoginData>;
export declare const twoFactorAuthProvidersEnterCodeCardTranslate: Map<TwoFactorAuthProviderType, Omit<TwoFactorAuthProviderData, "activatedHint">>;
export declare const twoFactorAuthProvidersSuccessCardTranslate: Map<TwoFactorAuthProviderType, Omit<TwoFactorAuthProviderData, "activatedHint">>;
export {};
