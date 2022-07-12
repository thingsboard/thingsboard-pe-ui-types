import { ValidatorFn } from '@angular/forms';
import { VersionCreateConfig } from '@shared/models/vc.models';
export declare const smtpPortPattern: RegExp;
export interface AdminSettings<T> {
    key: string;
    jsonValue: T;
}
export declare type SmtpProtocol = 'smtp' | 'smtps';
export interface MailServerSettings {
    useSystemMailSettings: boolean;
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
export declare enum MailTemplate {
    test = "test",
    activation = "activation",
    accountActivated = "accountActivated",
    accountLockout = "accountLockout",
    resetPassword = "resetPassword",
    passwordWasReset = "passwordWasReset",
    userActivated = "userActivated",
    userRegistered = "userRegistered",
    apiUsageStateEnabled = "apiUsageStateEnabled",
    apiUsageStateWarning = "apiUsageStateWarning",
    apiUsageStateDisabled = "apiUsageStateDisabled",
    twoFaVerification = "twoFaVerification"
}
export declare const mailTemplateTranslations: Map<MailTemplate, string>;
export interface MailTemplatesSettings {
    useSystemMailSettings?: any;
    [mailTemplate: string]: {
        subject: string;
        body: string;
    };
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
    TWILIO = "TWILIO",
    SMPP = "SMPP"
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
export interface SmppSmsProviderConfiguration {
    protocolVersion: number;
    host: string;
    port: number;
    systemId: string;
    password: string;
    systemType?: string;
    bindType?: string;
    serviceType?: string;
    sourceAddress?: string;
    sourceTon?: number;
    sourceNpi?: number;
    destinationTon?: number;
    destinationNpi?: number;
    addressRange?: string;
    codingScheme?: number;
}
export declare const smppVersions: {
    value: number;
}[];
export declare enum BindTypes {
    TX = "TX",
    RX = "RX",
    TRX = "TRX"
}
export declare const bindTypesTranslationMap: Map<BindTypes, string>;
export declare enum TypeOfNumber {
    Unknown = "Unknown",
    International = "International",
    National = "National",
    NetworkSpecific = "NetworkSpecific",
    SubscriberNumber = "SubscriberNumber",
    Alphanumeric = "Alphanumeric",
    Abbreviated = "Abbreviated"
}
export interface TypeDescriptor {
    name: string;
    value: number;
}
export declare const typeOfNumberMap: Map<TypeOfNumber, TypeDescriptor>;
export declare enum NumberingPlanIdentification {
    Unknown = "Unknown",
    ISDN = "ISDN",
    DataNumberingPlan = "DataNumberingPlan",
    TelexNumberingPlan = "TelexNumberingPlan",
    LandMobile = "LandMobile",
    NationalNumberingPlan = "NationalNumberingPlan",
    PrivateNumberingPlan = "PrivateNumberingPlan",
    ERMESNumberingPlan = "ERMESNumberingPlan",
    Internet = "Internet",
    WAPClientId = "WAPClientId"
}
export declare const numberingPlanIdentificationMap: Map<NumberingPlanIdentification, TypeDescriptor>;
export declare enum CodingSchemes {
    SMSC = "SMSC",
    IA5 = "IA5",
    OctetUnspecified2 = "OctetUnspecified2",
    Latin1 = "Latin1",
    OctetUnspecified4 = "OctetUnspecified4",
    JIS = "JIS",
    Cyrillic = "Cyrillic",
    LatinHebrew = "LatinHebrew",
    UCS2UTF16 = "UCS2UTF16",
    PictogramEncoding = "PictogramEncoding",
    MusicCodes = "MusicCodes",
    ExtendedKanjiJIS = "ExtendedKanjiJIS",
    KoreanGraphicCharacterSet = "KoreanGraphicCharacterSet"
}
export declare const codingSchemesMap: Map<CodingSchemes, TypeDescriptor>;
export declare type SmsProviderConfigurations = Partial<SmppSmsProviderConfiguration> & AwsSnsSmsProviderConfiguration & TwilioSmsProviderConfiguration;
export interface SmsProviderConfiguration extends SmsProviderConfigurations {
    useSystemSmsSettings?: boolean;
    type: SmsProviderType;
}
export declare function smsProviderConfigurationValidator(required: boolean): ValidatorFn;
export interface TestSmsRequest {
    providerConfiguration: SmsProviderConfiguration;
    numberTo: string;
    message: string;
}
export declare function createSmsProviderConfiguration(type: SmsProviderType): SmsProviderConfiguration;
export declare enum RepositoryAuthMethod {
    USERNAME_PASSWORD = "USERNAME_PASSWORD",
    PRIVATE_KEY = "PRIVATE_KEY"
}
export declare const repositoryAuthMethodTranslationMap: Map<RepositoryAuthMethod, string>;
export interface RepositorySettings {
    repositoryUri: string;
    defaultBranch: string;
    authMethod: RepositoryAuthMethod;
    username: string;
    password: string;
    privateKeyFileName: string;
    privateKey: string;
    privateKeyPassword: string;
}
export interface AutoVersionCreateConfig extends VersionCreateConfig {
    branch: string;
}
export declare type AutoCommitSettings = {
    [entityType: string]: AutoVersionCreateConfig;
};
