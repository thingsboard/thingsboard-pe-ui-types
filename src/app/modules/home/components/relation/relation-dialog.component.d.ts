import { DestroyRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityRelation, EntitySearchDirection } from '@shared/models/relation.models';
import { EntityRelationService } from '@core/http/entity-relation.service';
import { JsonObjectEditComponent } from '@shared/components/json-object-edit.component';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export interface RelationDialogData {
    isAdd: boolean;
    direction: EntitySearchDirection;
    relation: EntityRelation;
    readonly: boolean;
}
export declare class RelationDialogComponent extends DialogComponent<RelationDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: RelationDialogData;
    private entityRelationService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<RelationDialogComponent, boolean>;
    fb: FormBuilder;
    private destroyRef;
    private userPermissionService;
    relationFormGroup: FormGroup;
    additionEntityTypes: {
        [key in string]: string;
    };
    isAdd: boolean;
    direction: EntitySearchDirection;
    entitySearchDirection: typeof EntitySearchDirection;
    readonly: boolean;
    additionalInfo: FormControl;
    additionalInfoEdit: JsonObjectEditComponent;
    submitted: boolean;
    private authUser;
    constructor(store: Store<AppState>, router: Router, data: RelationDialogData, entityRelationService: EntityRelationService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<RelationDialogComponent, boolean>, fb: FormBuilder, destroyRef: DestroyRef, userPermissionService: UserPermissionsService);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelationDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelationDialogComponent, "tb-relation-dialog", never, {}, {}, never, never, false, never>;
}
