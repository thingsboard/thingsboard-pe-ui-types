import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { RoleType } from '@shared/models/security.models';
import { Role } from '@shared/models/role.models';
import * as i0 from "@angular/core";
export interface ViewRoleDialogData {
    role: Role;
}
export declare class ViewRoleDialogComponent extends DialogComponent<ViewRoleDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ViewRoleDialogData;
    dialogRef: MatDialogRef<ViewRoleDialogComponent>;
    fb: UntypedFormBuilder;
    roleFormGroup: UntypedFormGroup;
    role: Role;
    roleType: typeof RoleType;
    roleTypes: string[];
    roleTypeTranslations: Map<RoleType, string>;
    constructor(store: Store<AppState>, router: Router, data: ViewRoleDialogData, dialogRef: MatDialogRef<ViewRoleDialogComponent>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewRoleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewRoleDialogComponent, "tb-view-role-dialog", never, {}, {}, never, never, false>;
}
