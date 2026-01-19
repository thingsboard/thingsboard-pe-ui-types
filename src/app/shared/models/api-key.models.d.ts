import { BaseData } from '@shared/models/base-data';
import { HasTenantId } from '@shared/models/entity.models';
import { ApiKeyId } from '@shared/models/id/api-key-id';
import { UserId } from '@shared/models/id/user-id';
export declare const userInfoCommand: (baseUrl: string, apiKey: string) => string;
export interface ApiKeyInfo extends BaseData<ApiKeyId>, HasTenantId {
    enabled: boolean;
    expirationTime: number;
    description: string;
    expired: boolean;
    userId: UserId;
}
export interface ApiKey extends ApiKeyInfo {
    value: string;
}
