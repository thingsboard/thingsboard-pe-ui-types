import { EntityId } from '@shared/models/id/entity-id';
import { HasUUID } from '@shared/models/id/has-uuid';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
export declare type HasId = EntityId | HasUUID;
export interface BaseData<T extends HasId> {
    createdTime?: number;
    id?: T;
    name?: string;
    label?: string;
    ownerId?: EntityId;
    tenantId?: TenantId;
    customerId?: CustomerId;
}
export declare function sortEntitiesByIds<I extends HasId, T extends BaseData<I>>(entities: T[], entityIds: string[]): T[];
export declare function hasIdEquals(id1: HasId, id2: HasId): boolean;
