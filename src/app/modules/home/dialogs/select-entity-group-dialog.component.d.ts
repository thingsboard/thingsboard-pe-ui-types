import { DestroyRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { Observable } from 'rxjs';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityType } from '@shared/models/entity-type.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export interface SelectEntityGroupDialogResult {
    groupId: string;
    group?: EntityGroupInfo;
    isNew: boolean;
}
export interface SelectEntityGroupDialogData {
    ownerId: EntityId;
    targetGroupType: EntityType;
    selectEntityGroupTitle: string;
    confirmSelectTitle: string;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    excludeGroupIds: Array<string>;
    onEntityGroupSelected: (result: SelectEntityGroupDialogResult) => Observable<boolean>;
}
export declare class SelectEntityGroupDialogComponent extends DialogComponent<SelectEntityGroupDialogComponent, SelectEntityGroupDialogResult> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    protected userPermissionsService: UserPermissionsService;
    protected entityGroupService: EntityGroupService;
    data: SelectEntityGroupDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<SelectEntityGroupDialogComponent, SelectEntityGroupDialogResult>;
    fb: UntypedFormBuilder;
    private destroyRef;
    selectEntityGroupFormGroup: UntypedFormGroup;
    submitted: boolean;
    ownerId: EntityId;
    targetGroupType: EntityType;
    selectEntityGroupTitle: string;
    confirmSelectTitle: string;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    excludeGroupIds: Array<string>;
    onEntityGroupSelected: (result: SelectEntityGroupDialogResult) => Observable<boolean>;
    createEnabled: boolean;
    constructor(store: Store<AppState>, router: Router, userPermissionsService: UserPermissionsService, entityGroupService: EntityGroupService, data: SelectEntityGroupDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<SelectEntityGroupDialogComponent, SelectEntityGroupDialogResult>, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    private updateDisabledState;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    selectEntityGroup(): void;
    private groupSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectEntityGroupDialogComponent, [null, null, null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectEntityGroupDialogComponent, "tb-select-entity-group-dialog", never, {}, {}, never, never, false, never>;
}
