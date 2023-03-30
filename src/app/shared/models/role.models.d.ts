import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { RoleId } from '@shared/models/id/role-id';
import { Operation, RoleType } from '@shared/models/security.models';
import { ValidatorFn } from '@angular/forms';
export type SpecificRolePermissions = Operation[];
export type GenericRolePermissions = {
    [resource: string]: Operation[];
};
export type RolePermissions = SpecificRolePermissions & GenericRolePermissions;
export interface Role extends BaseData<RoleId>, ExportableEntity<RoleId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: RoleType;
    permissions: RolePermissions;
    additionalInfo?: any;
}
export declare function genericRolePermissionsValidator(required: boolean): ValidatorFn;
