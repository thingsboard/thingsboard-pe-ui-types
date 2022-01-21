import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { Role } from '@shared/models/role.models';
import { RoleType } from '@shared/models/security.models';
import { GroupPermission, GroupPermissionInfo } from '@shared/models/group-permission.models';
import * as i0 from "@angular/core";
export declare class RoleService {
    private http;
    constructor(http: HttpClient);
    getRoles(pageLink: PageLink, type?: RoleType, config?: RequestConfig): Observable<PageData<Role>>;
    getRolesByIds(roleIds: Array<string>, config?: RequestConfig): Observable<Array<Role>>;
    getRole(roleId: string, config?: RequestConfig): Observable<Role>;
    saveRole(role: Role, config?: RequestConfig): Observable<Role>;
    deleteRole(roleId: string, config?: RequestConfig): Observable<Object>;
    saveGroupPermission(groupPermission: GroupPermission, config?: RequestConfig): Observable<GroupPermission>;
    deleteGroupPermissions(groupPermissionIds: string[], config?: RequestConfig): Observable<any>;
    deleteGroupPermission(groupPermissionId: string, config?: RequestConfig): Observable<any>;
    getUserGroupPermissions(userGroupId: string, config?: RequestConfig): Observable<Array<GroupPermissionInfo>>;
    getEntityGroupPermissions(entityGroupId: string, config?: RequestConfig): Observable<Array<GroupPermissionInfo>>;
    getGroupPermissionInfo(groupPermissionId: string, isUserGroup: boolean, config?: RequestConfig): Observable<GroupPermissionInfo>;
    loadUserGroupPermissionInfos(groupPermissions: Array<GroupPermission>, config?: RequestConfig): Observable<Array<GroupPermissionInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleService>;
}
