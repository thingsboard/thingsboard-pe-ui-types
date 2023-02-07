import { PipeTransform } from '@angular/core';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { Operation, Resource } from '@shared/models/security.models';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import * as i0 from "@angular/core";
export declare class HasGenericPermissionPipe implements PipeTransform {
    private userPermissionsService;
    constructor(userPermissionsService: UserPermissionsService);
    transform(resource: Resource | Resource[], operation: Operation | Operation[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasGenericPermissionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HasGenericPermissionPipe, "hasGenericPermission", false>;
}
export declare class HasEntityGroupPermissionPipe implements PipeTransform {
    private userPermissionsService;
    constructor(userPermissionsService: UserPermissionsService);
    transform(entityGroup: EntityGroupInfo, operation: Operation): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasEntityGroupPermissionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HasEntityGroupPermissionPipe, "hasEntityGroupPermission", false>;
}
export declare class HasGroupEntityPermissionPipe implements PipeTransform {
    private userPermissionsService;
    constructor(userPermissionsService: UserPermissionsService);
    transform(entityGroup: EntityGroupInfo, operation: Operation): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasGroupEntityPermissionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HasGroupEntityPermissionPipe, "hasGroupEntityPermission", false>;
}
