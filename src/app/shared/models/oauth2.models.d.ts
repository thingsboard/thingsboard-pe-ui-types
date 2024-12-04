import { OAuth2ClientId } from '@shared/models/id/oauth2-client-id';
import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { HasTenantId } from './entity.models';
import { DomainId } from './id/domain-id';
import { HasUUID } from '@shared/models/id/has-uuid';
export declare enum DomainSchema {
    HTTP = "HTTP",
    HTTPS = "HTTPS",
    MIXED = "MIXED"
}
export declare const domainSchemaTranslations: Map<DomainSchema, string>;
export declare enum PlatformType {
    WEB = "WEB",
    ANDROID = "ANDROID",
    IOS = "IOS"
}
export interface OAuth2ClientRegistrationTemplate extends OAuth2RegistrationInfo {
    comment: string;
    createdTime: number;
    helpLink: string;
    name: string;
    providerId: string;
    id: HasUUID;
}
export interface OAuth2RegistrationInfo {
    loginButtonLabel: string;
    loginButtonIcon: string;
    clientId: string;
    clientSecret: string;
    accessTokenUri: string;
    authorizationUri: string;
    scope: string[];
    platforms: PlatformType[];
    jwkSetUri?: string;
    userInfoUri: string;
    clientAuthenticationMethod: ClientAuthenticationMethod;
    userNameAttributeName: string;
    mapperConfig: OAuth2MapperConfig;
    additionalInfo: string;
}
export declare enum ClientAuthenticationMethod {
    NONE = "NONE",
    BASIC = "BASIC",
    POST = "POST"
}
export interface Domain extends BaseData<DomainId>, HasTenantId {
    tenantId?: TenantId;
    name: string;
    oauth2Enabled: boolean;
    propagateToEdge: boolean;
}
export interface HasOauth2Clients {
    oauth2ClientInfos?: Array<OAuth2ClientInfo> | Array<string>;
}
export interface DomainInfo extends Domain, HasOauth2Clients {
    oauth2ClientInfos?: Array<OAuth2ClientInfo> | Array<string>;
}
export interface OAuth2Client extends BaseData<OAuth2ClientId>, HasTenantId {
    tenantId?: TenantId;
    title: string;
    mapperConfig: OAuth2MapperConfig;
    clientId: string;
    clientSecret: string;
    authorizationUri: string;
    accessTokenUri: string;
    scope: Array<string>;
    userInfoUri?: string;
    userNameAttributeName: string;
    jwkSetUri?: string;
    clientAuthenticationMethod: ClientAuthenticationMethod;
    loginButtonLabel: string;
    loginButtonIcon?: string;
    platforms?: Array<PlatformType>;
    additionalInfo: any;
}
export interface OAuth2MapperConfig {
    allowUserCreation: boolean;
    activateUser: boolean;
    type: MapperType;
    basic?: OAuth2BasicMapperConfig;
    custom?: OAuth2CustomMapperConfig;
}
export declare enum MapperType {
    BASIC = "BASIC",
    CUSTOM = "CUSTOM",
    GITHUB = "GITHUB",
    APPLE = "APPLE"
}
export interface OAuth2BasicMapperConfig {
    emailAttributeKey?: string;
    firstNameAttributeKey?: string;
    lastNameAttributeKey?: string;
    tenantNameStrategy?: TenantNameStrategyType;
    tenantNamePattern?: string;
    customerNamePattern?: string;
    defaultDashboardName?: string;
    alwaysFullScreen?: boolean;
    parentCustomerNamePattern?: string;
    userGroupsNamePattern?: string[];
}
export declare enum TenantNameStrategyType {
    DOMAIN = "DOMAIN",
    EMAIL = "EMAIL",
    CUSTOM = "CUSTOM"
}
export interface OAuth2CustomMapperConfig {
    url?: string;
    username?: string;
    password?: string;
    sendToken: boolean;
}
export declare const platformTypeTranslations: Map<PlatformType, string>;
export interface OAuth2ClientInfo extends BaseData<OAuth2ClientId> {
    title: string;
    providerName: string;
    platforms?: Array<PlatformType>;
}
export interface OAuth2ClientLoginInfo {
    name: string;
    icon: string;
    url: string;
}
export declare function getProviderHelpLink(provider: Provider): string;
export declare enum Provider {
    CUSTOM = "Custom",
    FACEBOOK = "Facebook",
    GOOGLE = "Google",
    GITHUB = "Github",
    APPLE = "Apple"
}
