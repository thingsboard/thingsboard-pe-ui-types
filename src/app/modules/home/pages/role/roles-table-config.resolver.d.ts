import { Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Role } from '@shared/models/role.models';
import { RoleService } from '@core/http/role.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import * as i0 from "@angular/core";
export declare class RolesTableConfigResolver {
    private roleService;
    private userPermissionsService;
    private translate;
    private router;
    private datePipe;
    private customTranslate;
    private readonly config;
    constructor(roleService: RoleService, userPermissionsService: UserPermissionsService, translate: TranslateService, router: Router, datePipe: DatePipe, customTranslate: CustomTranslatePipe);
    resolve(): EntityTableConfig<Role>;
    openRoles($event: Event, role: Role): void;
    onRoleAction(action: EntityAction<Role>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RolesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RolesTableConfigResolver>;
}
