import { DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { CMAssigneeType, CMScope, CustomMenu, CustomMenuInfo } from '@shared/models/custom-menu.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomMenuService } from '@core/http/custom-menu.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Authority } from '@shared/models/authority.enum';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { UserService } from '@core/http/user.service';
import { EntityInfoData } from '@shared/models/entity.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export interface ManageCustomMenuDialogData {
    add: boolean;
    customMenu?: CustomMenuInfo;
    assigneeList?: EntityInfoData[];
}
export interface ManageCustomMenuDialogResult {
    customMenu?: CustomMenu;
    assigneeType?: CMAssigneeType;
    assignToList?: string[];
}
export declare class ManageCustomMenuDialogComponent extends DialogComponent<ManageCustomMenuDialogComponent, ManageCustomMenuDialogResult> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageCustomMenuDialogData;
    dialogRef: MatDialogRef<ManageCustomMenuDialogComponent, ManageCustomMenuDialogResult>;
    private customMenuService;
    private userService;
    private dialogService;
    private translate;
    private fb;
    private destroyRef;
    Authority: typeof Authority;
    EntityType: typeof EntityType;
    CMAssigneeType: typeof CMAssigneeType;
    cmScopeTranslations: Map<CMScope, string>;
    cmAssigneeTypeTranslations: (assigneeType: CMAssigneeType, scope: CMScope) => string;
    authUser: import("@shared/models/user.model").AuthUser;
    title: string;
    customMenuFormGroup: UntypedFormGroup;
    customMenuScopes: CMScope[];
    assigneeTypes: CMAssigneeType[];
    fetchUsersFunction: any;
    constructor(store: Store<AppState>, router: Router, data: ManageCustomMenuDialogData, dialogRef: MatDialogRef<ManageCustomMenuDialogComponent, ManageCustomMenuDialogResult>, customMenuService: CustomMenuService, userService: UserService, dialogService: DialogService, translate: TranslateService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    private updateAssigneeTypes;
    private updateAssignToList;
    cancel(): void;
    submit(): void;
    private add;
    private updateAssignees;
    private handleMenuSaveOperation;
    fetchUsers(searchText?: string): Observable<Array<User>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageCustomMenuDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageCustomMenuDialogComponent, "tb-manage-custom-menu-dialog", never, {}, {}, never, never, false, never>;
}
