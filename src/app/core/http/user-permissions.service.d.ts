import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllowedPermissionsInfo, Operation, Resource } from '@shared/models/security.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityGroup, EntityGroupInfo } from '@shared/models/entity-group.models';
import * as i0 from "@angular/core";
export declare class UserPermissionsService {
    private http;
    private operationsByResource;
    private allowedGroupRoleOperations;
    private allowedGroupOwnerOnlyOperations;
    private allowedGroupOwnerOnlyGroupOperations;
    private allowedResources;
    private userPermissions;
    private userOwnerId;
    constructor(http: HttpClient);
    loadPermissionsInfo(): Observable<AllowedPermissionsInfo>;
    getOperationsByResource(resource: Resource): Operation[];
    getAllowedGroupRoleOperations(): Operation[];
    getAllowedResources(): Resource[];
    hasReadGroupsPermission(entityType: EntityType): boolean;
    hasGenericReadGroupsPermission(entityType: EntityType): boolean;
    hasSharedReadGroupsPermission(entityType: EntityType): boolean;
    hasReadGenericPermission(resource: Resource): boolean;
    hasGenericPermission(resource: Resource, operation: Operation): boolean;
    hasGenericPermissionByEntityGroupType(operation: Operation, groupType: EntityType): boolean;
    hasGenericEntityGroupTypePermission(operation: Operation, groupType: EntityType): boolean;
    hasGenericEntityGroupPermission(operation: Operation, entityGroup: EntityGroup): boolean;
    hasEntityGroupPermission(operation: Operation, entityGroup: EntityGroupInfo): boolean;
    hasGroupEntityPermission(operation: Operation, entityGroup: EntityGroupInfo): boolean;
    isDirectlyOwnedGroup(entityGroup: EntityGroupInfo): boolean;
    isOwnedGroup(entityGroup: EntityGroupInfo): boolean;
    getUserOwnerId(): EntityId;
    isDirectOwner(ownerId: EntityId): boolean;
    hasResourcesGenericPermission(resource: Resource | Resource[], operation: Operation | Operation[]): boolean;
    private hasGenericResourcesPermission;
    private hasGenericOperationsPermission;
    private hasGenericAllPermission;
    private hasGenericResourcePermission;
    private checkOperation;
    private checkEntityGroupPermission;
    private hasGroupPermissions;
    private isCurrentUserOwner;
    private containsId;
    private idsEqual;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserPermissionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserPermissionsService>;
}
