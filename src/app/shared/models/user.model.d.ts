import { BaseData, GroupEntityInfo } from './base-data';
import { UserId } from './id/user-id';
import { CustomerId } from './id/customer-id';
import { Authority } from './authority.enum';
import { TenantId } from './id/tenant-id';
export interface User extends BaseData<UserId> {
    tenantId: TenantId;
    customerId: CustomerId;
    email: string;
    phone: string;
    authority: Authority;
    firstName: string;
    lastName: string;
    additionalInfo: any;
}
export type UserInfo = User & GroupEntityInfo<UserId>;
export declare enum ActivationMethod {
    DISPLAY_ACTIVATION_LINK = "DISPLAY_ACTIVATION_LINK",
    SEND_ACTIVATION_MAIL = "SEND_ACTIVATION_MAIL"
}
export declare const activationMethodTranslations: Map<ActivationMethod, string>;
export interface AuthUser {
    sub: string;
    scopes: string[];
    userId: string;
    firstName: string;
    lastName: string;
    enabled: boolean;
    tenantId: string;
    customerId: string;
    isPublic: boolean;
    authority: Authority;
}
export interface UserEmailInfo {
    id: UserId;
    email: string;
    firstName: string;
    lastName: string;
}
