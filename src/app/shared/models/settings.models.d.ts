import { ValidatorFn } from '@angular/forms';
export declare const smtpPortPattern: RegExp;
export interface AdminSettings<T> {
    key: string;
    jsonValue: T;
}
export declare type SmtpProtocol = 'smtp' | 'smtps';
export interface MailServerSettings {
    showChangePassword: boolean;
    mailFrom: string;
    smtpProtocol: SmtpProtocol;
    smtpHost: string;
    smtpPort: number;
    timeout: number;
    enableTls: boolean;
    username: string;
    changePassword?: boolean;
    password?: string;
    enableProxy: boolean;
    proxyHost: string;
    proxyPort: number;
    proxyUser: string;
    proxyPassword: string;
}
export interface GeneralSettings {
    baseUrl: string;
}
export interface UserPasswordPolicy {
    minimumLength: number;
    minimumUppercaseLetters: number;
    minimumLowercaseLetters: number;
    minimumDigits: number;
    minimumSpecialCharacters: number;
    passwordExpirationPeriodDays: number;
    allowWhitespaces: boolean;
}
export interface SecuritySettings {
    passwordPolicy: UserPasswordPolicy;
}
export interface UpdateMessage {
    message: string;
    updateAvailable: boolean;
}
export declare const phoneNumberPattern: RegExp;
export declare const phoneNumberPatternTwilio: RegExp;
export declare enum SmsProviderType {
    AWS_SNS = "AWS_SNS",
    TWILIO = "TWILIO"
}
export declare const smsProviderTypeTranslationMap: Map<SmsProviderType, string>;
export interface AwsSnsSmsProviderConfiguration {
    accessKeyId?: string;
    secretAccessKey?: string;
    region?: string;
}
export interface TwilioSmsProviderConfiguration {
    accountSid?: string;
    accountToken?: string;
    numberFrom?: string;
}
export declare type SmsProviderConfigurations = AwsSnsSmsProviderConfiguration & TwilioSmsProviderConfiguration;
export interface SmsProviderConfiguration extends SmsProviderConfigurations {
    type: SmsProviderType;
}
export declare function smsProviderConfigurationValidator(required: boolean): ValidatorFn;
export interface TestSmsRequest {
    providerConfiguration: SmsProviderConfiguration;
    numberTo: string;
    message: string;
}
export declare function createSmsProviderConfiguration(type: SmsProviderType): SmsProviderConfiguration;
